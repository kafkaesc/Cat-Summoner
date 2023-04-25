import { useState } from 'react';

import Head from 'next/head';

import Button from '@/elements/Button';
import H1 from '@/elements/H1';

import CatImage from '@/components/CatImage';

import Layout from '@/layout/Layout';

import { ICat } from '@/interfaces/ICat';

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
				<H1>Sprigatito</H1>
				<Button buttonStyle="secondary" onClick={() => loadCat('Fearless')}>
					Fearless
				</Button>
				<Button buttonStyle="secondary" onClick={() => loadCat('Harvey')}>
					Harvey
				</Button>
				<Button buttonStyle="secondary" onClick={() => loadCat('Lalo')}>
					Lalo
				</Button>
				{cat && <CatImage name={cat.name} imageId={1} />}
			</Layout>
		</>
	);
}
