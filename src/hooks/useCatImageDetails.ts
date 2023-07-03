import { CatImageDetails } from '@/interfaces/CatInterfaces';

const catImageData: Array<CatImageDetails> = [
	{
		alt: 'A black cat sits on a table with their two front legs covering a stack of cards. The logo is visible on the cards, revealing that the cat is interrupting a game of Exploding Kittens. The cat stares up into the camera with a deadpan expression, unconcerned with their interruption of the game.',
		catId: 901,
		catImageId: 1,
		name: 'fearless',
		src: require('public/assets/images/cats/fearless-01.jpg'),
	},
	{
		alt: 'An orange cat sits on a gray bed sheet. They are sitting back, with their front legs facing forward and their back legs facing toward the camera. Their tail is wrapped around their back legs. Their ears are perked up and their eyes are squeezed near-shut in a pleasant expression.',
		catId: 902,
		catImageId: 1,
		name: 'harvey',
		src: require('public/assets/images/cats/harvey-01.jpg'),
	},
	{
		alt: 'An orange cat sits on the hood of an electric-blue car. They lean slightly toward the camera with a curious look on their face.',
		catId: 902,
		catImageId: 2,
		name: 'harvey',
		src: require('public/assets/images/cats/harvey-02.jpg'),
	},
	{
		alt: 'TODO: Allan please add the alt text for this image.',
		catId: 902,
		catImageId: 3,
		name: 'harvey',
		src: require('public/assets/images/cats/harvey-03.jpg'),
	},
	{
		alt: 'A close-up head shot of an orange cat. Their face resembles a human face expressing irritation and annoyance.',
		catId: 902,
		catImageId: 4,
		name: 'harvey',
		src: require('public/assets/images/cats/harvey-04.jpg'),
	},
	{
		alt: 'A mostly white cat with black spots around their eyes and on their back faces the camera. The cat is walking forward with their front right paw tucked under their body. Their black tail is held up with a hook at the top. Their eyes look into the camera with curiosity.',
		catId: 903,
		catImageId: 1,
		name: 'lalo',
		src: require('public/assets/images/cats/lalo-01.jpg'),
	},
	{
		alt: 'A cat sits at the edge of a porch beneath a black night sky. Their fur is mostly white with some black spots down the back. The cat has their back to the camera, but their head is turned to face backward, making them seem peaceful and contemplative.',
		catId: 903,
		catImageId: 2,
		name: 'lalo',
		src: require('public/assets/images/cats/lalo-02.jpg'),
	},
	{
		alt: 'A mostly white cat with black spots around their eyes lies inside of a cylindrical wicker enclosed bed. Their head peeks out of the circular hole on its front. Inside the enclosure the cat can be seen holding onto a stuffed chile pepper toy.',
		catId: 903,
		catImageId: 3,
		name: 'lalo',
		src: require('public/assets/images/cats/lalo-03.jpg'),
	},
	{
		alt: 'A mostly white cat with black spots around their eyes and on their back sits on the edge of a blue porch that stretches off into the background. Their body is perpendicular to the camera with their tail wrapping forward, creating a classic cat silhouette.',
		catId: 903,
		catImageId: 4,
		name: 'lalo',
		src: require('public/assets/images/cats/lalo-04.jpg'),
	},
	{
		alt: 'A mostly white cat with black spots around their eyes and on their back stands atop a roof. They are perched above the camera and face downward with their mouth open mid-meow. Behind them arcs a rainbow.',
		catId: 903,
		catImageId: 5,
		name: 'lalo',
		src: require('public/assets/images/cats/lalo-05.jpg'),
	},
	{
		alt: 'A tortoiseshell cat sits on a small rug of alternating gray and turquoise lines and next to a door with a full length window looking outside. The cat is looking back toward the camera expectantly.',
		catId: 904,
		catImageId: 1,
		name: 'zelda',
		src: require('public/assets/images/cats/zelda-01.jpg'),
	},
	{
		alt: 'A tortoiseshell cat is laying on their back on a wood floor. The soft, fluffy hair on their belly is visible as they look upward.',
		catId: 904,
		catImageId: 2,
		name: 'zelda',
		src: require('public/assets/images/cats/zelda-02.jpg'),
	},
	{
		alt: "A close-up side profile of a tortoiseshell cat. The cat is backlit by a tv running in a blurry background, which contrasts strongly with the cat's sharply defined face.",
		catId: 904,
		catImageId: 3,
		name: 'zelda',
		src: require('public/assets/images/cats/zelda-03.jpg'),
	},
	{
		alt: 'A tortoiseshell cat lies near the edge of a leather couch. Their paws point outward from the front of their body as they stare at something outside of frame.',
		catId: 904,
		catImageId: 4,
		name: 'zelda',
		src: require('public/assets/images/cats/zelda-04.jpg'),
	},
	{
		alt: 'A tortoiseshell cat is peeking out of a paper shopping bag that is laying on the floor.',
		catId: 904,
		catImageId: 5,
		name: 'zelda',
		src: require('public/assets/images/cats/zelda-05.jpg'),
	},
	{
		alt: 'TODO: Allan please add the alt text for this image.',
		catId: 905,
		catImageId: 1,
		name: 'special',
		src: require('public/assets/images/cats/special-01.jpg'),
	},
];

export function useCatImageDetails() {
	function getImageDetails(
		name: string,
		catImageId: number
	): CatImageDetails | null {
		const images = catImageData.filter(
			(cid) =>
				catImageId === cid.catImageId &&
				name.toLocaleLowerCase() === cid.name.toLocaleLowerCase()
		);
		if (images.length > 0) {
			return images[0];
		} else {
			console.warn(`No image data for args: ${name}, ${catImageId})`);
			return null;
		}
	}

	function getImageDetailsFor(name: string): Array<CatImageDetails> {
		if (
			name.toLocaleLowerCase() === 'fearless' ||
			name.toLocaleLowerCase() === 'harvey' ||
			name.toLocaleLowerCase() === 'lalo' ||
			name.toLocaleLowerCase() === 'zelda'
		) {
			return catImageData.filter(
				(cid) => name.toLocaleLowerCase() === cid.name.toLocaleLowerCase()
			);
		} else {
			return [];
		}
	}

	function getSpecialImage(arg: string): CatImageDetails | null {
		if (arg === '404') {
			return catImageData.filter(
				(cid) => cid.catImageId === 1 && cid.name === 'special'
			)[0];
		}
		return null;
	}

	return { getImageDetails, getImageDetailsFor, getSpecialImage };
}
