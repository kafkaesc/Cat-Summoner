import Head from 'next/head';
import Image from 'next/image';
import Button from '@/elements/Button';
import H1 from '@/elements/H1';
import Layout from '@/layout/Layout';
import { useCatImageDetails } from '@/hooks/useCatImageDetails';

export default function Home() {
	const { imageDetails: catImage, setCat } = useCatImageDetails();

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
				<H1>Cat Summoner</H1>
				<Button buttonStyle="secondary" onClick={() => loadCat('Fearless')}>
					Fearless
				</Button>
				<Button buttonStyle="secondary" onClick={() => loadCat('Harvey')}>
					Harvey
				</Button>
				<Button buttonStyle="secondary" onClick={() => loadCat('Lalo')}>
					Lalo
				</Button>
				{catImage && <Image {...catImage} alt={catImage.alt} />}
			</Layout>
		</>
	);
}
