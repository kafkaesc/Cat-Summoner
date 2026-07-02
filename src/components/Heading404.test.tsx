import { render, screen } from '@testing-library/react';
import Heading404 from './Heading404';

it("Loads a heading 1 saying 'cat not found'", () => {
	render(<Heading404 />);
	const pageHeader = screen.getByRole('heading', { level: 1 });
	expect(pageHeader).toBeInTheDocument();
	expect(pageHeader).toHaveTextContent(/cat not found/i);
});

it('Displays 404', () => {
	render(<Heading404 />);
	const display404 = screen.getByText(/404/);
	expect(display404).toBeInTheDocument();
});
