export interface Cat {
	about?: string;
	age?: number;
	id: number;
	name: string;
	nickname?: string;
	subheadline?: string;
}

export interface CatImageDetails {
	alt: string;
	catId: number;
	catImageId: number;
	height?: number;
	name: string;
	src: string;
	width?: number;
}
