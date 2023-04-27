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
		// TODO: Clear the entire catbook but do not change
		// anything else in localStorage.
	}

	function unlockCatbookImage(name: string, imageId: number) {
		// TODO: Add the imageId into data as catbookData[name]: [...prev, imageId]
		// Duplicate numbers should not be inserted into the array.
		// Write the new array into localStorage.
		// Unlocking cat images should be a one-way process except when clearing
		// the entire catbook.
	}

	useEffect(() => {
		// TODO: Load the catbook data from localStorage.
	}, [ls]);

	return { catbookData, unlockCatbookImage };
}
