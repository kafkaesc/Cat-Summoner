import Image from 'next/image';

import FearlessPic01 from '@/assets/images/cats/fearless-01.jpg';
import HarveyPic01 from '@/assets/images/cats/harvey-01.jpg';
import LaloPic01 from '@/assets/images/cats/lalo-01.jpg';
import LaloPic02 from '@/assets/images/cats/lalo-02.jpg';
import LaloPic03 from '@/assets/images/cats/lalo-03.jpg';
import LaloPic04 from '@/assets/images/cats/lalo-04.jpg';
import LaloPic05 from '@/assets/images/cats/lalo-05.jpg';

interface CatImageProps {
	name?: string;
	imageId?: number;
}

interface ImageProps {
	alt: string;
	src: string;
}

/* Arguments: Both name and imageId are nullable
 *
 * If both are null: return a random picture of any cat
 *
 * If name is a valid string: return a random image of the named cat
 *
 * If name is a valid string and nameId is a valid number:
 * return that specific cat picture */
export default function CatImage({ name, imageId }: CatImageProps) {
	let image: ImageProps | null = null;
	if (name && imageId) {
		image = {
			alt: 'Alt text needs to be loaded',
			src: `/assets/images/cats/${name}-0${imageId}.jpg`,
		};
	} else if (name) {
		image = {
			alt: 'Alt text needs to be loaded',
			src: name + '-01.g',
		};
	}
	return image ? (
		<Image alt={image.alt} height={500} src={image.src} width={500} />
	) : null;
}
