import Head from 'next/head';
import H1 from '@/elements/H1';
import Link from '@/elements/Link';
import P from '@/elements/P';
import Layout from '@/layout/Layout';

export default function CatbookCatError() {
	return (
		<Layout>
			<Head>
				<title>Error 🐱 Cat Summoner</title>
			</Head>
			<H1>Oops!</H1>
			<P>
				{`This is not a valid Catbook page. You can try to find the cat you're looking for on the `}
				<Link href="/Catbook">Catbook page</Link>
				{` or return to the `}
				<Link href="/">Cat Summoner main page</Link>
				{` and try to meet some cats.`}.
			</P>
		</Layout>
	);
}
