import { useCatbook } from '@/hooks/useCatbook';
import { useCatImageDetails } from '@/hooks/useCatImageDetails';
import { CatImageDetails } from '@/interfaces/CatInterfaces';

interface HighlightAndImages {
	highlight: CatImageDetails | null;
	images: CatImageDetails[] | null;
}

export function useCatbookHighlightAndImages() {
	const { getCatbookDataFor } = useCatbook();
	const { getImageDetails } = useCatImageDetails();

	function getHighlightAndImages(name: string): HighlightAndImages | null {
		const normalName = name.toLocaleLowerCase();
		if (
			normalName !== 'fearless' &&
			normalName !== 'harvey' &&
			normalName !== 'lalo' &&
			normalName !== 'zelda'
		) {
			return null;
		}
		let catbookList = getCatbookDataFor(normalName);
		if (!catbookList || catbookList.length === 0) return null;

		// Shuffle the images available via Catbook, assign the first image as the
		// highlight image, assign all remaining images to the images attribute.
		catbookList = shuffle(catbookList);
		const highlight = getImageDetails(normalName, catbookList[0]);
		let images: CatImageDetails[] = [];
		catbookList.forEach((catImageId, index) => {
			if (index !== 0) {
				const img = getImageDetails(normalName, catImageId);
				images.push(img);
			}
		});

		return {
			highlight,
			images: images.length > 0 ? images : null,
		};
	}

	function shuffle(arr: any[]) {
		// Move backward through the array and pick random numbers
		// below the currentIndex to swap with along the way.
		let currentIndex = arr.length;
		let randomIndex = 0;
		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// Swap them
			[arr[currentIndex], arr[randomIndex]] = [
				arr[randomIndex],
				arr[currentIndex],
			];
		}

		return arr;
	}

	return { getHighlightAndImages };
}
