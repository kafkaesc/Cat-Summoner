/**
 * The lsPrefix is used to prefix the keys being used in local storage and
 * provide the site with some namespace protection if it's in a shared domain.
 */
const lsPrefix = '🐱::';

/**
 * Custom hook for managing local storage from within Next. This hook should
 * never be called directly from a component. If the site needs something in
 * local storage there should be a specific hook for that purpose that
 * utilizes this one.
 * @returns Functions for managing local storage
 */
export function useLocalStorage() {
	/**
	 * Add a new value to localStorage at key
	 * @param {string} key The key for storage in localStorage
	 * @param {any} val The value to store at key in localStorage
	 * @param {boolean?} arrayFlag Optional boolean, pass true if val should go into an array
	 */
	function add(key: string, val: any, arrayFlag?: boolean) {
		// Guard against trying to use this hook in SSR
		if (typeof window === 'undefined') return;

		// Full key is the site prefix + key, for basic namespace protection
		const fullKey = lsPrefix + key;

		// If val is undefined, store it as null to avoid issues with JSON.stringify
		if (typeof val === 'undefined') val = null;

		// No existing value — store val directly (wrapped in array if arrayFlag is set)
		const rawPrevStorage = localStorage.getItem(fullKey);
		if (!rawPrevStorage) {
			localStorage.setItem(fullKey, JSON.stringify(arrayFlag ? [val] : val));
			return;
		}

		// Parse the previous value, falling back to null if the stored JSON is malformed
		let prevStorage: any;
		try {
			prevStorage = JSON.parse(rawPrevStorage);
		} catch {
			prevStorage = null;
		}

		// If the previous value is an array, append val to it
		if (Array.isArray(prevStorage)) {
			localStorage.setItem(fullKey, JSON.stringify([...prevStorage, val]));
			return;
		}

		// If the previous value is an object, override object attributes,
		// add new object attributes, leave the rest untouched
		if (prevStorage && typeof prevStorage === 'object') {
			if (val && typeof val === 'object' && !Array.isArray(val)) {
				localStorage.setItem(
					fullKey,
					JSON.stringify({ ...prevStorage, ...val }),
				);
			}
			return;
		}

		// If the previous value is a primitive, create an array with the previous value and val
		localStorage.setItem(fullKey, JSON.stringify([prevStorage, val]));
	}

	/** Clear all of the site's local storage data */
	function clearAll() {
		// Guard against trying to use this hook in SSR
		if (typeof window === 'undefined') return;

		// Remove all items in localStorage that start with the site prefix
		Object.keys(localStorage)
			.filter((k) => k.startsWith(lsPrefix))
			.forEach((k) => localStorage.removeItem(k));
	}

	/** Delete a specific attribute from local storage */
	function clear(key: string) {
		// Guard against trying to use this hook in SSR
		if (typeof window === 'undefined') return;

		// Remove the item at prefix + key from localStorage
		localStorage.removeItem(lsPrefix + key);
	}

	/** @returns {any} The value tied to key in localStorage, or null if missing or invalid JSON */
	function get(key: string) {
		// Guard against trying to use this hook in SSR
		if (typeof window === 'undefined') return null;

		const raw = localStorage.getItem(lsPrefix + key);
		if (raw === null) {
			return null;
		}
		try {
			return JSON.parse(raw);
		} catch {
			return null;
		}
	}

	/**
	 * Sets the value of key to val in localStorage. Previous stored
	 * value(s) at key will be overwritten.
	 * @param {string} key The key for storage in localStorage
	 * @param {string} val The value to store at key in localStorage
	 */
	function set(key: string, val: any) {
		// Guard against trying to use this hook in SSR
		if (typeof window === 'undefined') return;

		// If val is undefined, store it as null to avoid issues with JSON.stringify
		if (typeof val === 'undefined') val = null;

		// Store at prefix + key in localStorage
		localStorage.setItem(lsPrefix + key, JSON.stringify(val));
	}

	return { add, clearAll, clear, get, set };
}
