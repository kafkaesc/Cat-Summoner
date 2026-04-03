import { render, screen, fireEvent } from '@testing-library/react';
import CatbookFull from './CatbookFull';

const LS_PREFIX = '🐱::';

function lsSet(key: string, value: any) {
	localStorage.setItem(LS_PREFIX + key, JSON.stringify(value));
}

beforeEach(() => {
	localStorage.clear();
});

// Empty Catbook test

it('Renders an empty Catbook when no cat data are in localStorage', () => {
	render(<CatbookFull />);
	const emptyText = screen.getByText(/you haven't unlocked any cat pictures/i);
	expect(emptyText).toBeInTheDocument();
});

// Cat tests

it('Renders the Fearless heading when Fearless data are present', () => {
	lsSet('fearless', [1]);
	render(<CatbookFull />);
	const fearlessHeading = screen.getByRole('heading', { name: /fearless/i });
	expect(fearlessHeading).toBeInTheDocument();
});

it('Renders the Harvey heading when Harvey data are present', () => {
	lsSet('harvey', [1]);
	render(<CatbookFull />);
	const harveyHeading = screen.getByRole('heading', { name: /harvey/i });
	expect(harveyHeading).toBeInTheDocument();
});

it('Renders the Lalo heading when Lalo data are present', () => {
	lsSet('lalo', [1]);
	render(<CatbookFull />);
	const laloHeading = screen.getByRole('heading', { name: /lalo/i });
	expect(laloHeading).toBeInTheDocument();
});

it('Renders the Zelda heading when Zelda data are present', () => {
	lsSet('zelda', [1]);
	render(<CatbookFull />);
	const zeldaHeading = screen.getByRole('heading', { name: /zelda/i });
	expect(zeldaHeading).toBeInTheDocument();
});

// Reset Catbook tests

it('Renders the reset button when cat data are present', () => {
	lsSet('harvey', [1]);
	render(<CatbookFull />);
	const resetButton = screen.getByRole('button', { name: /reset/i });
	expect(resetButton).toBeInTheDocument();
});

it('Clears the catbook and shows the empty state when reset is clicked', () => {
	lsSet('lalo', [1]);
	render(<CatbookFull />);
	fireEvent.click(screen.getByRole('button', { name: /reset/i }));
	const emptyText = screen.getByText(/you haven't unlocked any cat pictures/i);
	expect(emptyText).toBeInTheDocument();
});
