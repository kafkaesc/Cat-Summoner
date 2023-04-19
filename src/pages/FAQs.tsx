import Head from 'next/head';

import Layout from '@/layout/Layout';

export default function Faqs() {
	return (
		<Layout>
			<Head>
				<title>Frequently Asked Questions 🐱 Sprigatito</title>
			</Head>
			<h1 className="text-3xl font-bold underline">FAQs</h1>
			<p>FAQs component</p>
		</Layout>
	);
}
