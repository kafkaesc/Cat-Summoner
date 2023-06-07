import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from './Button';

it('Creates a default button', () => {
	render(<Button>Benjamin</Button>);
	const benjaminButton = screen.getByRole('button');
	expect(benjaminButton).toBeInTheDocument();
	expect(benjaminButton).toHaveTextContent(/benjamin/i);
});

it('Creates a disabled default button', () => {
	render(<Button disabled>Benjamin</Button>);
	const benjaminButton = screen.getByRole('button');
	expect(benjaminButton).toBeInTheDocument();
	expect(benjaminButton).toHaveTextContent(/benjamin/i);
	expect(benjaminButton).toHaveAttribute('disabled', '');
});

it('Creates a default button with an aria-label', () => {
	const close = () => {};
	render(
		<Button aria-label="Close" onClick={close}>
			X
		</Button>
	);
	const closeButton = screen.getByRole('button');
	expect(closeButton).toBeInTheDocument();
	expect(closeButton).toHaveTextContent(/x/i);
	expect(closeButton).toHaveAttribute('aria-label', 'Close');
});

it('Creates a primary button', () => {
	render(<Button buttonStyle="primary">Benjamin</Button>);
	const benjaminButton = screen.getByRole('button');
	expect(benjaminButton).toBeInTheDocument();
	expect(benjaminButton).toHaveTextContent(/benjamin/i);
	expect(benjaminButton).toHaveClass('bg-cs-primary');
	expect(benjaminButton).toHaveClass('text-cs-white');
});

it('Creates a disabled primary button', () => {
	render(
		<Button buttonStyle="primary" disabled>
			Benjamin
		</Button>
	);
	const benjaminButton = screen.getByRole('button');
	expect(benjaminButton).toBeInTheDocument();
	expect(benjaminButton).toHaveTextContent(/benjamin/i);
	expect(benjaminButton).toHaveClass('bg-cs-primary');
	expect(benjaminButton).toHaveClass('text-cs-white');
	expect(benjaminButton).toHaveAttribute('disabled', '');
});

it('Creates a primary button with an aria-label', () => {
	const close = () => {};
	render(
		<Button aria-label="Close" buttonStyle="primary" onClick={close}>
			X
		</Button>
	);
	const closeButton = screen.getByRole('button');
	expect(closeButton).toBeInTheDocument();
	expect(closeButton).toHaveTextContent(/x/i);
	expect(closeButton).toHaveClass('bg-cs-primary');
	expect(closeButton).toHaveClass('text-cs-white');
	expect(closeButton).toHaveAttribute('aria-label', 'Close');
});

it('Creates a secondary button', () => {
	render(<Button buttonStyle="secondary">Benjamin</Button>);
	const benjaminButton = screen.getByRole('button');
	expect(benjaminButton).toBeInTheDocument();
	expect(benjaminButton).toHaveTextContent(/benjamin/i);
	expect(benjaminButton).toHaveClass('bg-cs-secondary');
	expect(benjaminButton).toHaveClass('text-cs-white');
});

it('Creates a disabled secondary button', () => {
	render(
		<Button buttonStyle="secondary" disabled>
			Benjamin
		</Button>
	);
	const benjaminButton = screen.getByRole('button');
	expect(benjaminButton).toBeInTheDocument();
	expect(benjaminButton).toHaveTextContent(/benjamin/i);
	expect(benjaminButton).toHaveClass('bg-cs-secondary');
	expect(benjaminButton).toHaveClass('text-cs-white');
	expect(benjaminButton).toHaveAttribute('disabled', '');
});

it('Creates a secondary button with an aria-label', () => {
	const close = () => {};
	render(
		<Button aria-label="Close" buttonStyle="secondary" onClick={close}>
			X
		</Button>
	);
	const closeButton = screen.getByRole('button');
	expect(closeButton).toBeInTheDocument();
	expect(closeButton).toHaveTextContent(/x/i);
	expect(closeButton).toHaveClass('bg-cs-secondary');
	expect(closeButton).toHaveClass('text-cs-white');
	expect(closeButton).toHaveAttribute('aria-label', 'Close');
});

it('Creates a warning button', () => {
	render(<Button buttonStyle="warning">Benjamin</Button>);
	const benjaminButton = screen.getByRole('button');
	expect(benjaminButton).toBeInTheDocument();
	expect(benjaminButton).toHaveTextContent(/benjamin/i);
	expect(benjaminButton).toHaveClass('bg-cs-warning');
	expect(benjaminButton).toHaveClass('text-cs-black');
});

it('Creates a disabled warning button', () => {
	render(
		<Button buttonStyle="warning" disabled>
			Benjamin
		</Button>
	);
	const benjaminButton = screen.getByRole('button');
	expect(benjaminButton).toBeInTheDocument();
	expect(benjaminButton).toHaveTextContent(/benjamin/i);
	expect(benjaminButton).toHaveClass('bg-cs-warning');
	expect(benjaminButton).toHaveClass('text-cs-black');
	expect(benjaminButton).toHaveAttribute('disabled', '');
});

it('Creates a warning button with an aria-label', () => {
	const close = () => {};
	render(
		<Button aria-label="Close" buttonStyle="warning" onClick={close}>
			X
		</Button>
	);
	const closeButton = screen.getByRole('button');
	expect(closeButton).toBeInTheDocument();
	expect(closeButton).toHaveTextContent(/x/i);
	expect(closeButton).toHaveClass('bg-cs-warning');
	expect(closeButton).toHaveClass('text-cs-black');
	expect(closeButton).toHaveAttribute('aria-label', 'Close');
});

it('Creates a danger button', () => {
	render(<Button buttonStyle="danger">Benjamin</Button>);
	const benjaminButton = screen.getByRole('button');
	expect(benjaminButton).toBeInTheDocument();
	expect(benjaminButton).toHaveTextContent(/benjamin/i);
	expect(benjaminButton).toHaveClass('bg-cs-danger');
	expect(benjaminButton).toHaveClass('text-cs-white');
});

it('Creates a disabled danger button', () => {
	render(
		<Button buttonStyle="danger" disabled>
			Benjamin
		</Button>
	);
	const benjaminButton = screen.getByRole('button');
	expect(benjaminButton).toBeInTheDocument();
	expect(benjaminButton).toHaveTextContent(/benjamin/i);
	expect(benjaminButton).toHaveClass('bg-cs-danger');
	expect(benjaminButton).toHaveClass('text-cs-white');
	expect(benjaminButton).toHaveAttribute('disabled', '');
});

it('Creates a danger button with an aria-label', () => {
	const close = () => {};
	render(
		<Button aria-label="Close" buttonStyle="danger" onClick={close}>
			X
		</Button>
	);
	const closeButton = screen.getByRole('button');
	expect(closeButton).toBeInTheDocument();
	expect(closeButton).toHaveTextContent(/x/i);
	expect(closeButton).toHaveClass('bg-cs-danger');
	expect(closeButton).toHaveClass('text-cs-white');
	expect(closeButton).toHaveAttribute('aria-label', 'Close');
});
