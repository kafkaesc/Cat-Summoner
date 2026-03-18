import { render, screen, fireEvent } from '@testing-library/react';
import CatbookPhotoModal from './CatbookPhotoModal';

it('Renders its children', () => {
	render(
		<CatbookPhotoModal alt="a cat" src="/cat.jpg">
			<span>trigger</span>
		</CatbookPhotoModal>,
	);
	expect(screen.getByText(/trigger/i)).toBeInTheDocument();
});

it('Does not show the modal by default', () => {
	render(
		<CatbookPhotoModal alt="a cat" src="/cat.jpg">
			<span>trigger</span>
		</CatbookPhotoModal>,
	);
	expect(
		screen.queryByRole('button', { name: /close/i }),
	).not.toBeInTheDocument();
});

it('Opens the modal when the child is clicked', () => {
	render(
		<CatbookPhotoModal alt="a cat" src="/cat.jpg">
			<span>trigger</span>
		</CatbookPhotoModal>,
	);
	fireEvent.click(screen.getByText(/trigger/i));
	expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
	expect(screen.getByRole('img', { name: /a cat/i })).toBeInTheDocument();
});

it('Closes the modal when the close button is clicked', () => {
	render(
		<CatbookPhotoModal alt="a cat" src="/cat.jpg">
			<span>trigger</span>
		</CatbookPhotoModal>,
	);
	fireEvent.click(screen.getByText(/trigger/i));
	fireEvent.click(screen.getByRole('button', { name: /close/i }));
	expect(
		screen.queryByRole('button', { name: /close/i }),
	).not.toBeInTheDocument();
});
