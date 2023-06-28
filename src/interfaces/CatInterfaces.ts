import { StaticImageData } from 'next/image';

export interface Cat {
	age?: number;
	id: number;
	name?: string;
	nickname?: string;
}

export interface CatImageDetails {
	alt: string;
	catId: number;
	catImageId: number;
	height?: number;
	name: string;
	src: StaticImageData;
	width?: number;
}
