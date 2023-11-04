const debug = process.env.NODE_ENV !== 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
	/*
	exportPathMap: function () {
		// /Next-React-Components
		return {
			'/': { page: '/' },
			'/404': { page: '/404' },
			'/About': { page: '/About' },
			'/Catbook': { page: '/Catbook' },
			'/Catbook/[catName]': { page: '/Catbook/[catName]' },
			'/FAQs': { page: '/FAQs' },
		};
	},
	assetPrefix: !debug ? 'https://kafkaesc.github.io/Cat-Summoner/' : '',
	*/
	reactStrictMode: true,
	images: {
    loader: 'akamai',
    path: '/'
}
};

module.exports = nextConfig;
