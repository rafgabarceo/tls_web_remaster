/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thelasallian.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

//jetpack_featured_media_url: https://thelasallian.com/wp-content/uploads/2022/12/VANGIE_E-Jeepneys_Heather_Raymundo_NWM.jpeg
//avatar_url: https://secure.gravatar.com/avatar/a68345fe23ff9a25f11e4fc1a20e8032?s=96&d=blank&r=g

module.exports = nextConfig
