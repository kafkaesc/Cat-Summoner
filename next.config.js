const debug = process.env.NODE_ENV !== 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
	exportPathMap: function () {
		// /Next-React-Components
		return {
			'/': { page: '/' },
			'/About': { page: '/About' },
			'/FAQs': { page: '/FAQs' },
		};
	},
	assetPrefix: !debug ? 'https://kafkaesc.github.io/Cat-Summoner/' : '',
	reactStrictMode: true,
};

module.exports = nextConfig;
