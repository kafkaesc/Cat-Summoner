import { useRouter } from 'next/router';
import CatbookCat from '@/components/CatbookCat';
import CatbookCatError from '@/components/CatbookCatError';
import { useCats } from '@/hooks/useCats';

export default function CatPage(): JSX.Element {
	const router = useRouter();
	const catNames = useCats().getCatNames();
	const catName = router.query.catName;

	function invalidCatName(catName: any): boolean {
		if (!catName || typeof catName !== 'string') return true;

		catName = catName.toLowerCase();

		if (catNames.find((cn) => cn.toLowerCase() === catName)) return false;
		else return true;
	}

	// Check here to prevent a flicker before CatbookCat loads
	if (typeof catName === 'undefined' || !catNames) return <></>;

	if (invalidCatName(catName)) return <CatbookCatError />;

	return <CatbookCat catName={'' + catName} />;
}
