import Image from 'next/image';

export default function BrandLogo({ dark = false, priority = false }) {
  return (
    <Image
      src={dark ? '/brand/logo-light.png' : '/brand/logo-dark.png'}
      alt="Omni Fusions"
      width={310}
      height={56}
      priority={priority}
      className="brandLogo"
    />
  );
}
