import { useRef, useState } from 'react';
import { CatImageDetails } from '@/interfaces/CatInterfaces';
import { useCatbook } from '@/hooks/useCatbook';

import fearless01 from 'public/assets/images/cats/fearless-01.jpg';
import harvey01 from 'public/assets/images/cats/harvey-01.jpg';
import harvey02 from 'public/assets/images/cats/harvey-02.jpg';
import harvey03 from 'public/assets/images/cats/harvey-03.jpg';
import harvey04 from 'public/assets/images/cats/harvey-04.jpg';
import lalo01 from 'public/assets/images/cats/lalo-01.jpg';
import lalo02 from 'public/assets/images/cats/lalo-02.jpg';
import lalo03 from 'public/assets/images/cats/lalo-03.jpg';
import lalo04 from 'public/assets/images/cats/lalo-04.jpg';
import lalo05 from 'public/assets/images/cats/lalo-05.jpg';

const catImageFolder = '/assets/images/cats/';
const catImageIdLength = 2;

const catImageData: Array<CatImageDetails> = [
	{
		alt: 'A black cat sits on a table with their two front legs covering a stack of cards. The logo is visible on the cards, revealing that the cat is interrupting a game of Exploding Kittens. The cat stares up into the camera with a deadpan expression, unconcerned with their interruption of the game.',
		catImageId: 1,
		name: 'fearless',
		src: fearless01,
	},
	{
		alt: 'An orange cat sits on a gray bed sheet. They are sitting back, with their front legs facing forward and their back legs facing toward the camera. Their tail is wrapped around their back legs. Their ears are perked up and their eyes are squeezed near-shut in a pleasant expression.',
		catImageId: 1,
		name: 'harvey',
		src: harvey01,
	},
	{
		alt: 'An orange cat sits on the hood of an electric-blue car. They lean slightly toward the camera with a curious look on their face.',
		catImageId: 2,
		name: 'harvey',
		src: harvey02,
	},
	{
		alt: 'TODO: Allan please add the alt text for this image.',
		catImageId: 3,
		name: 'harvey',
		src: harvey03,
	},
	{
		alt: 'A close-up head shot of an orange cat. Their face resembles a human face expressing irritation and annoyance.',
		catImageId: 4,
		name: 'harvey',
		src: harvey04,
	},
	{
		alt: 'A mostly white cat with black spots around their eyes and on their back faces the camera. The cat is walking forward with their front right paw tucked under their body. Their black tail is held up with a hook at the top. Their eyes look into the camera with curiosity.',
		catImageId: 1,
		name: 'lalo',
		src: lalo01,
	},
	{
		alt: 'A cat sits at the edge of a porch beneath a black night sky. Their fur is mostly white with some black spots down the back. The cat has their back to the camera, but their head is turned to face backward, making them seem peaceful and contemplative.',
		catImageId: 2,
		name: 'lalo',
		src: lalo02,
	},
	{
		alt: 'A mostly white cat with black spots around their eyes lies inside of a cylindrical wicker enclosed bed. Their head peeks out of the circular hole on its front. Inside the enclosure the cat can be seen holding onto a stuffed chile pepper toy.',
		catImageId: 3,
		name: 'lalo',
		src: lalo03,
	},
	{
		alt: 'A mostly white cat with black spots around their eyes and on their back sits on the edge of a blue porch that stretches off into the background. Their body is perpendicular to the camera with their tail wrapping forward, creating a classic cat silhouette.',
		catImageId: 4,
		name: 'lalo',
		src: lalo04,
	},
	{
		alt: 'A mostly white cat with black spots around their eyes and on their back stands atop a roof. They are perched above the camera and face downward with their mouth open mid-meow. Behind them arcs a rainbow.',
		catImageId: 5,
		name: 'lalo',
		src: lalo05,
	},
];

export function useCatImageDetails() {
	const __activeTimeout = useRef<NodeJS.Timeout | null>(null);
	const [__imageDetails, __setImageDetails] = useState<CatImageDetails | null>(
		null
	);
	const [__isLoading, __setIsLoading] = useState<boolean>(false);
	const { unlockCatbookImage } = useCatbook();

	function createImageDetails(
		name: string,
		catImageId: number
	): CatImageDetails {
		const idString: string = formatCatImageIdForFilename(catImageId);
		const alt: string = getAltText(name, catImageId);
		const src: string = `${catImageFolder}${name.toLocaleLowerCase()}-${idString}.jpg`;
		return {
			alt: alt,
			height: 500,
			catImageId: catImageId ? catImageId : -1,
			name: name,
			src: src,
			width: 500,
		};
	}

	function formatCatImageIdForFilename(catImageId: number): string {
		let catImageIdString = '' + catImageId;
		while (catImageIdString.length < catImageIdLength) {
			catImageIdString = '0' + catImageIdString;
		}
		return catImageIdString;
	}

	function getAllFor(name: string): Array<CatImageDetails> {
		if (
			name.toLocaleLowerCase() === 'fearless' ||
			name.toLocaleLowerCase() === 'harvey' ||
			name.toLocaleLowerCase() === 'lalo'
		) {
			return catImageData.filter(
				(cid) => cid.name.toLocaleLowerCase() === name.toLocaleLowerCase()
			);
		} else {
			console.warn(
				`Invalid name ${name} argument for getAllFor from useCatImageDetails`
			);
			return [];
		}
	}

	// Return alt text for the image associated with the name and image ID.
	function getAltText(name: string, catImageId: number): string {
		const altText = catImageData.filter(
			(cid) =>
				catImageId === cid.catImageId &&
				cid.name.toLocaleLowerCase() === name.toLocaleLowerCase()
		);
		if (altText.length > 0) {
			return altText[0].alt;
		} else {
			console.warn(`No altText for (name=${name}, catImageId=${catImageId})`);
			return '';
		}
	}

	function getImage(name: string, catImageId: number): CatImageDetails | null {
		const image = catImageData.filter(
			(cid) =>
				catImageId === cid.catImageId &&
				name.toLocaleLowerCase() === cid.name.toLocaleLowerCase()
		);
		if (image.length > 0) {
			return image[0];
		} else {
			console.warn(
				`No image data for (name=${name}, catImageId=${catImageId})`
			);
			return null;
		}
	}

	function randomizeId(name: string): number {
		if (name.toLocaleLowerCase() === 'fearless') {
			return 1;
		}
		if (name.toLocaleLowerCase() === 'harvey') {
			return Math.floor(Math.random() * (5 - 1) + 1);
		}
		if (name.toLocaleLowerCase() === 'lalo') {
			return Math.floor(Math.random() * (6 - 1) + 1);
		}
		return 1;
	}

	function setCat(name: string, catImageId?: number | null): void {
		// Use the specific catImageId if provided, otherwise generate one randomly
		const id: number = catImageId ? catImageId : randomizeId(name);
		const imageDetails: CatImageDetails = createImageDetails(name, id);
		startLoadingCatImage(name, id, imageDetails);
	}

	// Set that the image is loading and set a timeout to load the cat image
	// details. If a previous cat image is set to load, clear it
	function startLoadingCatImage(
		name: string,
		id: number,
		imageDetails: CatImageDetails
	): void {
		__setIsLoading(true);
		if (__activeTimeout.current) {
			clearTimeout(__activeTimeout.current);
		}
		__activeTimeout.current = setTimeout(() => {
			__setImageDetails(imageDetails);
			unlockCatbookImage(name, id);
			__setIsLoading(false);
		}, 3000);
	}

	return {
		getAllFor,
		getImage,
		imageDetails: __imageDetails,
		isLoading: __isLoading,
		setCat,
	};
}
