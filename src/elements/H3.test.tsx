import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import H3 from './H3';

it('Loads as a simple H1 wrapper', () => {
	render(<H3>hello world</H3>);
	const heading = screen.getByRole('heading', { level: 3 });
	expect(heading).toBeInTheDocument();
	expect(heading).toHaveTextContent(/hello world/i);
});

it('Loads the className prop onto the child h2 element', () => {
	render(<H3 className="red">hello world, but red</H3>);
	const heading = screen.getByRole('heading', { level: 3 });
	expect(heading).toBeInTheDocument();
	expect(heading).toHaveTextContent(/hello world, but red/i);
	expect(heading).toHaveClass('red');
});
