import { render, screen } from '@testing-library/react';
import Catbook from '@/pages/Catbook';

it('Has the expected page headings', () => {
	render(<Catbook />);
	const h1 = screen.getByRole('heading', { level: 1 });
	expect(h1).toBeInTheDocument();
	expect(h1).toHaveTextContent(/catbook/i);
});
