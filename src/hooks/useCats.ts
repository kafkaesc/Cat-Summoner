import { Cat } from '@/interfaces/CatInterfaces';

const cats: Array<Cat> = [
	{ id: 901, name: 'Fearless', subheadline: 'The cat without fear' },
	{ id: 902, name: 'Harvey' },
	{ id: 903, name: 'Lalo', subheadline: 'The cow cat' },
	{ id: 904, name: 'Zelda' },
];

export function useCats() {
	function getCatByName(catName: string): Cat | null {
		const cat = cats.find(
			(cat) => cat.name.toLowerCase() === catName.toLowerCase()
		);
		if (!cat) return null;
		return cat;
	}

	function getCatNames(): Array<string> {
		return ['Fearless', 'Harvey', 'Lalo', 'Zelda'];
	}

	function getCats(): Array<Cat> {
		return cats;
	}

	return { getCatByName, getCatNames, getCats };
}
