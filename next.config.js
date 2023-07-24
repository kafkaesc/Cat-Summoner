const debug = process.env.NODE_ENV !== 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
	exportPathMap: function () {
		// /Next-React-Components
		return {
			'/': { page: '/' },
		};
	},
	assetPrefix: !debug ? 'https://kafkaesc.github.io/Cat-Summoner/' : '',
	reactStrictMode: true,
};

module.exports = nextConfig;
