import { render, screen, waitFor } from '@testing-library/react';
import CatbookCat from './CatbookCat';

beforeEach(() => {
	localStorage.clear();
});

it('Renders the error page for an invalid cat name', () => {
	render(<CatbookCat catName="NotACat" />);
	expect(screen.getByText(/oops/i)).toBeInTheDocument();
});

it('Renders the cat name as a heading', async () => {
	localStorage.setItem('🐱::lalo', JSON.stringify([1]));
	render(<CatbookCat catName="Lalo" />);
	await waitFor(() => {
		expect(screen.getByRole('heading', { name: /lalo/i })).toBeInTheDocument();
	});
});

it('Renders the cat subheadline', async () => {
	localStorage.setItem('🐱::lalo', JSON.stringify([1]));
	render(<CatbookCat catName="Lalo" />);
	await waitFor(() => {
		expect(screen.getByText(/the cow cat/i)).toBeInTheDocument();
	});
});

it('Is case insensitive for the cat name', async () => {
	localStorage.setItem('🐱::fearless', JSON.stringify([1]));
	render(<CatbookCat catName="fEARless" />);
	await waitFor(() => {
		expect(
			screen.getByRole('heading', { name: /fearless/i }),
		).toBeInTheDocument();
	});
});
