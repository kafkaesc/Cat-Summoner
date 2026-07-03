import '@testing-library/jest-dom';

// Default next/router mock so components that call useRouter, e.g., NavItem,
// render in tests. Suites that assert routing behavior will override this one.
jest.mock('next/router', () => ({
	useRouter: () => ({ pathname: '/' }),
}));

// jsdom does not implement showModal on <dialog>, so give tests
// a minimal version that toggles the open state
if (!HTMLDialogElement.prototype.showModal) {
	HTMLDialogElement.prototype.showModal = function () {
		this.open = true;
	};
}

// jsdom does not implement close on <dialog>, so give tests
// a minimal version that toggles the open state
if (!HTMLDialogElement.prototype.close) {
	HTMLDialogElement.prototype.close = function () {
		this.open = false;
	};
}
