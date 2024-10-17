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

it('Successfully creates a link to the homepage with an added class', () => {
	render(
		<Link className="foo-class" href="/">
			Home
		</Link>
	);
	const link = screen.getByRole('link');
	expect(link).toBeInTheDocument();
	expect(link).toHaveTextContent(/home/i);
	expect(link).toHaveAttribute('href', '/');
	expect(link).toHaveClass('foo-class');
});

it('Successfully creates a dark background link to the homepage', () => {
	render(
		<Link href="/" linkStyle="dark-background">
			Home
		</Link>
	);
	const link = screen.getByRole('link');
	expect(link).toBeInTheDocument();
	expect(link).toHaveTextContent(/home/i);
	expect(link).toHaveAttribute('href', '/');
	expect(link).toHaveClass('text-link-dark-bg');
});

it('Successfully creates a dark background link to the homepage with an added class', () => {
	render(
		<Link className="foo-class" href="/" linkStyle="dark-background">
			Home
		</Link>
	);
	const link = screen.getByRole('link');
	expect(link).toBeInTheDocument();
	expect(link).toHaveTextContent(/home/i);
	expect(link).toHaveAttribute('href', '/');
	expect(link).toHaveClass('foo-class');
	expect(link).toHaveClass('text-link-dark-bg');
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

it('Successfully creates a dark background link to the about page with target _blank', () => {
	render(
		<Link
			href="/About"
			linkStyle="dark-background"
			rel="noreferrer"
			target="_blank"
		>
			About
		</Link>
	);
	const link = screen.getByRole('link');
	expect(link).toBeInTheDocument();
	expect(link).toHaveTextContent(/about/i);
	expect(link).toHaveAttribute('href', '/About');
	expect(link).toHaveAttribute('target', '_blank');
	expect(link).toHaveClass('text-link-dark-bg');
});

it('Successfully creates a dark background link to the about page with target _blank and an added class', () => {
	render(
		<Link
			className="foo-class"
			href="/About"
			linkStyle="dark-background"
			rel="noreferrer"
			target="_blank"
		>
			About
		</Link>
	);
	const link = screen.getByRole('link');
	expect(link).toBeInTheDocument();
	expect(link).toHaveTextContent(/about/i);
	expect(link).toHaveAttribute('href', '/About');
	expect(link).toHaveAttribute('target', '_blank');
	expect(link).toHaveClass('foo-class');
	expect(link).toHaveClass('text-link-dark-bg');
});
