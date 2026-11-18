import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CatSummonCircle from './CatSummonCircle';

const mockSummonCat = jest.fn();
const mockUnlockSummonedCat = jest.fn();
const mockUseCatSummon = jest.fn();

jest.mock('../hooks/useCatSummon', () => ({
	useCatSummon: (...args: any[]) => mockUseCatSummon(...args),
}));

beforeEach(() => {
	mockSummonCat.mockReset();
	mockUnlockSummonedCat.mockReset();
	mockUseCatSummon.mockReturnValue({
		isLoading: false,
		summonedCat: null,
		summonCat: mockSummonCat,
	});
});

it('Renders a button for each cat', () => {
	render(<CatSummonCircle />);
	const fearlessBtn = screen.getByRole('button', { name: 'Fearless' });
	expect(fearlessBtn).toBeInTheDocument();
	const harveyBtn = screen.getByRole('button', { name: 'Harvey' });
	expect(harveyBtn).toBeInTheDocument();
	const laloBtn = screen.getByRole('button', { name: 'Lalo' });
	expect(laloBtn).toBeInTheDocument();
	const zeldaBtn = screen.getByRole('button', { name: 'Zelda' });
	expect(zeldaBtn).toBeInTheDocument();
});

it('Renders the still grass image when not loading and no cat is summoned', () => {
	render(<CatSummonCircle />);
	const grassImg = screen.getByAltText(/waiting for a cat to be summoned/i);
	expect(grassImg).toBeInTheDocument();
	expect(grassImg).toHaveAttribute('src', '/assets/images/grass-still.svg');
});

it('Calls summonCat with the cat name when a button is clicked', () => {
	render(<CatSummonCircle />);
	const laloBtn = screen.getByRole('button', { name: 'Lalo' });
	fireEvent.click(laloBtn);
	expect(mockSummonCat).toHaveBeenCalledWith('Lalo');
});

it('Shows the animated grass image when loading', () => {
	mockUseCatSummon.mockReturnValue({
		isLoading: true,
		summonedCat: null,
		summonCat: mockSummonCat,
	});
	const { container } = render(<CatSummonCircle />);
	const swayImg = container.querySelector(
		'img[src="/assets/images/grass-animated.svg"]',
	);
	expect(swayImg).toBeInTheDocument();
});

it('Announces a loading status in the status region while summoning', () => {
	mockUseCatSummon.mockReturnValue({
		isLoading: true,
		summonedCat: null,
		summonCat: mockSummonCat,
	});
	render(<CatSummonCircle />);
	const status = screen.getByRole('status');
	expect(status).toHaveTextContent(/summoning a cat/i);
});

it('Calls summonCat when a button is clicked while a summon is loading', () => {
	mockUseCatSummon.mockReturnValue({
		isLoading: true,
		summonedCat: null,
		summonCat: mockSummonCat,
	});
	render(<CatSummonCircle />);

	const zeldaBtn = screen.getByRole('button', { name: 'Zelda' });
	fireEvent.click(zeldaBtn);
	expect(mockSummonCat).toHaveBeenCalledWith('Zelda');
});

it('Shows a cat image when a cat has been summoned', () => {
	mockUseCatSummon.mockReturnValue({
		isLoading: false,
		summonedCat: { alt: 'Lalo on a porch', src: '/lalo-01.jpg' },
		summonCat: mockSummonCat,
	});
	render(<CatSummonCircle />);
	const laloImg = screen.getByAltText('Lalo on a porch');
	expect(laloImg).toBeInTheDocument();
});

it('Renders the summon circle result as a status region', () => {
	render(<CatSummonCircle />);
	const status = screen.getByRole('status');
	expect(status).toBeInTheDocument();
});

it('Announces a failed summon in the status region', () => {
	mockUseCatSummon.mockReturnValue({
		error: 'No image data for args: lalo, 9',
		isLoading: false,
		summonedCat: null,
		summonCat: mockSummonCat,
	});
	render(<CatSummonCircle />);
	const laloBtn = screen.getByRole('button', { name: 'Lalo' });
	fireEvent.click(laloBtn);
	const status = screen.getByRole('status');
	expect(status).toHaveTextContent(
		"Lalo didn't answer your summon. Try calling them again.",
	);
});

it('Announces a failed summon when the cat image fails to load', () => {
	mockUseCatSummon.mockReturnValue({
		isLoading: false,
		summonedCat: { alt: 'Lalo on a porch', src: '/lalo-01.jpg' },
		summonCat: mockSummonCat,
	});
	render(<CatSummonCircle />);
	const laloBtn = screen.getByRole('button', { name: 'Lalo' });
	fireEvent.click(laloBtn);
	const laloImg = screen.getByAltText('Lalo on a porch');
	fireEvent.error(laloImg);
	const status = screen.getByRole('status');
	expect(status).toHaveTextContent(/lalo didn't answer your summon/i);
});

it('Hides the previous cat while a summon has failed', () => {
	mockUseCatSummon.mockReturnValue({
		error: 'No image data for args: lalo, 9',
		isLoading: false,
		summonedCat: { alt: 'Zelda in a bag', src: '/zelda-05.jpg' },
		summonCat: mockSummonCat,
	});
	render(<CatSummonCircle />);
	const zeldaImg = screen.getByAltText('Zelda in a bag');
	expect(zeldaImg).toHaveClass('hidden');
});

it('Clears the failure message when the next summon begins', () => {
	mockUseCatSummon.mockReturnValue({
		isLoading: false,
		summonedCat: { alt: 'Lalo on a porch', src: '/lalo-01.jpg' },
		summonCat: mockSummonCat,
	});
	render(<CatSummonCircle />);
	const laloImg = screen.getByAltText('Lalo on a porch');
	fireEvent.error(laloImg);
	const zeldaBtn = screen.getByRole('button', { name: 'Zelda' });
	fireEvent.click(zeldaBtn);
	const status = screen.getByRole('status');
	expect(status).not.toHaveTextContent(/didn't answer your summon/i);
});

it('Unlocks the summoned cat once their image loads', async () => {
	mockUseCatSummon.mockReturnValue({
		isLoading: false,
		summonedCat: { alt: 'Lalo on a porch', src: '/lalo-01.jpg' },
		summonCat: mockSummonCat,
		unlockSummonedCat: mockUnlockSummonedCat,
	});
	render(<CatSummonCircle />);
	const laloImg = screen.getByAltText('Lalo on a porch');
	fireEvent.load(laloImg);
	// Next's Image calls onLoad after the image decodes, a tick after the event
	await waitFor(() => expect(mockUnlockSummonedCat).toHaveBeenCalled());
});

it('Does not unlock the summoned cat when their image fails to load', () => {
	mockUseCatSummon.mockReturnValue({
		isLoading: false,
		summonedCat: { alt: 'Lalo on a porch', src: '/lalo-01.jpg' },
		summonCat: mockSummonCat,
		unlockSummonedCat: mockUnlockSummonedCat,
	});
	render(<CatSummonCircle />);
	const laloImg = screen.getByAltText('Lalo on a porch');
	fireEvent.error(laloImg);
	expect(mockUnlockSummonedCat).not.toHaveBeenCalled();
});
