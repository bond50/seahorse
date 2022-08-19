/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        APP_NAME: "SEAHORSE ENERGY LIMITED",
        API_DEVELOPMENT: `http://localhost:8001/api`,
        API_PRODUCTION: "https://seahorsenergy.com/api",
        GOOGLE_ANALYTICS: "",
        PRODUCTION: false,
        DOMAIN_DEVELOPMENT: `http://localhost:3000`,
        DOMAIN_PRODUCTION: "seahorsenergy.com",
        SITE: "https://seahorsenergy.com",
    },
    images: {
        domains: [
            'localhost',
            'images.pexels.com',
            'www.pexels.com',
            'cdn.pixabay.com',
            'images.unsplash.com'
        ],
    },

}

module.exports = nextConfig
