import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

it('Has the expected page heading', () => {
	render(<About />);
	const heading = screen.getByRole('heading', { level: 1 });
	expect(heading).toBeInTheDocument();
	expect(heading).toHaveTextContent(/about/i);
});

it('Has the built by notice', () => {
	render(<About />);
	const bb = screen.getByText(/built by jared hettinger/i);
	expect(bb).toBeInTheDocument();
});

it('Has a React link', () => {
	render(<About />);
	const rl = screen.getByRole('link', { name: 'React' });
	expect(rl).toBeInTheDocument();
	expect(rl).toHaveAttribute('href', 'https://react.dev/');
	expect(rl).toHaveAttribute('target', '_blank');
});

it('Has a Next.js link', () => {
	render(<About />);
	const nl = screen.getByRole('link', { name: 'Next.js' });
	expect(nl).toBeInTheDocument();
	expect(nl).toHaveAttribute('href', 'https://nextjs.org/');
	expect(nl).toHaveAttribute('target', '_blank');
});

it('Has a TypeScript link', () => {
	render(<About />);
	const tsl = screen.getByRole('link', { name: 'TypeScript' });
	expect(tsl).toBeInTheDocument();
	expect(tsl).toHaveAttribute('href', 'https://www.typescriptlang.org/');
	expect(tsl).toHaveAttribute('target', '_blank');
});

it('Has a Tailwind link', () => {
	render(<About />);
	const tl = screen.getByRole('link', { name: 'Tailwind' });
	expect(tl).toBeInTheDocument();
	expect(tl).toHaveAttribute('href', 'https://tailwindcss.com/');
	expect(tl).toHaveAttribute('target', '_blank');
});

it('Has a React Testing Library link', () => {
	render(<About />);
	const rtll = screen.getByRole('link', { name: 'React Testing Library' });
	expect(rtll).toBeInTheDocument();
	expect(rtll).toHaveAttribute('href', 'https://testing-library.com/');
	expect(rtll).toHaveAttribute('target', '_blank');
});

it('Has a Jest link', () => {
	render(<About />);
	const jl = screen.getByRole('link', { name: 'Jest' });
	expect(jl).toBeInTheDocument();
	expect(jl).toHaveAttribute('href', 'https://jestjs.io/');
	expect(jl).toHaveAttribute('target', '_blank');
});

it('Has an AWS link', () => {
	render(<About />);
	const awsl = screen.getByRole('link', { name: 'Amazon Web Services (AWS)' });
	expect(awsl).toBeInTheDocument();
	expect(awsl).toHaveAttribute('href', 'https://aws.amazon.com/what-is-aws/');
	expect(awsl).toHaveAttribute('target', '_blank');
});

it('Has the GitHub link', () => {
	render(<About />);
	const ghl = screen.getByRole('link', { name: 'full code for this project' });
	expect(ghl).toBeInTheDocument();
	expect(ghl).toHaveAttribute(
		'href',
		'https://github.com/kafkaesc/Cat-Summoner'
	);
	expect(ghl).toHaveAttribute('target', '_blank');
});
