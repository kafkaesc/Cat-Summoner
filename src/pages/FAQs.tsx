import Head from 'next/head';
import H1 from '@/elements/H1';
import P from '@/elements/P';
import Layout from '@/layout/Layout';

export default function Faqs() {
	return (
		<Layout>
			<Head>
				<title>Frequently Asked Questions 🐱 Cat Summoner</title>
			</Head>
			<H1>FAQs</H1>
			<P>
				{`The edge of the whirl was represented by a broad belt of gleaming spray; but no particle of this slipped into the mouth of the terrific funnel, whose interior, as far as the eye could fathom it, was a smooth, shining, and jet-black wall of water, inclined to the horizon at an angle of some forty-five degrees, speeding dizzily round and round with a swaying and sweltering motion, and sending forth to the winds an appalling voice, half shriek, half roar, such as not even the mighty cataract of Niagara ever lifts up in its agony to Heaven.`}
			</P>
		</Layout>
	);
}
