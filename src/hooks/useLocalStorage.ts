export function useLocalStorage(key: string, value: any) {
	function clearLocalStorage() {
		localStorage.clear();
	}

	// TODO: Parse the keys in local storage to return arrays representing the
	// unlocked cat images for each cat.
	function getUnlockedCatImages(name?: string): Array<number> | Object {
		if (name) {
			return [];
		} else {
			return {};
		}
	}

	// TODO: Use localStorage to share JSON strings representing arrays with the
	// value of "unlocked" cat images using the cat's name as a key
	function unlockCatImage(name: string, imageId: number) {
		if (localStorage.getItem(name.toLowerCase())) {
		} else {
			localStorage.setItem(name, `[${imageId}]`);
		}
	}

	return { clearLocalStorage, getUnlockedCatImages, unlockCatImage };
}
