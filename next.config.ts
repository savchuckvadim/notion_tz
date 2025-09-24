import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    async redirects() {
        return [
            {
                source: "/",
                destination: "/home",
                permanent: true, // 308 (true) или 307 (false)
            },
        ];
    },
};

export default nextConfig;
