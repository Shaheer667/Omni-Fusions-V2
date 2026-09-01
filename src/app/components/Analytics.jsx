'use client';

import { useEffect, useState } from 'react';

const CONSENT_KEY = 'omni-analytics-consent';

function loadScript(src, id) {
  if (document.getElementById(id)) return;
  const script = document.createElement('script');
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
  const hasAnalytics = Boolean(gaId || clarityId);
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    if (!hasAnalytics) return;
    setConsent(window.localStorage.getItem(CONSENT_KEY));
  }, [hasAnalytics]);

  useEffect(() => {
    if (consent !== 'accepted') return;

    if (gaId) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function gtag(){ window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', gaId, { anonymize_ip: true });
      loadScript(`https://www.googletagmanager.com/gtag/js?id=${gaId}`, 'omni-ga');
    }

    if (clarityId && !window.clarity) {
      window.clarity = function clarity(){ (window.clarity.q = window.clarity.q || []).push(arguments); };
      const script = document.createElement('script');
      script.id = 'omni-clarity';
      script.async = true;
      script.src = `https://www.clarity.ms/tag/${clarityId}`;
      document.head.appendChild(script);
    }
  }, [consent, gaId, clarityId]);

  if (!hasAnalytics || consent !== null) return null;

  const choose = (value) => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  };

  return (
    <div className="consentBanner" role="dialog" aria-label="Analytics preferences">
      <div>
        <strong>Analytics preferences</strong>
        <p>We use optional analytics to understand how the website is used and improve the experience. Essential site functionality works without it.</p>
      </div>
      <div className="consentActions">
        <button type="button" className="textButton" onClick={() => choose('essential')}>Essential only</button>
        <button type="button" className="button buttonDark buttonSmall" onClick={() => choose('accepted')}>Accept analytics</button>
      </div>
    </div>
  );
}
