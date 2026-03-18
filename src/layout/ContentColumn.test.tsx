import { render, screen } from '@testing-library/react';
import ContentColumn from './ContentColumn';

it('Renders its children', () => {
	render(
		<ContentColumn>The box in question was, as I say, oblong</ContentColumn>,
	);
	const content = screen.getByText(/the box in question/i);
	expect(content).toBeInTheDocument();
	expect(content).toHaveTextContent(
		/the box in question was, as i say, oblong/i,
	);
});

it('Applies centering and max-width classes', () => {
	render(
		<ContentColumn>
			<span>inner span</span>
		</ContentColumn>,
	);
	const inner = screen.getByText(/inner/i);
	expect(inner.parentElement).toHaveClass('max-w-4xl');
	expect(inner.parentElement).toHaveClass('mx-auto');
});
