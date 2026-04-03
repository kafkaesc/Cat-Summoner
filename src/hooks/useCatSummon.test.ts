import { renderHook, act } from '@testing-library/react';
import { useCatSummon } from '@/hooks/useCatSummon';

const mockUnlockCatbookImage = jest.fn();
const mockGetImageDetails = jest.fn();

jest.mock('./useCatbook', () => ({
	useCatbook: () => ({ unlockCatbookImage: mockUnlockCatbookImage }),
}));

jest.mock('./useCatImageDetails', () => ({
	useCatImageDetails: () => ({ getImageDetails: mockGetImageDetails }),
}));

const mockImageDetails = {
	alt: 'Lalo image 1 description',
	catId: 903,
	catImageId: 1,
	name: 'lalo',
	src: '/lalo-01.jpg',
};

beforeEach(() => {
	jest.useFakeTimers();
	mockGetImageDetails.mockReturnValue(mockImageDetails);
	mockUnlockCatbookImage.mockReset();
	mockGetImageDetails.mockClear();
});

afterEach(() => {
	jest.useRealTimers();
});

it('Returns initial state with no summoned cat, not loading, and no error', () => {
	const { result } = renderHook(() => useCatSummon());
	expect(result.current.summonedCat).toBeNull();
	expect(result.current.isLoading).toBe(false);
	expect(result.current.error).toBeNull();
});

it('Sets isLoading to true when summoning a cat', () => {
	const { result } = renderHook(() => useCatSummon());
	act(() => result.current.summonCat('Lalo', 1));
	expect(result.current.isLoading).toBe(true);
});

it('Sets summonedCat to the image details returned by getImageDetails', () => {
	const { result } = renderHook(() => useCatSummon());
	act(() => result.current.summonCat('Lalo', 1));
	expect(result.current.summonedCat).toEqual(mockImageDetails);
});

it('Sets isLoading to false and then passes the args to unlockCatbookImage after 2.5 seconds', () => {
	const { result } = renderHook(() => useCatSummon());
	act(() => result.current.summonCat('Lalo', 1));
	expect(result.current.isLoading).toBe(true);
	act(() => jest.advanceTimersByTime(2500));
	expect(result.current.isLoading).toBe(false);
	expect(mockUnlockCatbookImage).toHaveBeenCalledWith('Lalo', 1);
});

it('Passes the catImageId to getImageDetails', () => {
	const { result } = renderHook(() => useCatSummon());
	act(() => result.current.summonCat('Lalo', 3));
	expect(mockGetImageDetails).toHaveBeenCalledWith('Lalo', 3);
});

// Fearless's test is structured this way as long as they only have 1 image
it('Uses ID 1 for Fearless when no catImageId is provided', () => {
	const { result } = renderHook(() => useCatSummon());
	act(() => result.current.summonCat('fearless'));
	expect(mockGetImageDetails).toHaveBeenCalledWith('fearless', 1);
});

it('Uses a random ID for Harvey', () => {
	jest.spyOn(Math, 'random').mockReturnValue(0.8); // => Math.floor(0.8 * 5 + 1) = 5
	const { result } = renderHook(() => useCatSummon());
	act(() => result.current.summonCat('Harvey'));
	expect(mockGetImageDetails).toHaveBeenCalledWith('Harvey', 5);
	jest.spyOn(Math, 'random').mockRestore();
});

it('Uses a random ID for Lalo', () => {
	jest.spyOn(Math, 'random').mockReturnValue(0.6); // => Math.floor(0.6 * 5 + 1) = 4
	const { result } = renderHook(() => useCatSummon());
	act(() => result.current.summonCat('Lalo'));
	expect(mockGetImageDetails).toHaveBeenCalledWith('Lalo', 4);
	jest.spyOn(Math, 'random').mockRestore();
});

it('Uses a random ID for Zelda', () => {
	jest.spyOn(Math, 'random').mockReturnValue(0.4); // => Math.floor(0.4 * 5 + 1) = 3
	const { result } = renderHook(() => useCatSummon());
	act(() => result.current.summonCat('Zelda'));
	expect(mockGetImageDetails).toHaveBeenCalledWith('Zelda', 3);
	jest.spyOn(Math, 'random').mockRestore();
});

it('Uses ID 1 for an unknown cat name when no catImageId is provided', () => {
	const { result } = renderHook(() => useCatSummon());
	act(() => result.current.summonCat('Clifford'));
	expect(mockGetImageDetails).toHaveBeenCalledWith('Clifford', 1);
});

it('Sets error and clears isLoading when getImageDetails throws', () => {
	mockGetImageDetails.mockImplementation(() => {
		throw new Error('Cat not found');
	});

	const { result } = renderHook(() => useCatSummon());
	act(() => result.current.summonCat('Clifford', 1));

	expect(result.current.error).toBe('Cat not found');
	expect(result.current.isLoading).toBe(false);
	expect(result.current.summonedCat).toBeNull();
});

it('Clears a previous error when summoning a new cat', () => {
	mockGetImageDetails.mockImplementationOnce(() => {
		throw new Error('Cat not found');
	});

	const { result } = renderHook(() => useCatSummon());
	act(() => result.current.summonCat('Clifford', 1));
	expect(result.current.error).toBe('Cat not found');

	mockGetImageDetails.mockReturnValue(mockImageDetails);

	act(() => result.current.summonCat('Lalo', 1));
	expect(result.current.error).toBeNull();
});
