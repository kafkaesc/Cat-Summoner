import Head from 'next/head';
//import Image from 'next/image';
import { Inter } from 'next/font/google';
//import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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
		</>
	);
}
