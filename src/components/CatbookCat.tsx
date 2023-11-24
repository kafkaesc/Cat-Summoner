import Head from 'next/head';
import Image from 'next/image';
import H1 from '@/elements/H1';
import P from '@/elements/P';
import Layout from '@/layout/Layout';
import CatbookCatError from '@/components/CatbookCatError';
import CatbookCatLeft from '@/components/CatbookCatLeft';
import CatbookCatRight from '@/components/CatbookCatRight';
import CatPicRow from '@/components/CatPicRow';
import { useCatbookHighlightAndImages } from '@/hooks/useCatbookHighlightAndImages';
import { useCats } from '@/hooks/useCats';

interface CatbookCatProps {
	catName: string;
}

export default function CatbookCat({ catName }: CatbookCatProps): JSX.Element {
	const { getCatByName } = useCats();
	const { getHighlightAndImages } = useCatbookHighlightAndImages();
	const cat = getCatByName(catName);

	if (!cat) return <CatbookCatError />;

	// I won't be apologizing for this variable name
	const hai = getHighlightAndImages(catName);

	if (hai === null) return <CatbookCatError />;

	return (
		<Layout>
			<Head>
				<title>{cat.name} 🐱 Cat Summoner</title>
				{/* OpenGraph Meta Tags */}
				<meta
					property="og:description"
					content={`${catName}'s page on Cat Summoner`}
				/>
				<meta
					property="og:image"
					content="https://cat-summoner.com/ogp.png?v=2"
				/>
				<meta property="og:image:height" content="630" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:title" content={`${catName} 🐱 Cat Summoner`} />
				<meta
					property="og:url"
					content={`https://cat-summoner.com/Catbook/${catName}`}
				/>
				{/* Twitter Card Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@_kafkaesc" />
				<meta
					name="twitter:description"
					content={`${catName}'s page on Cat Summoner`}
				/>
				<meta name="twitter:image" content="https://cat-summoner.com/?v=2" />
				<meta
					name="twitter:image:alt"
					content="A smiling yellow cat on a steel blue background"
				/>
				<meta name="twitter:site" content="@_kafkaesc" />
				<meta name="twitter:title" content={`${catName} 🐱 Cat Summoner`} />
			</Head>
			<div className="pt-1.5 full-width">
				<CatbookCatLeft>
					{hai && hai.highlight && (
						<Image
							alt={hai.highlight.alt}
							className="inline-block"
							height={500}
							src={hai.highlight.src}
							width={500}
						/>
					)}
				</CatbookCatLeft>
				<CatbookCatRight>
					<H1 className="mb-2 text-center md:text-left">{cat.name}</H1>
					{cat.subheadline && <P>{cat.subheadline}</P>}
					{cat.about && <P>{cat.about}</P>}
				</CatbookCatRight>
			</div>
			{hai && hai.images && (
				<div className="pt-1.5 full-width">
					<CatPicRow
						catName={catName}
						images={hai.images}
						title="More Pictures"
					/>
				</div>
			)}
		</Layout>
	);
}
