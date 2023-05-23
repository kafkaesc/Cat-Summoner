import { useState } from 'react';
import { CatImage } from '@/interfaces/CatImage';

// TODO: use idLength to pad the src with zeros
const catImageFolder = '/assets/images/cats/';
const idLength = 2;

const catImageData: Array<CatImage> = [
	{
		alt: 'A black cat sits on a table with their two front legs covering a stack of cards. The logo is visible on the cards, revealing that the cat is interrupting a game of Exploding Kittens. The cat stares up into the camera with a deadpan expression, unconcerned with their interruption of the game.',
		catImageId: 1,
		name: 'fearless',
		src: `${catImageFolder}fearless-01.jpg`,
	},
	{
		alt: 'An orange cat sits on a gray bed sheet. They are sitting back, with their front legs facing forward and their back legs facing toward the camera. Their tail is wrapped around their back legs. Their ears are perked up and their eyes are squeezed near-shut in a pleasant expression.',
		catImageId: 1,
		name: 'harvey',
		src: `${catImageFolder}harvey-01.jpg`,
	},
	{
		alt: 'An orange cat sits on the hood of an electric-blue car. They lean slightly toward the camera with a curious look on their face.',
		catImageId: 2,
		name: 'harvey',
		src: `${catImageFolder}harvey-02.jpg`,
	},
	{
		alt: 'TODO: Allan please add the alt text for this image.',
		catImageId: 3,
		name: 'harvey',
		src: `${catImageFolder}harvey-03.jpg`,
	},
	{
		alt: 'A close-up head shot of an orange cat. Their face resembles a human face expressing irritation and annoyance.',
		catImageId: 4,
		name: 'harvey',
		src: `${catImageFolder}harvey-04.jpg`,
	},
	{
		alt: 'A mostly white cat with black spots around their eyes and on their back faces the camera. The cat is walking forward with their front right paw tucked under their body. Their black tail is held up with a hook at the top. Their eyes look into the camera with curiosity.',
		catImageId: 1,
		name: 'lalo',
		src: `${catImageFolder}lalo-01.jpg`,
	},
	{
		alt: 'A cat sits at the edge of a porch beneath a black night sky. Their fur is mostly white with some black spots down the back. The cat has their back to the camera, but their head is turned to face backward, making them seem peaceful and contemplative.',
		catImageId: 2,
		name: 'lalo',
		src: `${catImageFolder}lalo-02.jpg`,
	},
	{
		alt: 'A mostly white cat with black spots around their eyes lies inside of a cylindrical wicker enclosed bed. Their head peeks out of the circular hole on its front. Inside the enclosure the cat can be seen holding onto a stuffed chile pepper toy.',
		catImageId: 3,
		name: 'lalo',
		src: `${catImageFolder}lalo-03.jpg`,
	},
	{
		alt: 'A mostly white cat with black spots around their eyes and on their back sits on the edge of a blue porch that stretches off into the background. Their body is perpendicular to the camera with their tail wrapping forward, creating a classic cat silhouette.',
		catImageId: 4,
		name: 'lalo',
		src: `${catImageFolder}lalo-04.jpg`,
	},
	{
		alt: 'A mostly white cat with black spots around their eyes and on their back stands atop a roof. They are perched above the camera and face downward with their mouth open mid-meow. Behind them arcs a rainbow.',
		catImageId: 5,
		name: 'lalo',
		src: `${catImageFolder}lalo-05.jpg`,
	},
];

export function useCatImageDetails() {
	const [__imageDetails, __setImageDetails] = useState<CatImage | null>(null);

	function getAllFor(name: string): Array<CatImage> {
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

	// Return alt tet for the image associated with the name and image ID.
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

	function getImage(name: string, catImageId: number): CatImage | null {
		const image = catImageData.filter(
			(cid) =>
				catImageId === cid.catImageId &&
				name.toLocaleLowerCase() === cid.name.toLocaleLowerCase()
		);
		if (image.length > 0) {
			return image[0];
		} else {
			console.warn(`No image data for (name=${name}, catImageId=${catImageId})`);
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
		const id: number = catImageId ? catImageId : randomizeId(name);
		const idString: string = '0' + id;
		const alt: string = getAltText(name, id);
		const src: string = `/assets/images/cats/${name.toLocaleLowerCase()}-${idString}.jpg`;
		const imageDetails: CatImage = {
			alt: alt,
			height: 500,
			catImageId: catImageId ? catImageId : -1,
			name: name,
			src: src,
			width: 500,
		};
		__setImageDetails(imageDetails);
	}

	return { getAllFor, getImage, imageDetails: __imageDetails, setCat };
}
