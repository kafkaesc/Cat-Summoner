import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

interface CatbookData {
	harvey?: Array<number>;
	lalo?: Array<number>;
	fearless?: Array<number>;
}

export function useCatbook() {
	const [catbookData, setCatbookData] = useState<CatbookData>({});
	const ls = useLocalStorage();

	function clearCatbook() {
		ls.clear('fearless');
		ls.clear('harvey');
		ls.clear('lalo');
	}

	// I'm sorry
	function catbookCanHas(name: string, catImageId: number): boolean {
		const catData = ls.get(name) || [];
		return !catData.find((cd: number) => cd === catImageId);
	}

	function unlockCatbookImage(name: string, catImageId: number) {
		if (catbookCanHas(name, catImageId)) {
			ls.add(name, catImageId, true);
		}
	}

	useEffect(() => {
		const localCatbookData = {
			fearless: ls.get('fearless'),
			harvey: ls.get('harvey'),
			lalo: ls.get('lalo'),
		};
		setCatbookData(localCatbookData);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { catbookData, clearCatbook, unlockCatbookImage };
}
