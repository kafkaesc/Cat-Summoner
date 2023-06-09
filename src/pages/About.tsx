import Head from 'next/head';
import A from '@/elements/A';
import H1 from '@/elements/H1';
import H2 from '@/elements/H2';
import P from '@/elements/P';
import Layout from '@/layout/Layout';
import FrontEndTechList from '@/components/FrontEndTechList';
import SocialLinks from '@/components/SocialLinks';

export default function About() {
	return (
		<Layout>
			<Head>
				<title>About 🐱 Cat Summoner</title>
			</Head>
			<H1 className="mb-0">About</H1>
			<P className="text-center">Built by Jared Hettinger</P>
			<SocialLinks />
			<H2>The Site</H2>
			<P>
				This is a{' '}
				<A href="https://react.dev/" rel="noreferrer" target="_blank">
					React
				</A>{' '}
				site built using the{' '}
				<A href="https://nextjs.org/" rel="noreferrer" target="_blank">
					Next.js
				</A>{' '}
				framework using{' '}
				<A
					href="https://www.typescriptlang.org/"
					rel="noreferrer"
					target="_blank"
				>
					TypeScript
				</A>{' '}
				and{' '}
				<A href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
					Tailwind
				</A>
				. The code is tested with{' '}
				<A href="https://testing-library.com/" rel="noreferrer" target="_blank">
					React Testing Library
				</A>{' '}
				and{' '}
				<A href="https://jestjs.io/" rel="noreferrer" target="_blank">
					Jest
				</A>
				. The{' '}
				<A
					href="https://github.com/kafkaesc/Cat-Summoner"
					rel="noreferrer"
					target="_blank"
				>
					full code for this project
				</A>{' '}
				is available on GitHub.
			</P>
			<FrontEndTechList />
			{/*<H2>The Cats</H2>
			<P>
				{`Pluto — this was the cat's name — was my favorite pet
				and playmate. I alone fed him, and he attended me wherever I went about
				the house. It was even with difficulty that I could prevent him from
				following me through the streets.`}
	    </P>*/}
		</Layout>
	);
}
