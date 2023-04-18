// React Imports
import { useState } from 'react';

// Next Imports
import Head from 'next/head';
import { Inter } from 'next/font/google';

// TypeScript Interfaces
import { ICat } from '@/interfaces/ICat';

// Element Components
import Button from '@/elements/Button';
import CatImage from '@/components/CatImage';

const inter = Inter({ subsets: ['latin'] });

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
				<title>Sprigatito &mdash; The next cat app</title>
				<meta
					name="description"
					content="Sprigatito &mdash; The next cat app"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="text-3xl font-bold underline">Sprigatito</h1>
			<p>Under Construction</p>
			{cat && <CatImage name={cat.name} imageId={1} />}
			<Button onClick={() => loadCat('Fearless')}>Fearless</Button>
			<Button onClick={() => loadCat('Harvey')}>Harvey</Button>
			<Button onClick={() => loadCat('Lalo')}>Lalo</Button>
		</>
	);
}
