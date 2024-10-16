import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import EmLogo from './EmLogo';

it('Has an image', () => {
	render(<EmLogo />);
	const logoImg = screen.getByRole('img');
	expect(logoImg).toBeInTheDocument();
});

it('Has alt text attribute', () => {
	render(<EmLogo />);
	const logoImg = screen.getByRole('img');
	expect(logoImg).toHaveAttribute('alt');
});

it('Has src attribute', () => {
	render(<EmLogo />);
	const logoImg = screen.getByRole('img');
	expect(logoImg).toHaveAttribute('src');
});

it('Has expected alt text', () => {
	render(<EmLogo />);
	const logoFromAltText = screen.getByAltText(/cat summoner logo/i);
	expect(logoFromAltText).toBeInTheDocument();
});
