/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ]
  },
  swcMinify: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "blog.realtorspk.com",
      "img.youtube.com",
      "i.ytimg.com",
      "louisville.edu",
      "lh3.googleusercontent.com"
    ],
  },
}

module.exports = nextConfig
