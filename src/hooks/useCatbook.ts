import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

interface CatbookData {
	fearless?: number[];
	harvey?: number[];
	lalo?: number[];
	zelda?: number[];
}

export function useCatbook() {
	const [__catbookData, __setCatbookData] = useState<CatbookData>({});
	const ls = useLocalStorage();

	function clearCatbook() {
		ls.clear('fearless');
		ls.clear('harvey');
		ls.clear('lalo');
		ls.clear('zelda');
		__setCatbookData({});
	}

	// I'm sorry
	function catbookCanHas(name: string, catImageId: number): boolean {
		const catData = ls.get(name.toLocaleLowerCase()) || [];
		return !catData.find((cd: number) => cd === catImageId);
	}

	function getCatbookDataFor(name: string) {
		const normalName = name.toLocaleLowerCase();
		if (normalName === 'fearless') return __catbookData.fearless;
		if (normalName === 'harvey') return __catbookData.harvey;
		if (normalName === 'lalo') return __catbookData.lalo;
		if (normalName === 'zelda') return __catbookData.zelda;
	}

	function isEmpty() {
		if (
			(!__catbookData.fearless ||
				(__catbookData.fearless && __catbookData.fearless.length === 0)) &&
			(!__catbookData.harvey ||
				(__catbookData.harvey && __catbookData.harvey.length === 0)) &&
			(!__catbookData.lalo ||
				(__catbookData.lalo && __catbookData.lalo.length === 0)) &&
			(!__catbookData.zelda ||
				(__catbookData.zelda && __catbookData.zelda.length === 0))
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
		__setCatbookData(localCatbookData);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		catbookData: __catbookData,
		clearCatbook,
		getCatbookDataFor,
		isEmpty,
		unlockCatbookImage,
	};
}
