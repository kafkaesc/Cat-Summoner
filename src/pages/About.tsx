import Head from 'next/head';
import A from '@/elements/A';
import H1 from '@/elements/H1';
import H2 from '@/elements/H2';
import P from '@/elements/P';
import Layout from '@/layout/Layout';
import FrontEndTechList from '@/components/FrontEndTechList';
import SocialLinks from '@/components/SocialLinks';

/**
 * @returns {JSX.Element} Page-level JSX component for the about page
 */
export default function About(): JSX.Element {
	return (
		<Layout>
			<Head>
				<title>About 🐱 Cat Summoner</title>
				{/* OpenGraph Meta Tags */}
				<meta property="og:description" content="About Cat Summoner" />
				<meta
					property="og:image"
					content="https://cat-summoner.com/ogp.png?v=2"
				/>
				<meta property="og:image:height" content="630" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:title" content="About 🐱 Cat Summoner" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://cat-summoner.com/About" />
				{/* Twitter Card Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@_kafkaesc" />
				<meta name="twitter:description" content="About Cat Summoner" />
				<meta
					name="twitter:image"
					content="https://cat-summoner.com/twc.png?v=2"
				/>
				<meta
					name="twitter:image:alt"
					content="A black and white cat sits in front of a dark night sky, he looks back toward the camera, the words Cat Summoner float in the foreground by his face"
				/>
				<meta name="twitter:site" content="@_kafkaesc" />
				<meta name="twitter:title" content="About 🐱 Cat Summoner" />
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
				. The site is hosted on{' '}
				<A
					href="https://aws.amazon.com/what-is-aws/"
					rel="noreferrer"
					target="_blank"
				>
					Amazon Web Services (AWS)
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
		</Layout>
	);
}
