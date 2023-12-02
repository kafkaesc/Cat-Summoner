import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import EmptyCatbookRow from './CatbookRowEmpty';

it('Renders a link to the home page', () => {
	render(<EmptyCatbookRow name="Lalo" />);
	const link = screen.getByRole('link');
	expect(link).toBeInTheDocument();
	expect(link).toHaveAttribute('href', '/');
});

it('Renders the notice for Harvey', () => {
	render(<EmptyCatbookRow name="Harvey" />);
	const p = screen.getByText(/you have not unlocked any harvey pictures/i);
	expect(p).toBeInTheDocument();
});

it('Renders the notice for Lalo', () => {
	render(<EmptyCatbookRow name="Lalo" />);
	const p = screen.getByText(/you have not unlocked any lalo pictures/i);
	expect(p).toBeInTheDocument();
});
