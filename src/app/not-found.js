import Link from 'next/link';

export default function NotFound() {
  return <section className="pageHero sectionLight"><div className="shell pageHeroInner"><p className="eyebrow">404</p><h1>This page has moved or no longer exists.</h1><Link href="/" className="button buttonDark">Back Home <span>↗</span></Link></div></section>;
}
