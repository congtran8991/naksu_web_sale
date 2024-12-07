/** @type {import('next').NextConfig} */
const nextConfig = {
  locales: ['en', 'vi'], // Danh sách các ngôn ngữ
  defaultLocale: 'en', // Ngôn ngữ mặc định,
  images: {
    domains: ['bizweb.dktcdn.net'],
  },
};

export default nextConfig;
