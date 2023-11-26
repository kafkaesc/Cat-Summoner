import Head from 'next/head';
import Image from 'next/image';
import Button from '@/elements/Button';
import H1 from '@/elements/H1';
import Layout from '@/layout/Layout';
import { useCatSummon } from '@/hooks/useCatSummon';

import loading from 'public/assets/images/loading.png';

const cats = ['Fearless', 'Harvey', 'Lalo', 'Zelda'];

/**
 * @returns {JSX.Element} JSX component for the index/home page
 */
export default function Home(): JSX.Element {
	const { isLoading: catIsLoading, summonedCat, summonCat } = useCatSummon();

	return (
		<>
			<Head>
				<title>
					Cat Summoner 🐱 the Next cat app, built by Jared Hettinger
				</title>
				<meta
					name="description"
					content="Cat-Summoner, the Next app where you can summon and meet new cats, built by Jared Hettinger"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				{/* OpenGraph Meta Tags */}
				<meta
					property="og:description"
					content="The Next cat app, built by Jared Hettinger"
				/>
				<meta
					property="og:image"
					content="https://cat-summoner.com/ogp.png?v=2"
				/>
				<meta property="og:image:height" content="630" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:title" content="Cat Summoner" />
				<meta property="og:url" content="https://cat-summoner.com/" />
				{/* Twitter Card Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@_kafkaesc" />
				<meta
					name="twitter:description"
					content="The Next cat app, built by Jared Hettinger"
				/>
				<meta
					name="twitter:image"
					content="https://cat-summoner.com/twc.png?v=2"
				/>
				<meta
					name="twitter:image:alt"
					content="A black and white cat sits in front of a dark night sky, he looks back toward the camera, the words Cat Summoner float in the foreground by his face"
				/>
				<meta name="twitter:site" content="@_kafkaesc" />
				<meta name="twitter:title" content="Cat Summoner" />
			</Head>
			<Layout>
				<H1 className="mb-2">Cat Summoner</H1>
				<div className="text-center md:flex">
					<div className="w-full mb-1 md:flex-none md:w-32 lg:w-64 md:py-1 md:px-0.5">
						{cats.map((cat) => (
							<Button
								buttonStyle="secondary"
								className="md:mb-1 md:w-full"
								key={cat}
								onClick={() => summonCat(cat)}
							>
								{cat}
							</Button>
						))}
					</div>
					<div className="w-full md:flex-grow md:py-1 md:px-0.5">
						{catIsLoading && (
							<Image
								alt="Loading"
								className="mx-auto animate-spin-3 md:m-0"
								height="500"
								width="500"
								src={loading}
							/>
						)}
						{catIsLoading && summonedCat && (
							<Image
								alt={summonedCat.alt}
								className="hidden"
								height={500}
								width={500}
								src={summonedCat.src}
							/>
						)}
						{!catIsLoading && summonedCat && (
							<Image
								alt={summonedCat.alt}
								className="mx-auto md:m-0"
								height={500}
								width={500}
								src={summonedCat.src}
							/>
						)}
					</div>
				</div>
			</Layout>
		</>
	);
}
