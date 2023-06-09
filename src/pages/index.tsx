import Head from 'next/head';
import Image from 'next/image';
import Button from '@/elements/Button';
import H1 from '@/elements/H1';
import Layout from '@/layout/Layout';
import { useCatSummon } from '@/hooks/useCatSummon';

import loading from 'public/assets/images/loading.png';

const cats = ['Fearless', 'Harvey', 'Lalo', 'Zelda'];

export default function Home() {
	const { isLoading: catIsLoading, summonedCat, summonCat } = useCatSummon();

	return (
		<>
			<Head>
				<title>Cat Summoner 🐱 the next cat app</title>
				<meta name="description" content="Cat-Summoner 🐱 the next cat app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
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
