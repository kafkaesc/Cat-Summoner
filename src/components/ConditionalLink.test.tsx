import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ConditionalLink from './ConditionalLink';

it('Displays a link when boolean expression is true', () => {
	render(
		<ConditionalLink condition={2 + 2 == 4} link="https://cat-summoner.com">
			hello world
		</ConditionalLink>
	);
	const p = screen.getByText(/hello world/i);
	expect(p).toBeInTheDocument();
	const link = screen.getByRole('link');
	expect(link).toBeInTheDocument();
});

it('Displays normal text when boolean expression is false', () => {
	render(
		<ConditionalLink condition={2 + 2 == 5} link="https://cat-summoner.com">
			hello world
		</ConditionalLink>
	);
	const p = screen.getByText(/hello world/i);
	expect(p).toBeInTheDocument();
	const link = screen.queryByRole('link');
	expect(link).not.toBeInTheDocument();
});
