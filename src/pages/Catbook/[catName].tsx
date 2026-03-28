import Head from 'next/head';
import { useRouter } from 'next/router';
import CatbookCat from '@/components/CatbookCat';
import CatbookCatError from '@/components/CatbookCatError';
import { useCats } from '@/hooks/useCats';

export default function CatPage() {
	// Get catName from the URL and the list of cat names from the useCats hook
	const router = useRouter();
	const catNames = useCats().getCatNames();
	const catName = router.query.catName;

	// Check if the catName is valid, if not, return true
	function invalidCatName(catName: string | string[] | undefined) {
		if (!catName || typeof catName !== 'string') return true;

		catName = catName.toLowerCase();

		if (catNames.find((cn) => cn.toLowerCase() === catName)) return false;

		return true;
	}

	// Check here to prevent a flicker before CatbookCat loads
	if (typeof catName === 'undefined' || !catNames) return <></>;

	// If the catName is invalid, show the error component
	if (invalidCatName(catName)) return <CatbookCatError />;

	// Confirmed string for the catName
	const cn = '' + catName;

	// Meta tag content for the Head component
	const title = cn + ' 🐱 Cat Summoner';
	const ogDescription = cn + "'s page on Cat Summoner";
	const ogTitle = cn + ' 🐱 Cat Summoner';
	const ogUrl = 'https://cat-summoner.com/Catbook/' + cn;
	const twDescription = cn + "'s page on Cat Summoner";
	const twTitle = cn + ' 🐱 Cat Summoner';

	return (
		<>
			<Head>
				<title>{title}</title>
				{/* OpenGraph Meta Tags */}
				<meta property="og:description" content={ogDescription} />
				<meta property="og:image" content="https://cat-summoner.com/ogp.png?v=2" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:title" content={ogTitle} />
				<meta property="og:url" content={ogUrl} />
				{/* Twitter Card Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@_kafkaesc" />
				<meta name="twitter:description" content={twDescription} />
				<meta name="twitter:image" content="https://cat-summoner.com/twc.png?v=2" />
				<meta name="twitter:image:alt" content="A black and white cat sits in front of a dark night sky, he looks back toward the camera, the words Cat Summoner float in the foreground by his face" />
				<meta name="twitter:site" content="@_kafkaesc" />
				<meta name="twitter:title" content={twTitle} />
			</Head>
			<CatbookCat catName={cn} />
		</>
	);
}
