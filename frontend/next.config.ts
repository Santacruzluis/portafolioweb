/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones para el plan gratuito
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.BACKEND_URL + '/api/:path*',
      },
    ];
  },
};

export default nextConfig;
