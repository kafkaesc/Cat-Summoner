import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Link from './Link';

it('Successfully creates a link to the homepage', () => {
	render(<Link href="/">Home</Link>);
	const link = screen.getByRole('link');
	expect(link).toBeInTheDocument();
	expect(link).toHaveTextContent(/home/i);
	expect(link).toHaveAttribute('href', '/');
});

it('Successfully creates a link to the about page with target _blank', () => {
	render(
		<Link rel="noreferrer" target="_blank" href="/About">
			About
		</Link>
	);
	const link = screen.getByRole('link');
	expect(link).toBeInTheDocument();
	expect(link).toHaveTextContent(/about/i);
	expect(link).toHaveAttribute('href', '/About');
	expect(link).toHaveAttribute('target', '_blank');
});
