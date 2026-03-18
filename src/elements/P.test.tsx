import { render, screen } from '@testing-library/react';
import P from './P';

it('Loads as a simple P wrapper', () => {
	render(<P>The box in question was, as I say, oblong</P>);
	const paragraph = screen.getByText(/the box in question/i);
	expect(paragraph).toBeInTheDocument();
	expect(paragraph).toHaveTextContent(
		/the box in question was, as i say, oblong/i,
	);
});

it('Loads the className prop onto the child p element', () => {
	render(<P className="red">The box in question was, as I say, red</P>);
	const paragraph = screen.getByText(/the box in question/i);
	expect(paragraph).toBeInTheDocument();
	expect(paragraph).toHaveTextContent(
		/the box in question was, as i say, red/i,
	);
	expect(paragraph).toHaveClass('red');
});
