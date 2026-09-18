import CookiePreferences from '../components/CookiePreferences';

export const metadata = {
  title: 'Cookie Policy',
  description: 'Information about cookies, local storage and optional analytics on the Omni Fusions website.',
  alternates: { canonical: '/cookies' }
};

export default function CookiesPage() {
  return (
    <section className="pageHero sectionLight legalPage">
      <div className="shell legalWrap">
        <p className="eyebrow">COOKIE POLICY</p>
        <h1>How analytics preferences and browser storage work on this site.</h1>

        <div className="legalCopy">
          <p className="legalUpdated">Last updated: September 18, 2026</p>

          <p>
            This website may use browser storage and, when enabled with your consent, optional analytics technologies. This page explains their purpose in plain language.
          </p>

          <h2>Essential browser storage</h2>
          <p>
            The website may use local browser storage to remember choices that are necessary for the experience, including whether you accepted or declined optional analytics. Essential functionality does not require you to accept analytics.
          </p>

          <h2>Optional analytics</h2>
          <p>
            If configured and accepted, the website may load tools such as Google Analytics or Microsoft Clarity. These services can help us understand broad usage patterns, identify usability issues and improve the website.
          </p>

          <h2>What analytics may collect</h2>
          <p>
            Depending on the provider and your browser settings, analytics may process information such as device type, browser type, pages viewed, approximate location derived from technical data, interaction patterns and referral information. We do not use optional analytics to intentionally collect the project details you type into the contact form.
          </p>

          <h2>Managing your preferences</h2>
          <p>
            You can choose essential-only use when the analytics banner appears. You can also reset the website’s saved analytics preference and make a new choice.
          </p>

          <CookiePreferences />

          <h2>Third-party policies</h2>
          <p>
            Analytics providers may operate under their own privacy and cookie policies. Browser settings and privacy extensions may also allow you to restrict cookies, scripts or local storage independently.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about website analytics or privacy, email <a href="mailto:info@omnifusions.com">info@omnifusions.com</a>.
          </p>

          <p className="legalNote">
            The exact technologies in use depend on the analytics services configured on the live website and your consent choice.
          </p>
        </div>
      </div>
    </section>
  );
}
