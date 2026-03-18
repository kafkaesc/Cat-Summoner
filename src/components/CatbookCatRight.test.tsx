import { render, screen } from '@testing-library/react';
import CatbookCatRight from './CatbookCatRight';

it('Renders its children', () => {
	render(<CatbookCatRight>right side content</CatbookCatRight>);
	expect(screen.getByText(/right/i)).toBeInTheDocument();
});

it('Applies align-top class', () => {
	render(
		<CatbookCatRight>
			<span>inner span</span>
		</CatbookCatRight>,
	);
	const inner = screen.getByText(/inner/i);
	expect(inner.parentElement).toHaveClass('align-top');
});
