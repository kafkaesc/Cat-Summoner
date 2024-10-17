import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import H1 from './H1';

it('Loads as a simple H1 wrapper', () => {
	render(<H1>hello world</H1>);
	const heading = screen.getByRole('heading', { level: 1 });
	expect(heading).toBeInTheDocument();
	expect(heading).toHaveTextContent(/hello world/i);
});

it('Loads the className prop onto the child h1 element', () => {
	render(<H1 className="red">hello world, but red</H1>);
	const heading = screen.getByRole('heading', { level: 1 });
	expect(heading).toBeInTheDocument();
	expect(heading).toHaveTextContent(/hello world, but red/i);
	expect(heading).toHaveClass('red');
});

it('Loads text-left without including the default text-center', () => {
	render(<H1 className="text-left">hello world</H1>);
	const heading = screen.getByRole('heading', { level: 1 });
	expect(heading).toBeInTheDocument();
	expect(heading).toHaveTextContent(/hello world/i);
	expect(heading).toHaveClass('text-left');
	expect(heading).not.toHaveClass('text-center');
});

it('Loads text-right without including the default text-center', () => {
	render(<H1 className="text-right">hello world</H1>);
	const heading = screen.getByRole('heading', { level: 1 });
	expect(heading).toBeInTheDocument();
	expect(heading).toHaveTextContent(/hello world/i);
	expect(heading).toHaveClass('text-right');
	expect(heading).not.toHaveClass('text-center');
});
