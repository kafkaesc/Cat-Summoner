import Head from 'next/head';
import Image from 'next/image';
import Link from '@/elements/Link';
import P from '@/elements/P';
import ContentColumn from '@/layout/ContentColumn';
import Heading404 from '@/components/Heading404';
import { useCatImageDetails } from '@/hooks/useCatImageDetails';

/**
 * @returns {JSX.Element} JSX component for the 404 page
 */
export default function Custom404() {
	const { getSpecialImage } = useCatImageDetails();
	const image = getSpecialImage('404');
	return (
		<>
			<Head>
				<title>404 🐱 Cat Summoner</title>
				{/* OpenGraph Meta Tags */}
				<meta property="og:description" content="Page not found" />
				<meta property="og:title" content="404 🐱 Cat Summoner" />
				<meta property="og:url" content="https://cat-summoner.com/FAQs" />
				{/* Twitter Card Meta Tags */}
				<meta name="twitter:description" content="Page not found" />
				<meta name="twitter:title" content="404 🐱 Cat Summoner" />
			</Head>
			<div className="h-screen bg-black">
				<ContentColumn>
					<Heading404 />
					{image && (
						<Image
							alt={image.alt}
							className="mx-auto"
							height={400}
							width={400}
							src={image.src}
						/>
					)}
					<P className="text-center text-cs-white">
						That page does not exist. Please double check the URL or{' '}
						<Link href="/" linkStyle="dark-background">
							return home
						</Link>
						.
					</P>
				</ContentColumn>
			</div>
		</>
	);
}
