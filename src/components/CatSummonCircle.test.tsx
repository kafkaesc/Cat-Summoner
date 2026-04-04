import { render, screen, fireEvent } from '@testing-library/react';
import CatSummonCircle from './CatSummonCircle';

const mockSummonCat = jest.fn();
const mockUseCatSummon = jest.fn();

jest.mock('../hooks/useCatSummon', () => ({
	useCatSummon: (...args: any[]) => mockUseCatSummon(...args),
}));

beforeEach(() => {
	mockSummonCat.mockReset();
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
	render(<CatSummonCircle />);
	const swayImg = screen.getByAltText(/slowly swaying/i);
	expect(swayImg).toBeInTheDocument();
	expect(swayImg).toHaveAttribute('src', '/assets/images/grass-animated.svg');
});

it('Disables all buttons when loading', () => {
	mockUseCatSummon.mockReturnValue({
		isLoading: true,
		summonedCat: null,
		summonCat: mockSummonCat,
	});
	render(<CatSummonCircle />);

	const fearlessBtn = screen.getByRole('button', { name: 'Fearless' });
	expect(fearlessBtn).toBeDisabled();
	const harveyBtn = screen.getByRole('button', { name: 'Harvey' });
	expect(harveyBtn).toBeDisabled();
	const laloBtn = screen.getByRole('button', { name: 'Lalo' });
	expect(laloBtn).toBeDisabled();
	const zeldaBtn = screen.getByRole('button', { name: 'Zelda' });
	expect(zeldaBtn).toBeDisabled();
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
