import Link from 'next/link';

export const metadata = {
  title: 'Thanks — We Received Your Project',
  robots: { index: false, follow: false }
};

export default function ThankYouPage() {
  return (
    <section className="pageHero sectionLight thankYouPage">
      <div className="shell pageHeroInner">
        <p className="eyebrow">PROJECT RECEIVED</p>
        <h1>Thanks. We’ll take it from here.</h1>
        <p>Your project details are in. We’ll review the scope and reply within one business day with the clearest next step.</p>
        <div className="buttonRow">
          <Link href="/work" className="button buttonDark">See Our Work <span>↗</span></Link>
          <Link href="/" className="textLink">Back to Home <span>→</span></Link>
        </div>
      </div>
    </section>
  );
}
