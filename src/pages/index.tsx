import Head from 'next/head';
import Image from 'next/image';
import Button from '@/elements/Button';
import H1 from '@/elements/H1';
import Layout from '@/layout/Layout';
import { useCatImageDetails } from '@/hooks/useCatImageDetails';

import loading from 'public/assets/images/loading.png';

export default function Home() {
	const {
		imageDetails: catImage,
		isLoading: catImageIsLoading,
		setCat,
	} = useCatImageDetails();

	function loadCat(name: string) {
		setCat(name);
	}

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
				<Button buttonStyle="secondary" onClick={() => loadCat('Fearless')}>
					Fearless
				</Button>
				<Button buttonStyle="secondary" onClick={() => loadCat('Harvey')}>
					Harvey
				</Button>
				<Button buttonStyle="secondary" onClick={() => loadCat('Lalo')}>
					Lalo
				</Button>
				{catImageIsLoading && (
					<Image
						alt="Loading"
						className="animate-spin-3"
						height="500"
						width="500"
						src={loading}
					/>
				)}
				{!catImageIsLoading && catImage && (
					<Image
						alt={catImage.alt}
						height={catImage.height}
						width={catImage.width}
						src={catImage.src}
					/>
				)}
			</Layout>
		</>
	);
}
