/*
	TODO: Custom hook for general use of local storage.
	
	- add (key: string, val: any): receives a key to store the val on in 
		localStorage, (1) if there is no val for that key, add the key/val pair, 
		(2) if there is already a value for the key, add val to that array/object
	
	- clear (): clear all local storage
	
	- get (key: string): get the value for the key, use JSON parse, 
		and return the primitive/array/object

	- set (key: string, val: any), inserts the key/val pair into 
		localStorage regardless of existing key/val or not
*/

export function useLocalStorage() {
	function add(key: string, val: any) {
		if (typeof val === 'undefined') {
			val = null;
		}
		if (localStorage.getItem(key)) {
			const prevStorage = JSON.parse('' + localStorage.getItem(key));
			if (prevStorage && Array.isArray(prevStorage)) {
				localStorage.setItem(key, JSON.stringify([...prevStorage, val]));
			} else if (prevStorage && typeof prevStorage === 'object') {
				// TODO: Override object attributes,
				// add new object attributes,
				// leave the rest of the object untouched
			} else {
				localStorage.setItem(key, JSON.stringify([prevStorage, val]));
			}
		} else {
			localStorage.setItem(key, JSON.stringify(val));
		}
	}

	function clear() {
		localStorage.clear();
	}

	function get(key: string) {
		return JSON.parse('' + localStorage.getItem(key));
	}

	function set(key: string, val: any) {
		if (typeof val === 'undefined') {
			val = null;
		}
		localStorage.setItem(key, JSON.stringify(val));
	}

	return { add, clear, get, set };
}
