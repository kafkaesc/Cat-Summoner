import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import EmptyCatbook from './EmptyCatbook';

it('Renders the notification paragraph with a link home', () => {
	render(<EmptyCatbook />);
	const p = screen.getByText(/you haven\'t unlocked any cat pictures/i);
	expect(p).toBeInTheDocument();
	const link = screen.getByRole('link');
	expect(link).toBeInTheDocument();
	expect(link).toHaveAttribute('href', '/');
});
