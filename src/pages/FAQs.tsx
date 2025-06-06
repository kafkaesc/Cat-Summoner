import Head from 'next/head';
import A from '@/elements/A';
import H1 from '@/elements/H1';
import H2 from '@/elements/H2';
import Link from '@/elements/Link';
import P from '@/elements/P';
import Layout from '@/layout/Layout';

/**
 * @returns {JSX.Element} Page-level JSX component for the FAQ page
 */
export default function Faqs(): JSX.Element {
	return (
		<Layout>
			<Head>
				<title>Frequently Asked Questions 🐱 Cat Summoner</title>
				{/* OpenGraph Meta Tags */}
				<meta property="og:description" content="FAQs (frequently asked questions) about Cat Summoner" />
				<meta property="og:image" content="https://cat-summoner.com/ogp.png" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:title" content="FAQs 🐱 Cat Summoner, the Next cat app" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://cat-summoner.com/FAQs" />
				{/* Twitter Card Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@_kafkaesc" />
				<meta name="twitter:description" content="FAQs (frequently asked questions) about Cat Summoner" />
				<meta name="twitter:image" content="https://cat-summoner.com/twc.png" />
				<meta name="twitter:image:alt" content="A black and white cat sits in front of a dark night sky, he looks back toward the camera, the words Cat Summoner float in the foreground by his face" />
				<meta name="twitter:site" content="@_kafkaesc" />
				<meta name="twitter:title" content="FAQs 🐱 Cat Summoner, the Next cat app" />
			</Head>
			<H1 className="mb-0">FAQs</H1>
			<span className="block mb-2 font-serif text-lg italic text-center">
				Frequently Asked Questions
			</span>
			<H2>What is this site?</H2>
			<P>
				{`Cat Summoner is an interactive site where you can "summon" cats `}
				{`by calling their name. After 3 seconds the cat will arrive, `}
				{`represented by a randomly selected picture of them. When you encounter `}
				{`a new picture it will be added to your `}
				<Link href="/Catbook">Catbook</Link>
				{` collection.`}
			</P>
			<H2>Is Cat Summoner tracking my data?</H2>
			<P>
				{`Absolutely not. Cat Summoner is using `}
				<A
					href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
					rel="noreferrer"
					target="_blank"
				>
					localStorage
				</A>
				{` to store data across browser sessions. This means the data is stored on `}
				{`your computer—specifically by your current web browser. It also means `}
				{`that the data for this site will not load across browsers. For example, `}
				{`if you are using Chrome and visit this site in Firefox any images you `}
				{`have unlocked will not show up on the `}
				<Link href="/Catbook">Catbook</Link> page.
			</P>
		</Layout>
	);
}
