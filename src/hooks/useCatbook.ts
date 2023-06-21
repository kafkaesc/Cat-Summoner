import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

interface CatbookData {
	fearless?: Array<number>;
	harvey?: Array<number>;
	lalo?: Array<number>;
	zelda?: Array<number>;
}

export function useCatbook() {
	const [catbookData, setCatbookData] = useState<CatbookData>({});
	const ls = useLocalStorage();

	function clearCatbook() {
		ls.clear('fearless');
		ls.clear('harvey');
		ls.clear('lalo');
		ls.clear('zelda');
		setCatbookData({});
	}

	// I'm sorry
	function catbookCanHas(name: string, catImageId: number): boolean {
		const catData = ls.get(name.toLocaleLowerCase()) || [];
		return !catData.find((cd: number) => cd === catImageId);
	}

	function isEmpty() {
		if (
			(!catbookData.fearless ||
				(catbookData.fearless && catbookData.fearless.length === 0)) &&
			(!catbookData.harvey ||
				(catbookData.harvey && catbookData.harvey.length === 0)) &&
			(!catbookData.lalo ||
				(catbookData.lalo && catbookData.lalo.length === 0)) &&
			(!catbookData.zelda ||
				(catbookData.zelda && catbookData.zelda.length === 0))
		) {
			return true;
		} else {
			return false;
		}
	}

	function unlockCatbookImage(name: string, catImageId: number) {
		if (catbookCanHas(name.toLocaleLowerCase(), catImageId)) {
			ls.add(name.toLocaleLowerCase(), catImageId, true);
		}
	}

	useEffect(() => {
		const localCatbookData = {
			fearless: ls.get('fearless'),
			harvey: ls.get('harvey'),
			lalo: ls.get('lalo'),
			zelda: ls.get('zelda'),
		};
		setCatbookData(localCatbookData);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { catbookData, clearCatbook, isEmpty, unlockCatbookImage };
}
