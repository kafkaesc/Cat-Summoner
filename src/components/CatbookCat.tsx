import Head from 'next/head';
import Image from 'next/image';
import H1 from '@/elements/H1';
import P from '@/elements/P';
import Layout from '@/layout/Layout';
import CatbookCatError from '@/components/CatbookCatError';
import CatbookCatLeft from '@/components/CatbookCatLeft';
import CatbookCatRight from '@/components/CatbookCatRight';
import { useCatImageDetails } from '@/hooks/useCatImageDetails';
import { useCats } from '@/hooks/useCats';

interface CatbookCatProps {
	catName: string;
}

export default function CatbookCat({ catName }: CatbookCatProps) {
	const { getCatByName } = useCats();
	const { getImageDetails } = useCatImageDetails();
	const cat = getCatByName(catName);
	const image = getImageDetails(catName, 1);

	if (!cat) return <CatbookCatError />;

	return (
		<Layout>
			<Head>
				<title>{cat.name} 🐱 Cat Summoner</title>
			</Head>
			<div className="pt-1.5 full-width">
				<CatbookCatLeft>
					{image && (
						<Image
							alt={image.alt}
							className="inline-block"
							height={500}
							width={500}
							src={image.src}
						/>
					)}
				</CatbookCatLeft>
				<CatbookCatRight>
					<H1 className="text-center md:text-left">{cat.name}</H1>
					<P>Some details about {cat.name}.</P>
					{cat.subheadline && <P>{cat.subheadline}</P>}
				</CatbookCatRight>
			</div>
		</Layout>
	);
}
