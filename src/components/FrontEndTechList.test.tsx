import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FrontEndTechList from './FrontEndTechList';

it('Has the tech links', () => {
	render(<FrontEndTechList />);
	const nextLink = screen.getByRole('link', { name: /next.js/i });
	const reactLink = screen.getByRole('link', { name: /react/i });
	const typeScriptLink = screen.getByRole('link', { name: /typescript/i });
	const tailwindLink = screen.getByRole('link', { name: /tailwind/i });
	const jestLink = screen.getByRole('link', { name: /jest/i });
	const awsLink = screen.getByRole('link', { name: /aws/i });
	expect(nextLink).toBeInTheDocument();
	expect(reactLink).toBeInTheDocument();
	expect(typeScriptLink).toBeInTheDocument();
	expect(tailwindLink).toBeInTheDocument();
	expect(jestLink).toBeInTheDocument();
	expect(awsLink).toBeInTheDocument();
});

it('Opens links in a new tab', () => {
	render(<FrontEndTechList />);
	const nextLink = screen.getByRole('link', { name: /next.js/i });
	const reactLink = screen.getByRole('link', { name: /react/i });
	const typeScriptLink = screen.getByRole('link', { name: /typescript/i });
	const tailwindLink = screen.getByRole('link', { name: /tailwind/i });
	const jestLink = screen.getByRole('link', { name: /jest/i });
	const awsLink = screen.getByRole('link', { name: /aws/i });
	expect(nextLink).toBeInTheDocument();
	expect(nextLink).toHaveAttribute('target', '_blank');
	expect(reactLink).toBeInTheDocument();
	expect(reactLink).toHaveAttribute('target', '_blank');
	expect(typeScriptLink).toBeInTheDocument();
	expect(typeScriptLink).toHaveAttribute('target', '_blank');
	expect(tailwindLink).toBeInTheDocument();
	expect(tailwindLink).toHaveAttribute('target', '_blank');
	expect(jestLink).toBeInTheDocument();
	expect(jestLink).toHaveAttribute('target', '_blank');
	expect(awsLink).toBeInTheDocument();
	expect(awsLink).toHaveAttribute('target', '_blank');
});

it('Opens the correct URLs', () => {
	render(<FrontEndTechList />);
	const nextLink = screen.getByRole('link', { name: /next.js/i });
	const reactLink = screen.getByRole('link', { name: /react/i });
	const typeScriptLink = screen.getByRole('link', { name: /typescript/i });
	const tailwindLink = screen.getByRole('link', { name: /tailwind/i });
	const jestLink = screen.getByRole('link', { name: /jest/i });
	const awsLink = screen.getByRole('link', { name: /aws/i });
	expect(nextLink).toBeInTheDocument();
	expect(nextLink).toHaveAttribute('href', 'https://nextjs.org/');
	expect(reactLink).toBeInTheDocument();
	expect(reactLink).toHaveAttribute('href', 'https://react.dev/');
	expect(typeScriptLink).toBeInTheDocument();
	expect(typeScriptLink).toHaveAttribute('href', 'https://typescriptlang.org/');
	expect(tailwindLink).toBeInTheDocument();
	expect(tailwindLink).toHaveAttribute('href', 'https://tailwindcss.com/');
	expect(jestLink).toBeInTheDocument();
	expect(jestLink).toHaveAttribute('href', 'https://jestjs.io/');
	expect(awsLink).toBeInTheDocument();
	expect(awsLink).toHaveAttribute(
		'href',
		'https://aws.amazon.com/what-is-aws/'
	);
});
