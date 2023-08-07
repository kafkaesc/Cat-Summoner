import { Cat } from '@/interfaces/CatInterfaces';

const cats: Array<Cat> = [
	{
		about:
			'Fearless earned her name for jumping on the hood of a car and ' +
			'meowing through the windshield to make sure she was fed before the ' +
			'humans left in the morning. She is obsessed with potato chips and ' +
			'will run over if she hears a bag open. However, she is not a fan of ' +
			'tortilla chips and if she feels you have tricked her by opening a ' +
			'bag she will bully you.',
		id: 901,
		name: 'Fearless',
		subheadline: 'The Cat Without Fear',
	},
	{
		about:
			'Harvey has no respect for your personal boundaries and will jump on ' +
			'the table to steal any food he can get his paws on. His second ' +
			'favorite place to sleep is anywhere—his most favorite place is on top ' +
			'of your car.',
		id: 902,
		name: 'Harvey',
		subheadline: 'The Car Watcher',
	},
	{
		about:
			'Lalo was found underneath a taco truck before arriving at his new ' +
			"home. He's a very independent cat and loves to sit on the couch and " +
			'watch tv.',
		id: 903,
		name: 'Lalo',
		subheadline: 'The Cow Cat',
	},
	{
		about:
			'Zelda likes to buck her carnivorous nature and instead pursues a ' +
			"diet heavy in fruit—don't worry her owner makes sure she still has " +
			"a balanced diet with plenty of taurine. When she's not eating she " +
			'spends her time napping, especially if a pile of fresh laundry is ' +
			'available.',
		id: 904,
		name: 'Zelda',
		subheadline: 'AD: please add details',
	},
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
