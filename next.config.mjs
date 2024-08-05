/** @type {import('next').NextConfig} */
const nextConfig = {
    // svgr/webpack config for svg import
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        return config;
    }
};

export default nextConfig;
