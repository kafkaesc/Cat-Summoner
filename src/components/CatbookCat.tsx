import Head from 'next/head';
import Image from 'next/image';
import H1 from '@/elements/H1';
import H2 from '@/elements/H2';
import P from '@/elements/P';
import Layout from '@/layout/Layout';
import CatbookCatError from '@/components/CatbookCatError';
import CatbookCatLeft from '@/components/CatbookCatLeft';
import CatbookCatRight from '@/components/CatbookCatRight';
import { useCatbookHighlightAndImages } from '@/hooks/useCatbookHighlightAndImages';
import { useCats } from '@/hooks/useCats';

interface CatbookCatProps {
	catName: string;
}

export default function CatbookCat({ catName }: CatbookCatProps) {
	const { getCatByName } = useCats();
	const { getHighlightAndImages } = useCatbookHighlightAndImages();
	const cat = getCatByName(catName);

	if (!cat) return <CatbookCatError />;

	const hai = getHighlightAndImages(catName);

	return (
		<Layout>
			<Head>
				<title>{cat.name} 🐱 Cat Summoner</title>
			</Head>
			<div className="pt-1.5 full-width">
				<CatbookCatLeft>
					{hai && hai.highlight && (
						<Image
							alt={hai.highlight.alt}
							className="inline-block"
							height={500}
							width={500}
							src={hai.highlight.src}
						/>
					)}
				</CatbookCatLeft>
				<CatbookCatRight>
					<H1 className="mb-2 text-center md:text-left">{cat.name}</H1>
					{cat.subheadline && <P>{cat.subheadline}</P>}
					{cat.about && <P>{cat.about}</P>}
				</CatbookCatRight>
			</div>
			<div className="border pt-1.5 full-width">
				<H2>Pics</H2>
			</div>
		</Layout>
	);
}
