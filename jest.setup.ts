import '@testing-library/jest-dom';

// Default next/router mock so components that call useRouter, e.g., NavItem,
// render in tests. Suites that assert routing behavior override this one.
jest.mock('next/router', () => ({
	useRouter: () => ({ pathname: '/' }),
}));
