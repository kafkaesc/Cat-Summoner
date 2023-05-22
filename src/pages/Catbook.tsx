import { useEffect, useState } from 'react';
import Head from 'next/head';
import H1 from '@/elements/H1';
import H2 from '@/elements/H2';
import P from '@/elements/P';
import Layout from '@/layout/Layout';
import Polaroid from '@/components/Polaroid';
import { useCatbook } from '@/hooks/useCatbook';
import { useCatImageDetails } from '@/hooks/useCatImageDetails';

export default function Catbook() {
	const [catPics, setCatPics] = useState<any>({});
	const { catbookData: catbook } = useCatbook();
	const { getAllFor: getCatImagesFor } = useCatImageDetails();

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
			{catbook.fearless ? (
				catbook.fearless.map((cb, index) => {
					return (
						<Polaroid
							alt={`Picture ${cb} of Fearless`}
							key={`fearless-${index}-${cb}`}
							src={`/assets/images/cats/fearless-0${cb}.jpg`}
						/>
					);
				})
			) : (
				<P>You have not unlocked any Fearless pictures.</P>
			)}
			<H2>Harvey</H2>
			{catbook.harvey ? (
				catbook.harvey.map((cb, index) => {
					return (
						<Polaroid
							alt={`Picture ${cb} of Harvey`}
							key={index}
							src={`/assets/images/cats/harvey-0${cb}.jpg`}
						/>
					);
				})
			) : (
				<P>You have not unlocked any Harvey pictures.</P>
			)}
			<H2>Lalo</H2>
			{catbook.lalo ? (
				catbook.lalo.map((cb, index) => {
					return (
						<Polaroid
							alt={`Picture ${cb} of Lalo`}
							key={index}
							src={`/assets/images/cats/lalo-0${cb}.jpg`}
						/>
					);
				})
			) : (
				<P>You have not unlocked any Lalo pictures.</P>
			)}
		</Layout>
	);
}
