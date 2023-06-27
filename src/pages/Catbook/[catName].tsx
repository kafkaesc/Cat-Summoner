import { useRouter } from 'next/router';
import CatbookCat from '@/components/CatbookCat';
import CatbookCatError from '@/components/CatbookCatError';

export default function CatPage() {
	const router = useRouter();
	const catName = router.query.catName;

	function invalidCatName(name: any): boolean {
		if (!name || typeof name !== 'string') {
			return true;
		}
		if (
			catName !== 'Fearless' &&
			catName !== 'Harvey' &&
			catName !== 'Lalo' &&
			catName !== 'Zelda'
		) {
			return true;
		} else {
			return false;
		}
	}

	if (invalidCatName(catName)) return <CatbookCatError />;

	return <CatbookCat catName={'' + catName} />;
}
