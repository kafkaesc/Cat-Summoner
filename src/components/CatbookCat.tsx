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

	// Meta tag content for the Head component
	const ogDescription = catName + "'s page on Cat Summoner";
	const ogTitle = catName + ' 🐱 Cat Summoner';
	const ogUrl = 'https://cat-summoner.com/Catbook/' + catName;
	const twDescription = catName + "'s page on Cat Summoner";
	const twTitle = catName + ' 🐱 Cat Summoner';

	return (
		<Layout>
			<Head>
				<title>{cat.name} 🐱 Cat Summoner</title>
				{/* OpenGraph Meta Tags */}
				<meta property="og:description" content={ogDescription} />
				<meta
					property="og:image"
					content="https://cat-summoner.com/ogp.png?v=2"
				/>
				<meta property="og:image:height" content="630" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:title" content={ogTitle} />
				<meta property="og:url" content={ogUrl} />
				{/* Twitter Card Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@_kafkaesc" />
				<meta name="twitter:description" content={twDescription} />
				<meta name="twitter:image" content="https://cat-summoner.com/?v=2" />
				<meta
					name="twitter:image:alt"
					content="A black and white cat sits in front of a dark night sky, he looks back toward the camera, the words Cat Summoner float in the foreground by his face"
				/>
				<meta name="twitter:site" content="@_kafkaesc" />
				<meta name="twitter:title" content={twTitle} />
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
