import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CatbookCatError from './CatbookCatError';

it('Renders the the catbook error notification', () => {
	render(<CatbookCatError />);
	const p = screen.getByText(/this is not a valid catbook page/i);
	expect(p).toBeInTheDocument();
});

it('Renders a link home', () => {
	render(<CatbookCatError />);
	const link = screen.getByRole('link', { name: /cat summoner main page/i });
	expect(link).toBeInTheDocument();
	expect(link).toHaveAttribute('href', '/');
});

it('Renders a link to the Catbook page', () => {
	render(<CatbookCatError />);
	const link = screen.getByRole('link', { name: /catbook page/i });
	expect(link).toBeInTheDocument();
	expect(link).toHaveAttribute('href', '/Catbook');
});
