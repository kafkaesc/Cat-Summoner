import { render, screen } from '@testing-library/react';
import CatPicRow from './CatPicRow';
import { CatImageDetails } from '@/interfaces/CatInterfaces';

const mockImages: CatImageDetails[] = [
	{
		alt: 'Lalo on a porch',
		catId: 903,
		catImageId: 1,
		name: 'lalo',
		src: '/lalo-01.jpg',
	},
	{
		alt: 'Lalo in a basket',
		catId: 903,
		catImageId: 2,
		name: 'lalo',
		src: '/lalo-02.jpg',
	},
];

it('Renders an image for each item in the images array', () => {
	render(<CatPicRow catName="lalo" images={mockImages} />);
	expect(screen.getAllByRole('img').length).toBe(mockImages.length);
});

it('Renders a heading when the title is provided', () => {
	render(<CatPicRow catName="lalo" images={mockImages} title="Cat Pictures" />);
	expect(
		screen.getByRole('heading', { name: /cat pictures/i }),
	).toBeInTheDocument();
});

it('Does not render a heading when the title is not provided', () => {
	render(<CatPicRow catName="lalo" images={mockImages} />);
	expect(screen.queryByRole('heading')).not.toBeInTheDocument();
});
