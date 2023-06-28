export function useCats() {
	function getCatNames(): Array<string> {
		return ['Fearless', 'Harvey', 'Lalo', 'Zelda'];
	}

	function getCats() {
		return [
			{ id: 901, name: 'Fearless' },
			{ id: 902, name: 'Harvey' },
			{ id: 903, name: 'Lalo' },
			{ id: 904, name: 'Zelda' },
		];
	}

	return { getCatNames, getCats };
}
