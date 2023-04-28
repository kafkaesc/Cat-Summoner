import { useEffect, useState } from 'react';
import Head from 'next/head';
import H1 from '@/elements/H1';
import H2 from '@/elements/H2';
import Layout from '@/layout/Layout';
import Polaroid from '@/components/Polaroid';
import { useCatImageDetails } from '@/hooks/useCatImageDetails';

export default function Catbook() {
	const [catPics, setCatPics] = useState<any>({});
	const { getallFor: getCatImagesFor } = useCatImageDetails();

	useEffect(() => {
		const newCatPics = {
			fearless: getCatImagesFor('fearless'),
			harvey: getCatImagesFor('harvey'),
			lalo: getCatImagesFor('lalo'),
		};
		setCatPics(newCatPics);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Layout>
			<Head>
				<title>Catbook 🐱 Cat Summoner</title>
			</Head>
			<H1>Catbook</H1>
			<H2>Fearless</H2>
			{catPics.lalo &&
				catPics.fearless.map((pic: any, index: number) => (
					<Polaroid key={index} {...pic} />
				))}
			<H2>Harvey</H2>
			{catPics.lalo &&
				catPics.harvey.map((pic: any, index: number) => (
					<Polaroid key={index} {...pic} />
				))}
			<H2>Lalo</H2>
			{catPics.lalo &&
				catPics.lalo.map((pic: any, index: number) => (
					<Polaroid key={index} {...pic} />
				))}
		</Layout>
	);
}
