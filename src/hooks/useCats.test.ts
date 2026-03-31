import { useCats } from '@/hooks/useCats';

it('Retrieves a cat by name', () => {
	const { getCatByName } = useCats();
	const cat = getCatByName('Lalo');

	expect(cat).not.toBeNull();
	expect(cat?.id).toBe(903);
	expect(cat?.name).toBe('Lalo');
	expect(cat?.subheadline).toMatch(/the cow cat/i);
});

it('Retrieves a cat by name regardless of casing', () => {
	const { getCatByName } = useCats();
	const cat = getCatByName('hArVEY');

	expect(cat).not.toBeNull();
	expect(cat?.id).toBe(902);
	expect(cat?.name).toBe('Harvey');
	expect(cat?.subheadline).toMatch(/the car watcher/i);
});

it('Receives null when no cat matches the name', () => {
	const { getCatByName } = useCats();
	const cat = getCatByName('Clifford');

	expect(cat).toBeNull();
});

it('Retrieves the names of all summonable cats', () => {
	const { getCatNames } = useCats();
	const catNames = getCatNames();

	expect(catNames).toEqual(['Fearless', 'Harvey', 'Lalo', 'Zelda']);
});

it('Retrieves the full list of cats', () => {
	const { getCats } = useCats();
	const cats = getCats();

	expect(cats).toHaveLength(4);
	expect(cats[0]?.about).not.toBeNull();
	expect(cats[0]?.name).toMatch(/fearless/i);
	expect(cats[0]?.subheadline).toMatch(/the cat without fear/i);
	expect(cats[1]?.about).not.toBeNull();
	expect(cats[1]?.name).toMatch(/harvey/i);
	expect(cats[1]?.subheadline).toMatch(/the car watcher/i);
	expect(cats[2]?.about).not.toBeNull();
	expect(cats[2]?.name).toMatch(/lalo/i);
	expect(cats[2]?.subheadline).toMatch(/the cow cat/i);
	expect(cats[3]?.about).not.toBeNull();
	expect(cats[3]?.name).toMatch(/zelda/i);
	expect(cats[3]?.subheadline).toMatch(/the fruit lover/i);
});
