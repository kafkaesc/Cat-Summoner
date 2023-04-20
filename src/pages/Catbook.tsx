import Head from 'next/head';

import Layout from '@/layout/Layout';

export default function Catbook() {
	return (
		<Layout>
			<Head>
				<title>Catbook 🐱 Sprigatito</title>
			</Head>
			<h1 className="text-3xl font-bold underline">Catbook</h1>
			<p>
				{`I said to him --"My dear Fortunato, you are luckily met. How remarkably well you are looking to-day. But I have received a pipe of what passes for Amontillado, and I have my doubts."`}
			</p>
		</Layout>
	);
}
