import { renderHook, act } from '@testing-library/react';
import { useCatbook } from '@/hooks/useCatbook';

// The localStorage prefix used internally by useLocalStorage
const LS_PREFIX = '🐱::';

function lsSet(key: string, value: any) {
	localStorage.setItem(LS_PREFIX + key, JSON.stringify(value));
}

function lsGet(key: string) {
	const raw = localStorage.getItem(LS_PREFIX + key);
	return raw ? JSON.parse(raw) : null;
}

beforeEach(() => {
	localStorage.clear();
});

// isEmpty Tests

it('Has isEmpty return true when the catbook has no data', () => {
	const { result } = renderHook(() => useCatbook());
	const isEmpty = result.current.isEmpty();
	expect(isEmpty).toBe(true);
});

it('Has isEmpty return false when the catbook has data', () => {
	lsSet('lalo', [1, 2]);
	const { result } = renderHook(() => useCatbook());
	const isEmpty = result.current.isEmpty();
	expect(isEmpty).toBe(false);
});

// unlockCatbookImage Tests

it('Uses unlockCatbookImage to add the image ID to localStorage', () => {
	const { result } = renderHook(() => useCatbook());
	act(() => result.current.unlockCatbookImage('harvey', 1));
	const harveyData = lsGet('harvey');
	expect(harveyData).toEqual([1]);
});

it('Uses unlockCatbookImage without adding a duplicate image ID', () => {
	const { result } = renderHook(() => useCatbook());
	act(() => result.current.unlockCatbookImage('fearless', 1));
	act(() => result.current.unlockCatbookImage('fearless', 1));
	const fearlessData = lsGet('fearless');
	expect(fearlessData).toEqual([1]);
});

it('Uses unlockCatbookImage to add multiple distinct image IDs', () => {
	const { result } = renderHook(() => useCatbook());
	act(() => result.current.unlockCatbookImage('zelda', 1));
	act(() => result.current.unlockCatbookImage('zelda', 3));
	act(() => result.current.unlockCatbookImage('zelda', 5));
	const zeldaData = lsGet('zelda');
	expect(zeldaData).toEqual([1, 3, 5]);
});

it('Uses unlockCatbookImage that is case-insensitive for cat names', () => {
	const { result } = renderHook(() => useCatbook());
	act(() => result.current.unlockCatbookImage('hArVEY', 2));
	const harveyData = lsGet('harvey');
	expect(harveyData).toEqual([2]);
});

// getCatbookDataFor Tests

it('Uses getCatbookDataFor to return the image IDs loaded from localStorage on mount', () => {
	lsSet('lalo', [1, 4, 5]);
	const { result } = renderHook(() => useCatbook());
	const laloData = result.current.getCatbookDataFor('lalo');
	expect(laloData).toEqual([1, 4, 5]);
});

it('Uses getCatbookDataFor is case-insensitive for cat names', () => {
	lsSet('lalo', [2]);
	const { result } = renderHook(() => useCatbook());
	const laloData = result.current.getCatbookDataFor('LaLo');
	expect(laloData).toEqual([2]);
});

it('Uses getCatbookDataFor and returns undefined for an unknown cat name', () => {
	const { result } = renderHook(() => useCatbook());
	const cliffordData = result.current.getCatbookDataFor('Clifford');
	expect(cliffordData).toBeUndefined();
});

// clearCatbook Tests

it('Uses clearCatbook to remove all cat entries from localStorage', () => {
	lsSet('fearless', [1]);
	lsSet('harvey', [1, 2]);
	lsSet('lalo', [3, 5]);
	lsSet('zelda', [1, 2, 3, 4]);

	const { result } = renderHook(() => useCatbook());
	act(() => result.current.clearCatbook());

	const fearlessData = lsGet('fearless');
	expect(fearlessData).toBeNull();
	const harveyData = lsGet('harvey');
	expect(harveyData).toBeNull();
	const laloData = lsGet('lalo');
	expect(laloData).toBeNull();
	const zeldaData = lsGet('zelda');
	expect(zeldaData).toBeNull();
});

it('Uses clearCatbook to make isEmpty return true', () => {
	lsSet('harvey', [1, 2, 3, 4, 5]);
	lsSet('lalo', [1, 2, 3, 4, 5]);
	const { result } = renderHook(() => useCatbook());

	expect(result.current.isEmpty()).toBe(false);
	act(() => result.current.clearCatbook());
	expect(result.current.isEmpty()).toBe(true);
});
