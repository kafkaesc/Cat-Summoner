import { useLocalStorage } from '@/hooks/useLocalStorage';

beforeEach(() => {
	localStorage.clear();
});

// get Tests

it('gets null for a key that has not been set', () => {
	const { get } = useLocalStorage();
	const missingCat = get('missing cat'); // :(
	expect(missingCat).toBeNull();
});

it('gets a stored value', () => {
	const { get, set } = useLocalStorage();
	set('orange', 'Harvey');
	const orangeCat = get('orange');
	expect(orangeCat).toBe('Harvey');
});

it('gets null for a key with malformed JSON', () => {
	localStorage.setItem('🐱::bad', 'bad-json{{{');

	const { get } = useLocalStorage();
	expect(get('bad')).toBeNull();
});

// set Tests

it('sets a primitive value', () => {
	const { set, get } = useLocalStorage();
	set('count', 42);
	const count = get('count');
	expect(count).toBe(42);
});

it('sets and overwrites a previously stored value', () => {
	const { set, get } = useLocalStorage();
	set('color', 'orange');
	set('color', 'black');
	const color = get('color');
	expect(color).toBe('black');
});

it('sets an object', () => {
	const { set, get } = useLocalStorage();
	set('cat', { id: 903, name: 'Lalo', nickname: 'The Cow Cat' });
	const lalo = get('cat');
	expect(lalo).toEqual({ id: 903, name: 'Lalo', nickname: 'The Cow Cat' });
});

it('sets undefined as null', () => {
	const { set, get } = useLocalStorage();
	set('empty', undefined);
	const empty = get('empty');
	expect(empty).toBeNull();
});

// add Tests: no existing value

it('adds a primitive when nothing exists at the key', () => {
	const { add, get } = useLocalStorage();
	add('fruit', 'banana');
	const banana = get('fruit');
	expect(banana).toBe('banana');
});

it('adds the value in an array when the arrayFlag is  set', () => {
	const { add, get } = useLocalStorage();
	add('fruitList', 'banana', true);
	const fruitList = get('fruitList');
	expect(fruitList).toEqual(['banana']);
});

// add Tests: existing array

it('adds to an existing array', () => {
	const { add, get } = useLocalStorage();
	add('fruitList', 'banana', true);
	add('fruitList', 'mango');
	add('fruitList', 'kale'); // useLocalStorage doesn't ask questions about your data, it just stores it

	const fruitList = get('fruitList');
	expect(fruitList).toEqual(['banana', 'mango', 'kale']);
});

// add Tests: existing object

it('adds data into an existing object', () => {
	const { add, get } = useLocalStorage();
	add('harv', { name: 'Harvey' });
	add('harv', { id: 902 });
	add('harv', { color: 'orange' });

	const harv = get('harv');
	expect(harv).toEqual({ color: 'orange', id: 902, name: 'Harvey' });
});

it('adds data overwriting existing keys when merging into an object', () => {
	const { add, get } = useLocalStorage();
	add('zelda', { id: 1, name: 'Lalo' });
	add('zelda', { id: 904 });
	add('zelda', { name: 'Zelda', nickname: 'The Fruit Lover' });

	const zelda = get('zelda');
	expect(zelda).toEqual({
		id: 904,
		name: 'Zelda',
		nickname: 'The Fruit Lover',
	});
});

// add Tests: existing primitive

it('adds a new value as appended to an array with the previous primitive', () => {
	const { add, get } = useLocalStorage();
	add('places', 'first');
	add('places', 'second');
	add('places', 'third');

	const places = get('places');
	expect(places).toEqual(['first', 'second', 'third']);
});

// clear Tests

it('clear removes a specific key', () => {
	const { set, clear, get } = useLocalStorage();
	set('name', 'Zelda');
	clear('name');

	const name = get('name');
	expect(name).toBeNull();
});

it('clear does not remove other keys', () => {
	const { set, clear, get } = useLocalStorage();
	set('cat1', 1);
	set('cat2', 2);
	clear('cat1');

	const cat2 = get('cat2');
	expect(cat2).toBe(2);
});

// clearAll

it('clearAll removes all site-prefixed keys', () => {
	const { set, clearAll, get } = useLocalStorage();
	set('name', 'Harvey');
	set('number', 5);
	clearAll();

	const name = get('name');
	const number = get('number');
	expect(name).toBeNull();
	expect(number).toBeNull();
});

it('clearAll does not remove keys from other namespaces', () => {
	const { set, clearAll } = useLocalStorage();
	localStorage.setItem('other-app::data', 'persist');
	set('name', 'Harvey');
	clearAll();

	const otherAppData = localStorage.getItem('other-app::data');
	expect(otherAppData).toBe('persist');
});
