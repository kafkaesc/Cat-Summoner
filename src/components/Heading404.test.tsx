import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Heading404 from './Heading404';

it('Loads a heading 1 announcing 404', () => {
	render(<Heading404 />);
	const pageHeader = screen.getByRole('heading', { level: 1 });
	expect(pageHeader).toBeInTheDocument();
	expect(pageHeader).toHaveTextContent(/404/i);
});

it("Loads a heading 2 saying 'cat not found'", () => {
	render(<Heading404 />);
	const pageHeader = screen.getByRole('heading', { level: 2 });
	expect(pageHeader).toBeInTheDocument();
	expect(pageHeader).toHaveTextContent(/cat not found/i);
});
