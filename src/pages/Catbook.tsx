import Head from 'next/head';
import H1 from '@/elements/H1';
import H2 from '@/elements/H2';
import P from '@/elements/P';
import Layout from '@/layout/Layout';
import Polaroid from '@/components/Polaroid';
import { useCatbook } from '@/hooks/useCatbook';
import { useCatImageDetails } from '@/hooks/useCatImageDetails';

export default function Catbook() {
	const { catbookData: catbook } = useCatbook();
	const { getImage: getCatImage } = useCatImageDetails();

	return (
		<Layout>
			<Head>
				<title>Catbook 🐱 Cat Summoner</title>
			</Head>
			<H1>Catbook</H1>
			<H2>Fearless</H2>
			{catbook.fearless ? (
				catbook.fearless.map((imageId, index) => {
					const image = getCatImage('fearless', imageId);
					return image && <Polaroid key={`fearless-${index}`} {...image} />;
				})
			) : (
				<P>You have not unlocked any Fearless pictures.</P>
			)}
			<H2>Harvey</H2>
			{catbook.harvey ? (
				catbook.harvey.map((imageId, index) => {
					const image = getCatImage('harvey', imageId);
					return image && <Polaroid key={`harvey-${index}`} {...image} />;
				})
			) : (
				<P>You have not unlocked any Harvey pictures.</P>
			)}
			<H2>Lalo</H2>
			{catbook.lalo ? (
				catbook.lalo.map((imageId, index) => {
					const image = getCatImage('lalo', imageId);
					return image && <Polaroid key={`lalo-${index}`} {...image} />;
				})
			) : (
				<P>You have not unlocked any Lalo pictures.</P>
			)}
		</Layout>
	);
}
