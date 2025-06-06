import Head from 'next/head';
import H1 from '@/elements/H1';
import Layout from '@/layout/Layout';
import CatbookFull from '@/components/CatbookFull';

/**
 * @returns {JSX.Element} Page-level JSX component for the Catbook page, which
 * is a photobook page showing the photos the user has previously unlocked.
 */
export default function Catbook(): JSX.Element {
	return (
		<Layout>
			<Head>
				<title>Catbook 🐱 Cat Summoner</title>
				{/* OpenGraph Meta Tags */}
				<meta property="og:description" content="The Catbook at Cat Summoner, revisit the cats you've met" />
				<meta property="og:image" content="https://cat-summoner.com/ogp.png" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:title" content="Catbook 🐱 Cat Summoner, the Next cat app" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://cat-summoner.com/Catbook" />
				{/* Twitter Card Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@_kafkaesc" />
				<meta name="twitter:description" content="The Catbook at Cat Summoner, revisit the cats you've met" />
				<meta name="twitter:image" content="https://cat-summoner.com/twc.png" />
				<meta name="twitter:image:alt" content="A black and white cat sits in front of a dark night sky, he looks back toward the camera, the words Cat Summoner float in the foreground by his face" />
				<meta name="twitter:site" content="@_kafkaesc" />
				<meta name="twitter:title" content="Catbook 🐱 Cat Summoner, the Next cat app" />
			</Head>
			<H1 className="mb-2">Catbook</H1>
			<CatbookFull />
		</Layout>
	);
}
