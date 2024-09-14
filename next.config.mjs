/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'preetheme.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: '192.168.10.185',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: '143.244.131.216',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'api.crayonpolitics.org',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
