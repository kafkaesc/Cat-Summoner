import { render, screen } from '@testing-library/react';
import Layout from './Layout';

it('Renders its children', () => {
	render(<Layout>The box in question was, as I say, oblong</Layout>);
	const content = screen.getByText(/the box in question/i);
	expect(content).toBeInTheDocument();
	expect(content).toHaveTextContent(
		/the box in question was, as i say, oblong/i,
	);
});

it('Renders the navbar links', () => {
	render(<Layout>content</Layout>);
	expect(screen.getByText(/catbook/i)).toBeInTheDocument();
	expect(screen.getByText(/about/i)).toBeInTheDocument();
	expect(screen.getByText(/faqs/i)).toBeInTheDocument();
});

it('Renders a main element wrapping the children', () => {
	render(
		<Layout>
			<span>inner span</span>
		</Layout>,
	);
	const inner = screen.getByText(/inner/i);
	expect(inner.closest('main')).toBeInTheDocument();
});
