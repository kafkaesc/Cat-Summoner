import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Custom404 from '../pages/404';

it('Has the expected page headings', () => {
	render(<Custom404 />);
	const h1 = screen.getByRole('heading', { level: 1 });
	expect(h1).toBeInTheDocument();
	expect(h1).toHaveTextContent(/404/i);
	const h2 = screen.getByRole('heading', { level: 2 });
	expect(h2).toBeInTheDocument();
	expect(h2).toHaveTextContent(/cat not found/i);
});

it('Has Shimi', () => {
	render(<Custom404 />);
	const img = screen.getByRole('img');
	expect(img).toBeInTheDocument();
	expect(img).toHaveAttribute('alt');
	expect(img).toHaveAttribute('src');
});

it('Has a link to the homepage', () => {
	render(<Custom404 />);
	const home = screen.getByRole('link');
	expect(home).toBeInTheDocument();
	expect(home).toHaveAttribute('href', '/');
	expect(home).toHaveTextContent(/return home/i);
});
