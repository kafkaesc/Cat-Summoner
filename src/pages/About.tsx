import Head from 'next/head';

import H1 from '@/elements/H1';
import P from '@/elements/P';

import Layout from '@/layout/Layout';
import SocialLinks from '@/components/SocialLinks';

export default function About() {
	return (
		<Layout>
			<Head>
				<title>About 🐱 Cat Summoner</title>
			</Head>
			<H1>About</H1>
			<P>
				{`The box in question was, as I say, oblong. It was about six feet in length by two and a half in breadth; I observed it attentively, and like to be precise. Now this shape was peculiar; and no sooner had I seen it, than I took credit to myself for the accuracy of my guessing. I had reached the conclusion, it will be remembered, that the extra baggage of my friend, the artist, would prove to be pictures, or at least a picture; for I knew he had been for several weeks in conference with Nicolino:—and now here was a box, which, from its shape, COULD possibly contain nothing in the world but a copy of Leonardo's "Last Supper;" and a copy of this very "Last Supper," done by Rubini the younger, at Florence, I had known, for some time, to be in the possession of Nicolino.`}
			</P>
			<SocialLinks />
		</Layout>
	);
}
