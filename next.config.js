/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.icons8.com",
            },
            {
                protocol: "https",
                hostname: "archives.bulbagarden.net",
            },
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
            },
            { protocol: "https", hostname: "lh3.googleusercontent.com" },
        ],
    },
};

module.exports = nextConfig;
