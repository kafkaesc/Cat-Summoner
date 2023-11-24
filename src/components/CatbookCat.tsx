//import Head from 'next/head';
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
	/*const title = catName + ' 🐱 Cat Summoner';
	const ogDescription = catName + "'s page on Cat Summoner";
	const ogTitle = catName + ' 🐱 Cat Summoner';
	const ogUrl = 'https://cat-summoner.com/Catbook/' + catName;
	const twDescription = catName + "'s page on Cat Summoner";
	const twTitle = catName + ' 🐱 Cat Summoner';*/

	return (
		<Layout>
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
