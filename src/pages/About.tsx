import Head from 'next/head';

import Layout from '@/layout/Layout';
import SocialLinks from '@/components/SocialLinks';

export default function About() {
	return (
		<Layout>
			<Head>
				<title>About 🐱 Sprigatito</title>
			</Head>
			<h1 className="text-3xl font-bold underline">About</h1>
			<p>About component</p>
			<SocialLinks />
		</Layout>
	);
}
