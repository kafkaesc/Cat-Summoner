import { renderHook } from '@testing-library/react';
import { useCatbookHighlightAndImages } from '@/hooks/useCatbookHighlightAndImages';

const LS_PREFIX = '🐱::';

function lsSet(key: string, value: any) {
	localStorage.setItem(LS_PREFIX + key, JSON.stringify(value));
}

beforeEach(() => {
	localStorage.clear();
});

it('Returns null for an unknown cat name', () => {
	const { result } = renderHook(() => useCatbookHighlightAndImages());
	const data = result.current.getHighlightAndImages('Clifford');
	expect(data).toBeNull();
});

it('Returns null when the Catbook is empty for a cat', () => {
	const { result } = renderHook(() => useCatbookHighlightAndImages());
	const data = result.current.getHighlightAndImages('lalo');
	expect(data).toBeNull();
});

it('Returns data for a cat name regardless of case', () => {
	lsSet('zelda', [1]);
	const { result } = renderHook(() => useCatbookHighlightAndImages());
	const data = result.current.getHighlightAndImages('zELda');
	expect(data).not.toBeNull();
});

it('Returns a highlight and no images when Catbook has one image', () => {
	lsSet('lalo', [1]);
	const { result } = renderHook(() => useCatbookHighlightAndImages());
	const data = result.current.getHighlightAndImages('lalo');
	expect(data).not.toBeNull();
	expect(data?.highlight).not.toBeNull();
	expect(data?.highlight?.src).toMatch(/lalo-01/);
	expect(data?.images).toBeNull();
});

it('Returns a highlight and an images array when Catbook has multiple images', () => {
	lsSet('harvey', [1, 2, 3]);
	const { result } = renderHook(() => useCatbookHighlightAndImages());
	const data = result.current.getHighlightAndImages('harvey');
	expect(data).not.toBeNull();
	expect(data?.highlight).not.toBeNull();
	expect(data?.images).toHaveLength(2);
});
