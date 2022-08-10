/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    USERNAME_MAIL:process.env.USERNAME_MAIL,
    PASSWORD_MAIL:process.env.PASSWORD_MAIL,
  },
  images: {
    domains: ['drive.google.com'],
  },
}

module.exports = nextConfig
