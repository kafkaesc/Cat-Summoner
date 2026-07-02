# Project Guidelines

## Commands

`npm run dev`, `npm run build`, `npm test`, `npm run lint`, `npx tsc --noEmit`

This project uses **npm** (`package-lock.json`). Never use `pnpm` or `yarn`.

There is no `tsc` script, so type-check with `npx tsc --noEmit`.

## Code Patterns

- Never use nested ternaries. Extract the logic to a named function above `return` using a flat sequence of guard returns--one `if (...) return ...` per branch with the fallback last.
- Avoid multiline ternaries inline in JSX props. Extract them to a named function above `return`.
- Import ordering: subfolders (A–Z) before root files (A–Z).
- All project imports in source files use the `@/` alias, never relative paths--even same-folder siblings. Only test files use `./`.
- Tests structure: flat `it()` calls, no `describe`, assign DOM queries to a const before `expect`/`userEvent`.
- New code should be formatted by Prettier according to the `src/.prettierrc` file (tabs, single quotes).

## Definition of Done

Run these after making changes, before reporting work done.

### After any changes

- `npm test` — all tests must pass. Run the full suite, never a filtered subset (`-t`, a single file). A change to a shared or reused component (anything in `elements/`, `layout/`, or a component rendered by a page) can break tests in files you did not touch.
- `npx tsc --noEmit` — must pass with zero errors
- `npm run lint` — must pass with zero errors
- Check that no real API keys or secrets are present in any changed files. They belong in `.env.local` only and must never be committed

### Version control

- Never `git commit` or `git push`. Staging and version control are the user's responsibility.

### After renaming a component or file

- Re-check import order in every file that imports the renamed symbol. The rename may have broken alphabetical ordering.
