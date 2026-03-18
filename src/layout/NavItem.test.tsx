import { render, screen } from '@testing-library/react';
import NavItem from './NavItem';

it('Renders its children', () => {
	render(<NavItem href="/about">About</NavItem>);
	expect(screen.getByText(/about/i)).toBeInTheDocument();
});

it('Renders as a list item', () => {
	render(<NavItem href="/about">About</NavItem>);
	expect(screen.getByRole('listitem')).toBeInTheDocument();
});

it('Renders a link with the correct href', () => {
	render(<NavItem href="/about">About</NavItem>);
	const link = screen.getByRole('link', { name: /about/i });
	expect(link).toBeInTheDocument();
	expect(link).toHaveAttribute('href', '/about');
});
