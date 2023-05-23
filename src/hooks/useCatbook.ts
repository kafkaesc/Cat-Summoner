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

	function unlockCatbookImage(name: string, catImageId: number) {
		// TODO: Add the catImageId into data as catbookData[name]: [...prev, catImageId]
		// Duplicate numbers should not be inserted into the array.
		// Write the new array into localStorage.
		// Unlocking cat images should be a one-way process except
		// when clearing the entire catbook.
		ls.add(name, catImageId, true);
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
