import { render, screen } from '@testing-library/react';
import Polaroid from './Polaroid';

it('Renders an image with the correct alt text', () => {
	render(<Polaroid alt="Lalo looking smug" src="/cat.jpg" />);
	expect(screen.getByRole('img', { name: /lalo/i })).toBeInTheDocument();
});

it('Applies a className to the image', () => {
	render(
		<Polaroid alt="Lalo looking smug" src="/cat.jpg" className="rounded" />,
	);
	expect(screen.getByRole('img', { name: /lalo/i })).toHaveClass('rounded');
});
