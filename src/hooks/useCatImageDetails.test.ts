import { useCatImageDetails } from '@/hooks/useCatImageDetails';

it('Retrieves the correct image details for a cat and image ID', () => {
	const { getImageDetails } = useCatImageDetails();
	const imgDetails = getImageDetails('Lalo', 1);

	expect(imgDetails).not.toBeNull();
	expect(imgDetails.alt).not.toBeNull();
	expect(imgDetails.src).toMatch(/lalo-01/);
});

it('Retrieves the correct image details regardless of name casing', () => {
	const { getImageDetails } = useCatImageDetails();
	const imgDetails = getImageDetails('hArVEY', 2);

	expect(imgDetails).not.toBeNull();
	expect(imgDetails.alt).not.toBeNull();
	expect(imgDetails.src).toMatch(/harvey-02/);
});

it('Throws an error if no image details match the name and ID', () => {
	const { getImageDetails } = useCatImageDetails();
	expect(() => getImageDetails('Clifford', 1)).toThrow();
});

it('Retrieves all image details for a cat', () => {
	const { getImageDetailsFor } = useCatImageDetails();
	const imgList = getImageDetailsFor('Lalo');

	expect(imgList).toHaveLength(5);
	expect(imgList[0].alt).not.toBeNull();
	expect(imgList[0].src).toMatch(/lalo-01/);
	expect(imgList[1].alt).not.toBeNull();
	expect(imgList[1].src).toMatch(/lalo-02/);
	expect(imgList[2].alt).not.toBeNull();
	expect(imgList[2].src).toMatch(/lalo-03/);
	expect(imgList[3].alt).not.toBeNull();
	expect(imgList[3].src).toMatch(/lalo-04/);
	expect(imgList[4].alt).not.toBeNull();
	expect(imgList[4].src).toMatch(/lalo-05/);
});

it('Retrieves all image details for a cat regardless of name casing', () => {
	const { getImageDetailsFor } = useCatImageDetails();
	const imgList = getImageDetailsFor('hArVEY');

	expect(imgList).toHaveLength(5);
	expect(imgList[0].alt).not.toBeNull();
	expect(imgList[0].src).toMatch(/harvey-01/);
	expect(imgList[1].alt).not.toBeNull();
	expect(imgList[1].src).toMatch(/harvey-02/);
	expect(imgList[2].alt).not.toBeNull();
	expect(imgList[2].src).toMatch(/harvey-03/);
	expect(imgList[3].alt).not.toBeNull();
	expect(imgList[3].src).toMatch(/harvey-04/);
	expect(imgList[4].alt).not.toBeNull();
	expect(imgList[4].src).toMatch(/harvey-05/);
});

it('Retrieves an empty array when no images match the cat name', () => {
	const { getImageDetailsFor } = useCatImageDetails();
	const imgList = getImageDetailsFor('Clifford');

	expect(imgList).toEqual([]);
});

it('Retrieves the special image for the 404 page', () => {
	const { getSpecialImage } = useCatImageDetails();
	const imgDetails = getSpecialImage('404');

	expect(imgDetails).not.toBeNull();
	expect(imgDetails?.alt).not.toBeNull();
	expect(imgDetails?.src).toMatch(/special-01/);
});

it('Receives null when no special image matches the argument', () => {
	const { getSpecialImage } = useCatImageDetails();
	const imgDetails = getSpecialImage('flibbertigibbet');

	expect(imgDetails).toBeNull();
});
