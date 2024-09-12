/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack5: true,
    i18n: {
        locales: ['en', 'fr', 'es'],
        defaultLocale: 'en',
    },
};

export default nextConfig;
