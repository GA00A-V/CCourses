/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    USERNAME_MAIL:process.env.USERNAME_GMAIL,
    PASSWORD_MAIL:process.env.PASSWORD_GMAIL
  },
  images: {
    domains: ['drive.google.com'],
  },
}

module.exports = nextConfig
