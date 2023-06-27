import Head from 'next/head';
import H1 from '@/elements/H1';
import P from '@/elements/P';
import Layout from '@/layout/Layout';

interface CatbookCatProps {
	catName: string;
}

export default function CatbookCat({ catName }: CatbookCatProps) {
	return (
		<Layout>
			<Head>
				<title>{catName} 🐱 Cat Summoner</title>
			</Head>
			<H1>{catName}</H1>
			<P>Some details about {catName}.</P>
		</Layout>
	);
}
