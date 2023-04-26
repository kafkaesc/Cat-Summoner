import { useState } from 'react';

interface CatImageProps {
	alt: string;
	height?: number;
	name: string;
	src: string;
	width?: number;
}
// TODO: use idLength to pad the src with zeros
const idLength = 2;

export function useCatImageDetails() {
	const [__imageDetails, __setImageDetails] = useState<CatImageProps | null>(
		null
	);

	// Return alt tet for the image associated with the name and image ID.
	function getAltText(name: string, imageId: number) {
		if (name.toLowerCase() === 'fearless' && imageId === 1) {
			return 'A black cat sits on a table with their two front legs covering a stack of cards. The logo is visible on the cards, revealing that the cat is interrupting a game of Exploding Kittens. The cat stares up into the camera with a deadpan expression, unconcerned with their interruption of the game.';
		}
		if (name.toLowerCase() === 'harvey' && imageId === 1) {
			return 'An orange cat sits on a gray bed sheet. They are sitting back, with their front legs facing forward and their back legs facing toward the camera. Their tail is wrapped around their back legs. Their ears are perked up and their eyes are squeezed near-shut in a pleasant expression.';
		}
		if (name.toLowerCase() === 'harvey' && imageId === 2) {
			return 'An orange cat sits on the hood of an electric-blue car. They lean slightly toward the camera with a curious look on their face.';
		}
		if (name.toLowerCase() === 'harvey' && imageId === 3) {
			return 'TODO: Allan please add the alt text for this image.';
		}
		if (name.toLowerCase() === 'harvey' && imageId === 4) {
			return 'A close-up head shot of an orange cat. Their face resembles a human face expressing irritation and annoyance.';
		}
		if (name.toLowerCase() === 'lalo' && imageId === 1) {
			return 'A mostly white cat with black spots around their eyes and on their back faces the camera. The cat is walking forward with their front right paw tucked under their body. Their black tail is held up with a hook at the top. Their eyes look into the camera with curiosity.';
		}
		if (name.toLowerCase() === 'lalo' && imageId === 2) {
			return 'A cat sits at the edge of a porch beneath a black night sky. Their fur is mostly white with some black spots down the back. The cat has their back to the camera, but their head is turned to face backward, making them seem peaceful and contemplative.';
		}
		if (name.toLowerCase() === 'lalo' && imageId === 3) {
			return 'A cat lies inside of a cylindrical wicker enclosed bed. Their head peeks out of the circular hole on its front. Inside the enclosure the cat can be seen holding onto a stuffed chile pepper toy.';
		}
		if (name.toLowerCase() === 'lalo' && imageId === 4) {
			return 'TODO: Allan please add the alt text for this image.';
		}
		if (name.toLowerCase() === 'lalo' && imageId === 5) {
			return 'TODO: Allan please add the alt text for this image.';
		}
		return 'getAltText err';
	}

	function randomizeId(name: string) {
		if (name.toLowerCase() === 'fearless') {
			return 1;
		}
		if (name.toLowerCase() === 'harvey') {
			return Math.floor(Math.random() * (5 - 1) + 1);
		}
		if (name.toLowerCase() === 'lalo') {
			return Math.floor(Math.random() * (6 - 1) + 1);
		}
		return 1;
	}

	function setCat(name: string, imageId?: number | null) {
		const id: number = imageId ? imageId : randomizeId(name);
		const idString: string = '0' + id;
		const alt: string = getAltText(name, id);
		const src: string = `/assets/images/cats/${name.toLowerCase()}-${idString}.jpg`;
		const imageDetails: CatImageProps = {
			alt: alt,
			height: 500,
			name: name,
			src: src,
			width: 500,
		};
		__setImageDetails(imageDetails);
	}

	function setImageId(imageId: number) {
		if (!__imageDetails) return;
		__setImageDetails((prev) => {
			return prev
				? { ...prev, src: `/assets/images/cats/${prev.name}-0${imageId}.jpg` }
				: prev;
		});
	}

	return { imageDetails: __imageDetails, setCat, setImageId };
}
