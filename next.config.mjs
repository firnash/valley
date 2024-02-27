import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: 'dvd6ljcj7w3pj.cloudfront.net'
        }]
    }
};

export default nextConfig;
