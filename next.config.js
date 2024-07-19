/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/.',
        destination: '/',
        permanent: true,
      },
      {
        source: '/programs ',
        destination: '/medical-debt-relief-programs',
        permanent: true,
      },
      {
        source: '/donate ',
        destination: '/medical-donations',
        permanent: true,
      },
    ]
  },
  output: 'export',
  images: {
    unoptimized: true,
    formats:['image/webp']
  }
}

module.exports = nextConfig
