import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Faqs from './FAQs';

it('Has the expected page heading', () => {
	render(<Faqs />);
	const heading = screen.getByRole('heading', { level: 1 });
	expect(heading).toBeInTheDocument();
	expect(heading).toHaveTextContent(/faqs/i);
});

it('Has question 1', () => {
	render(<Faqs />);
	const q1 = screen.getByText(/what is this site/i);
	expect(q1).toBeInTheDocument();
	expect(q1.tagName).toEqual('H2');
});

it('Has question 2', () => {
	render(<Faqs />);
	const q2 = screen.getByText(/is cat summoner tracking my data/i);
	expect(q2).toBeInTheDocument();
	expect(q2.tagName).toEqual('H2');
});
