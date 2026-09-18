/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' }
        ]
      }
    ];
  },
  async redirects() {
    return [
      { source: '/service', destination: '/services', permanent: true },
      { source: '/service/:path*', destination: '/services', permanent: true },
      { source: '/portfolio', destination: '/work', permanent: true },
      { source: '/portfolio/:path*', destination: '/work', permanent: true },
      { source: '/marketing-agency', destination: '/', permanent: true },
      { source: '/digital-agency', destination: '/', permanent: true },
      { source: '/freelancer-agency', destination: '/', permanent: true },
      { source: '/creative-solution', destination: '/', permanent: true },
      { source: '/personal-portfolio', destination: '/work', permanent: true },
      { source: '/showcase-portfolio', destination: '/work', permanent: true },
      { source: '/case-study-showcase', destination: '/work', permanent: true },
      { source: '/video-showcase', destination: '/work', permanent: true },
      { source: '/photography-agency', destination: '/', permanent: true },
      { source: '/architecture-agency', destination: '/', permanent: true }
    ];
  }
};

export default nextConfig;
