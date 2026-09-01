export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy information for the Omni Fusions website.',
  alternates: { canonical: '/privacy' }
};

export default function PrivacyPage() {
  return (
    <section className="pageHero sectionLight legalPage">
      <div className="shell legalWrap">
        <p className="eyebrow">PRIVACY POLICY</p>
        <h1>How we handle website inquiries and analytics.</h1>
        <div className="legalCopy">
          <p>This website is operated by Omni Fusions, a Pakistan-based creative and technology agency. This notice explains the basic information we collect through this website and why we use it.</p>
          <h2>Information you send us</h2>
          <p>When you submit the project inquiry form or email us, we may receive information such as your name, email address, company, website, budget range, timeline and project details. We use this information to review your inquiry, communicate with you and evaluate whether Omni Fusions is a good fit for the project.</p>
          <h2>Optional analytics</h2>
          <p>If analytics are enabled on the website and you choose to accept them, we may use tools such as Google Analytics or Microsoft Clarity to understand website usage and improve the experience. Optional analytics are not required for the website’s essential functionality.</p>
          <h2>Sharing and retention</h2>
          <p>We do not sell website inquiry data. Information may be processed by service providers used to operate the website, email delivery and analytics. We keep inquiry information only as long as reasonably needed for business communication, project records and applicable legal or administrative purposes.</p>
          <h2>Your choices</h2>
          <p>You can decline optional analytics through the website’s analytics preferences. You can also contact us to ask about personal information you have submitted through this website.</p>
          <h2>Contact</h2>
          <p>For privacy questions, contact <a href="mailto:info@omnifusions.com">info@omnifusions.com</a>.</p>
          <p className="legalNote">This policy is a practical website notice and should be reviewed with your legal adviser if your operations require jurisdiction-specific terms.</p>
        </div>
      </div>
    </section>
  );
}
