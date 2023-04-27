import Head from 'next/head';

import H1 from '@/elements/H1';
import P from '@/elements/P';

import Layout from '@/layout/Layout';

const imgData = {
	alt: 'imgData alt',
	src: 'imgData src',
};

export default function Catbook() {
	return (
		<Layout>
			<Head>
				<title>Catbook 🐱 Cat Summoner</title>
			</Head>
			<H1>Catbook</H1>
			<P>
				{`I took from their sconces two flambeaux, and giving one to Fortunato, bowed him through several suites of rooms to the archway that led into the vaults. I passed down a long and winding staircase, requesting him to be cautious as he followed. We came at length to the foot of the descent, and stood together upon the damp ground of the catacombs of the Montresors.`}
			</P>
		</Layout>
	);
}
