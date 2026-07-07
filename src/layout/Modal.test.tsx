import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

it('Renders its title as a heading', () => {
	render(
		<Modal onClose={jest.fn()} title="Cat Photo">
			<span>modal content</span>
		</Modal>,
	);
	const heading = screen.getByRole('heading', { name: /cat photo/i });
	expect(heading).toBeInTheDocument();
});

it('Renders its children', () => {
	render(
		<Modal onClose={jest.fn()} title="Cat Photo">
			<span>modal content</span>
		</Modal>,
	);
	const content = screen.getByText(/modal content/i);
	expect(content).toBeInTheDocument();
});

it('Labels the dialog with the title', () => {
	render(
		<Modal onClose={jest.fn()} title="Cat Photo">
			<span>modal content</span>
		</Modal>,
	);
	const dialog = screen.getByRole('dialog', { name: /cat photo/i });
	expect(dialog).toBeInTheDocument();
});

it('Opens as a modal dialog on mount', () => {
	render(
		<Modal onClose={jest.fn()} title="Cat Photo">
			<span>modal content</span>
		</Modal>,
	);
	const dialog = screen.getByRole('dialog');
	expect(dialog).toHaveAttribute('open');
});

it('Calls onClose when the close button is clicked', () => {
	const onClose = jest.fn();
	render(
		<Modal onClose={onClose} title="Cat Photo">
			<span>modal content</span>
		</Modal>,
	);
	const closeButton = screen.getByRole('button', { name: /close/i });
	fireEvent.click(closeButton);
	expect(onClose).toHaveBeenCalledTimes(1);
});

it('Calls onClose when the dialog is cancelled with Escape', () => {
	const onClose = jest.fn();
	render(
		<Modal onClose={onClose} title="Cat Photo">
			<span>modal content</span>
		</Modal>,
	);
	const dialog = screen.getByRole('dialog');
	fireEvent(dialog, new Event('cancel', { cancelable: true }));
	expect(onClose).toHaveBeenCalledTimes(1);
});

it('Calls onClose when the backdrop is clicked', () => {
	const onClose = jest.fn();
	render(
		<Modal onClose={onClose} title="Cat Photo">
			<span>modal content</span>
		</Modal>,
	);
	const dialog = screen.getByRole('dialog');
	fireEvent.mouseDown(dialog);
	expect(onClose).toHaveBeenCalledTimes(1);
});

it('Does not call onClose when the panel content is clicked', () => {
	const onClose = jest.fn();
	render(
		<Modal onClose={onClose} title="Cat Photo">
			<span>modal content</span>
		</Modal>,
	);
	const content = screen.getByText(/modal content/i);
	fireEvent.mouseDown(content);
	expect(onClose).not.toHaveBeenCalled();
});
