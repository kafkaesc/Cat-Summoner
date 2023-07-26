import { StaticImageData } from 'next/image';
import fearless01 from 'public/assets/images/cats/fearless-01.jpg';
import harvey01 from 'public/assets/images/cats/harvey-01.jpg';
import harvey02 from 'public/assets/images/cats/harvey-02.jpg';
import harvey03 from 'public/assets/images/cats/harvey-03.jpg';
import harvey04 from 'public/assets/images/cats/harvey-04.jpg';
import harvey05 from 'public/assets/images/cats/harvey-05.jpg';
import lalo01 from 'public/assets/images/cats/lalo-01.jpg';
import lalo02 from 'public/assets/images/cats/lalo-02.jpg';
import lalo03 from 'public/assets/images/cats/lalo-03.jpg';
import lalo04 from 'public/assets/images/cats/lalo-04.jpg';
import lalo05 from 'public/assets/images/cats/lalo-05.jpg';
import zelda01 from 'public/assets/images/cats/zelda-01.jpg';
import zelda02 from 'public/assets/images/cats/zelda-02.jpg';
import zelda03 from 'public/assets/images/cats/zelda-03.jpg';
import zelda04 from 'public/assets/images/cats/zelda-04.jpg';
import zelda05 from 'public/assets/images/cats/zelda-05.jpg';

export function useCatImageFile() {
	function getImage(name: string, catImageId: number): StaticImageData | null {
		name = name.toLocaleLowerCase();
		if (name === 'fearless' && catImageId === 1) return fearless01;
		else if (name === 'harvey' && catImageId === 1) return harvey01;
		else if (name === 'harvey' && catImageId === 2) return harvey02;
		else if (name === 'harvey' && catImageId === 3) return harvey03;
		else if (name === 'harvey' && catImageId === 4) return harvey04;
		else if (name === 'harvey' && catImageId === 5) return harvey05;
		else if (name === 'lalo' && catImageId === 1) return lalo01;
		else if (name === 'lalo' && catImageId === 2) return lalo02;
		else if (name === 'lalo' && catImageId === 3) return lalo03;
		else if (name === 'lalo' && catImageId === 4) return lalo04;
		else if (name === 'lalo' && catImageId === 5) return lalo05;
		else if (name === 'zelda' && catImageId === 1) return zelda01;
		else if (name === 'zelda' && catImageId === 2) return zelda02;
		else if (name === 'zelda' && catImageId === 3) return zelda03;
		else if (name === 'zelda' && catImageId === 4) return zelda04;
		else if (name === 'zelda' && catImageId === 5) return zelda05;
		else {
			console.warn(`No matching image for args: ${name}, ${catImageId}`);
			return null;
		}
	}

	function getImagesFor(name: string) {
		name = name.toLocaleLowerCase();
		if (name === 'fearless') return { 1: fearless01 };
		else if (name === 'harvey')
			return {
				1: harvey01,
				2: harvey02,
				3: harvey03,
				4: harvey04,
				5: harvey05,
			};
		else if (name === 'lalo')
			return { 1: lalo01, 2: lalo02, 3: lalo03, 4: lalo04, 5: lalo05 };
		else if (name === 'zelda')
			return { 1: zelda01, 2: zelda02, 3: zelda03, 4: zelda04, 5: zelda05 };
		else {
			console.warn(`No matching images for arg: ${name}`);
			return {};
		}
	}

	return { getImage, getImagesFor };
}
