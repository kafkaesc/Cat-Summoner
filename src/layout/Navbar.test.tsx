import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

it('Has a link home', () => {
	render(<Navbar />);
	const homeNav = screen.getByAltText(/cat summoner logo/i);
	expect(homeNav).toBeInTheDocument();
});

it('Has a Catbook link', () => {
	render(<Navbar />);
	const catbookNav = screen.getByRole('link', { name: /catbook/i });
	expect(catbookNav).toBeInTheDocument();
});

it('Has an about link', () => {
	render(<Navbar />);
	const aboutNav = screen.getByRole('link', { name: /about/i });
	expect(aboutNav).toBeInTheDocument();
});

it('Has an FAQ link', () => {
	render(<Navbar />);
	const faqsNav = screen.getByRole('link', { name: /faqs/i });
	expect(faqsNav).toBeInTheDocument();
});
