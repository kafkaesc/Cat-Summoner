import { render, screen } from '@testing-library/react';
import A from './A';

it('Loads as a simple A wrapper', () => {
	render(
		<A href="https://www.github.com/kafkaesc" target="_blank">
			GitHub link
		</A>,
	);
	const link = screen.getByRole('link');
	expect(link).toBeInTheDocument();
	expect(link).toHaveAttribute('href', 'https://www.github.com/kafkaesc');
	expect(link).toHaveAttribute('target', '_blank');
});

it('Announces links that open a new tab', () => {
	render(
		<A href="https://www.github.com/kafkaesc" target="_blank">
			GitHub link
		</A>,
	);
	const link = screen.getByRole('link', {
		name: /github link \(opens a new tab\)/i,
	});
	expect(link).toBeInTheDocument();
});

it('Does not announce a new tab for links without a target', () => {
	render(<A href="https://www.github.com/kafkaesc">GitHub link</A>);
	const link = screen.getByRole('link', { name: 'GitHub link' });
	expect(link).toBeInTheDocument();
});

it('Loads the className prop onto the child a element', () => {
	render(
		<A className="red" href="https://www.github.com/kafkaesc" target="_blank">
			GitHub link, but red
		</A>,
	);
	const link = screen.getByRole('link');
	expect(link).toBeInTheDocument();
	expect(link).toHaveTextContent(/github link, but red/i);
	expect(link).toHaveClass('red');
});
