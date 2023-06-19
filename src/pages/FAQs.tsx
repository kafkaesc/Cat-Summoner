import Head from 'next/head';
import H1 from '@/elements/H1';
import H2 from '@/elements/H2';
import P from '@/elements/P';
import Layout from '@/layout/Layout';

export default function Faqs() {
	return (
		<Layout>
			<Head>
				<title>Frequently Asked Questions 🐱 Cat Summoner</title>
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
				a new picture it will be added to your Catbook collection.`}
			</P>
		</Layout>
	);
}
