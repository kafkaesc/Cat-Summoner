import Head from 'next/head';
import H1 from '@/elements/H1';
import Layout from '@/layout/Layout';
import CatSummonCircle from '@/components/CatSummonCircle';

/**
 * @returns {JSX.Element} JSX component for the index/home page
 */
export default function Home() {
	return (
		<>
			<Head>
				<title>
					Cat Summoner 🐱 the Next cat app, built by Jared Hettinger
				</title>
				<meta name="description" content="Make new friends. Call a cat by name, wait a few seconds, and see a photo of them appear. Collect new photos in your Catbook, stored locally in your browser." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				{/* OpenGraph Meta Tags */}
				<meta property="og:description" content="Make new friends. Call a cat by name, wait a few seconds, and see a photo of them appear. Collect new photos in your Catbook, stored locally in your browser." />
				<meta property="og:image" content="https://cat-summoner.com/ogp.png" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:title" content="Cat Summoner 🐱 the Next cat app, built by Jared Hettinger" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://cat-summoner.com/" />
				{/* Twitter Card Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@_kafkaesc" />
				<meta name="twitter:description" content="Make new friends. Call a cat by name, wait a few seconds, and see a photo of them appear. Collect new photos in your Catbook, stored locally in your browser." />
				<meta name="twitter:site" content="@_kafkaesc" />
				<meta name="twitter:title" content="Cat Summoner 🐱 the Next cat app, built by Jared Hettinger" />
				<meta name="twitter:image" content="http://cat-summoner.com/twc.png" />
				<meta name="twitter:image:src" content="http://cat-summoner.com/twc.png" />
				<meta name="twitter:image:alt" content="A black and white cat sits in front of a dark night sky, he looks back toward the camera, the words Cat Summoner float in the foreground by his face" />
			</Head>
			<Layout>
				<H1 className="mb-2">Cat Summoner</H1>
				<CatSummonCircle />
			</Layout>
		</>
	);
}
