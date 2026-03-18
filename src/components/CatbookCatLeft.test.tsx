import { render, screen } from '@testing-library/react';
import CatbookCatLeft from './CatbookCatLeft';

it('Renders its children', () => {
	render(<CatbookCatLeft>left side content</CatbookCatLeft>);
	expect(screen.getByText(/left/i)).toBeInTheDocument();
});

it('Applies text-center and align-top classes', () => {
	render(
		<CatbookCatLeft>
			<span>inner span</span>
		</CatbookCatLeft>,
	);
	const inner = screen.getByText(/inner/i);
	expect(inner.parentElement).toHaveClass('text-center');
	expect(inner.parentElement).toHaveClass('align-top');
});
