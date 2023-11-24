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

	/**
	 * This function will begin loading the cat image associated with the name
	 * and ID. It will set __isLoading to have a 3 sec timer. The image itself
	 * is loaded ASAP and whether to enforce the 3 sec wait is up to the
	 * component calling the hook.
	 *
	 * @param {string} name The name of the cat to await
	 * @param {number} id The ID of the cat's image to retrieve
	 * @param {CatImageDetails} imageDetails Object with the details for the cat image
	 */
	function awaitCat(
		name: string,
		id: number,
		imageDetails: CatImageDetails
	): void {
		__setIsLoading(true);
		if (__activeTimeout.current) {
			clearTimeout(__activeTimeout.current);
		}
		__setImage(imageDetails);
		__activeTimeout.current = setTimeout(() => {
			unlockCatbookImage(name, id);
			__setIsLoading(false);
		}, 3000);
	}

	/**
	 * @param {string} name The name of the cat to generate a random ID for
	 * @returns {number} Random number in the range of image IDs for the chosen cat
	 */
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

	/**
	 * This function updates the __image on an instance of this hook
	 * @param {string} name The name of the cat to summon an image of
	 * @param {number | null} catImageId The specific ID to summon, or pass null to get a random image
	 */
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
