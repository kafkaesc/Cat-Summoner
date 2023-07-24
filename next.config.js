const debug = process.env.NODE_ENV !== 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
	exportPathMap: function () {
		// /Next-React-Components
		return {
			'/': { page: '/' },
			'/ap-grid-layout': { page: '/ap-grid-layout' },
			'/ap-highlight': { page: '/ap-highlight' },
		};
	},
	assetPrefix: !debug ? 'https://kafkaesc.github.io/Cat-Summoner/' : '',
	reactStrictMode: true,
};

module.exports = nextConfig;
