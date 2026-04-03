import { render, screen } from '@testing-library/react';
import Home from '@/pages';

it('Has the expected page headings', () => {
	render(<Home />);
	const h1 = screen.getByRole('heading', { level: 1 });
	expect(h1).toBeInTheDocument();
	expect(h1).toHaveTextContent(/cat summoner/i);
});
