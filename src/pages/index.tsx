import { useState } from 'react';

import Head from 'next/head';

import { ICat } from '@/interfaces/ICat';
import Button from '@/elements/Button';
import Layout from '@/layout/Layout';
import CatImage from '@/components/CatImage';

export default function Home() {
	const [cat, setCat] = useState<ICat | null>({});

	function loadCat(name: string) {
		switch (name.toLowerCase()) {
			case 'fearless':
				setCat({ name: 'Fearless' });
				break;
			case 'harvey':
				setCat({ name: 'Harvey' });
				break;
			case 'lalo':
				setCat({ name: 'Lalo' });
				break;
			default:
				break;
		}
	}

	return (
		<>
			<Head>
				<title>Sprigatito 🐱 the next cat app</title>
				<meta name="description" content="Sprigatito 🐱 the next cat app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<h1 className="text-3xl font-bold underline">Sprigatito</h1>
				<Button onClick={() => loadCat('Fearless')}>Fearless</Button>
				<Button onClick={() => loadCat('Harvey')}>Harvey</Button>
				<Button onClick={() => loadCat('Lalo')}>Lalo</Button>
				{cat && <CatImage name={cat.name} imageId={1} />}
			</Layout>
		</>
	);
}
