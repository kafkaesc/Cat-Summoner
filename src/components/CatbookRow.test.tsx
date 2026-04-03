import { render, screen } from '@testing-library/react';
import CatbookRow from './CatbookRow';

it('Renders one image for a single cat image ID', () => {
	render(<CatbookRow catImageIds={[1]} name="Fearless" />);
	expect(screen.getAllByRole('img')).toHaveLength(1);
});

it('Renders multiple images for multiple cat image IDs', () => {
	render(<CatbookRow catImageIds={[1, 2, 3]} name="Harvey" />);
	expect(screen.getAllByRole('img')).toHaveLength(3);
});

it('Renders all images for five cat image IDs', () => {
	render(<CatbookRow catImageIds={[1, 2, 3, 4, 5]} name="Zelda" />);
	expect(screen.getAllByRole('img')).toHaveLength(5);
});

it('Renders no images for an empty ID array', () => {
	render(<CatbookRow catImageIds={[]} name="Lalo" />);
	expect(screen.queryAllByRole('img')).toHaveLength(0);
});

it('Renders the correct image for the given cat and ID', () => {
	render(<CatbookRow catImageIds={[2]} name="Lalo" />);
	expect(screen.getByRole('img', { name: /porch/i })).toBeInTheDocument();
});

it('Renders the image regardless of casing for the cat name', () => {
	render(<CatbookRow catImageIds={[1]} name="fEARless" />);
	expect(screen.getAllByRole('img')).toHaveLength(1);
});
