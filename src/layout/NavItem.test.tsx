import { render, screen } from '@testing-library/react';
import NavItem from './NavItem';

const mockUseRouter = jest.fn();

jest.mock('next/router', () => ({
	useRouter: (...args: any[]) => mockUseRouter(...args),
}));

beforeEach(() => {
	mockUseRouter.mockReturnValue({ pathname: '/' });
});

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

it('Marks the link for the current page with aria-current', () => {
	mockUseRouter.mockReturnValue({ pathname: '/about' });
	render(<NavItem href="/about">About</NavItem>);
	const link = screen.getByRole('link', { name: /about/i });
	expect(link).toHaveAttribute('aria-current', 'page');
});

it('Does not set aria-current on a link for another page', () => {
	mockUseRouter.mockReturnValue({ pathname: '/' });
	render(<NavItem href="/about">About</NavItem>);
	const link = screen.getByRole('link', { name: /about/i });
	expect(link).not.toHaveAttribute('aria-current');
});
