import { useRef, useState } from 'react';
import { useCatbook } from './useCatbook';
import { useCatImageDetails } from './useCatImageDetails';
import { CatImageDetails } from '@/interfaces/CatInterfaces';

export function useCatSummon() {
	const __activeTimeout = useRef<NodeJS.Timeout | null>(null);
	const [__image, __setImage] = useState<CatImageDetails | null>(null);
	const [__isLoading, __setIsLoading] = useState<boolean>(false);
	const { unlockCatbookImage } = useCatbook();
	const { getImageDetails } = useCatImageDetails();

	function awaitCat(
		name: string,
		id: number,
		imageDetails: CatImageDetails
	): void {
		__setIsLoading(true);
		if (__activeTimeout.current) {
			clearTimeout(__activeTimeout.current);
		}
		__activeTimeout.current = setTimeout(() => {
			__setImage(imageDetails);
			unlockCatbookImage(name, id);
			__setIsLoading(false);
		}, 3000);
	}

	function randomizeId(name: string): number {
		if (name.toLocaleLowerCase() === 'fearless') return 1;
		else if (name.toLocaleLowerCase() === 'harvey')
			return Math.floor(Math.random() * (6 - 1) + 1);
		else if (name.toLocaleLowerCase() === 'lalo')
			return Math.floor(Math.random() * (6 - 1) + 1);
		else if (name.toLocaleLowerCase() === 'zelda')
			return Math.floor(Math.random() * (6 - 1) + 1);
		return 1;
	}

	function summonCat(name: string, catImageId?: number | null): void {
		// Reset image before summoning new cat
		__setImage(null);
		// Use the specific catImageId if provided, otherwise generate a random one
		const id: number = catImageId ? catImageId : randomizeId(name);
		const imageDetails: CatImageDetails = getImageDetails(name, id)!;
		awaitCat(name, id, imageDetails);
	}

	return { summonedCat: __image, isLoading: __isLoading, summonCat };
}
