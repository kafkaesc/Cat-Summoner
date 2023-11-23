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
export default function Faqs() {
	return (
		<Layout>
			<Head>
				<title>Frequently Asked Questions 🐱 Cat Summoner</title>
				{/* OpenGraph Meta Tags */}
				<meta
					property="og:description"
					content="Frequently asked questions about Cat Summoner"
				/>
				<meta property="og:title" content="FAQs 🐱 Cat Summoner" />
				<meta property="og:url" content="https://cat-summoner.com/FAQs" />
				{/* Twitter Card Meta Tags */}
				<meta
					name="twitter:description"
					content="Frequently asked questions about Cat Summoner"
				/>
				<meta name="twitter:title" content="FAQs 🐱 Cat Summoner" />
			</Head>
			<H1 className="mb-0">FAQs</H1>
			<span className="block mb-2 font-serif text-lg italic text-center">
				Frequently Asked Questions
			</span>
			<H2>What is this site?</H2>
			<P>
				{`Cat Summoner is an interactive activity where you can "summon" cats 
				by calling their name. After 3 seconds the cat will arrive, 
				represented by a randomly selected picture of them. When you encounter 
				a new picture it will be added to your `}
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
				{` to store data across browser sessions. This means the data is stored on
				your computer—specifically by your current web browser. It also means
				that the data for this site will not load across browsers. For example,
				if you are using Chrome and visit this site in Firefox any images you
				have unlocked will not show up on the `}
				<Link href="/Catbook">Catbook</Link> page.
			</P>
		</Layout>
	);
}
