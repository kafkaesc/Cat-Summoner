# Cat Summoner 🐱

Built by Jared Hettinger

[![Tests](https://github.com/kafkaesc/cat-summoner/actions/workflows/test.yml/badge.svg)](https://github.com/kafkaesc/cat-summoner/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/kafkaesc/cat-summoner/branch/main/graph/badge.svg)](https://codecov.io/gh/kafkaesc/cat-summoner)
[![Lint](https://github.com/kafkaesc/cat-summoner/actions/workflows/lint.yml/badge.svg)](https://github.com/kafkaesc/cat-summoner/actions/workflows/lint.yml)
[![Typecheck](https://github.com/kafkaesc/cat-summoner/actions/workflows/typecheck.yml/badge.svg)](https://github.com/kafkaesc/cat-summoner/actions/workflows/typecheck.yml)
[![Accessibility](https://github.com/kafkaesc/cat-summoner/actions/workflows/accessibility.yml/badge.svg)](https://github.com/kafkaesc/cat-summoner/actions/workflows/accessibility.yml)

Cat Summoner is a site for summoning cats. Built with React, Next, TypeScript, and Tailwind. Tested with Jest and React Testing Library. Visitors to the site can call a cat by clicking the button with their name. They will be treated to a random photo of the summoned cat. Once a photo is found it will be "unlocked" and viewable in the user's catbook.

Cat Summoner is hosted at [cat-summoner.com](https://cat-summoner.com)

The full code for this project is hosted at [github.com/kafkaesc/cat-summoner](https://github.com/kafkaesc/cat-summoner)

## 📋 Prerequisites

- [Node 22+](https://nodejs.org)
- [npm](https://www.npmjs.com)

## 📦 Installation & Operation

After first downloading this project, run `npm install` to install the node modules.

Once the project is installed, running it just takes two steps:

1. Run `npm run dev`
1. Open [http://localhost:3000](http://localhost:3000) in your browser of choice

## 🛠️ Tech Stack

- [Next 16](https://nextjs.org)
- [TypeScript 5](https://www.typescriptlang.org)
- [React 19](https://react.dev)
- [Tailwind 4](https://tailwindcss.com)

## 🎯 Testing

Tests are written with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), with coverage tracked using [Codecov](https://codecov.io/).

- `npm test` - Run all tests
- `npm run test:coverage` - Run all tests and generate a coverage report
- `npm run test:watch` - Run tests in 'watch mode', re-running as files are changed

### Coverage Graph

[![Coverage Graph](https://codecov.io/gh/kafkaesc/cat-summoner/graphs/sunburst.svg?token=W5IE8WJBPW)](https://codecov.io/gh/kafkaesc/cat-summoner)

## ♿ Accessibility

Cat Summoner meets [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Level AA (self-assessed, November 2026). The site was audited by hand against the guidelines, and an [axe](https://github.com/dequelabs/axe-core) scan of every page, including the open photo viewer, reports no violations. An [automated axe check](https://github.com/kafkaesc/cat-summoner/actions/workflows/accessibility.yml) also runs on every pull request and every push to `main`.

- **Screen readers:** Every cat photo has an endearing, hand-written description for its alt text, while decorative images use an empty `alt` so they're skipped. Summoning status, including errors, is announced through an `<output>` live region. Links that open a new tab say so.
- **Keyboard:** The photo viewer is a native `<dialog>` that closes with Escape, is labeled by its title, and opens from a real `<button>`. Summon buttons stay enabled while a cat loads, so focus isn't lost mid-summon, and every focusable element shows a clearly visible focus ring.
- **Navigation:** Pages use `<nav>` and `<main>` landmarks, and the current page is marked with `aria-current`. Navigation is only 4 items, so a skip link is unnecessary.
- **Color and contrast:** Links stand out from body text at 3:1 or better and underline on hover and focus. Button hover states keep text contrast between 6.9:1 and 8.7:1, well above the 4.5:1 minimum.
- **Tested by role:** Tests query elements by their role and accessible name, so a missing or broken label fails the test suite.

## 🤝 Collaboration

Wow! You must really love cats. 🐱 I always welcome new collaborations so if this project strikes your fancy feel free to contact me on [Instagram](https://www.instagram.com/kafkaesc) or [X/Twitter](https://www.twitter.com/_kafkaesc) to discuss your ideas.

## ⚖️ License

The code in this project is licensed under the [MIT License](LICENSE).

The cat photos are not covered by this license. They may be shared as part of this project, but may not be reused elsewhere without permission. To request permission for other uses, please reach out via [Instagram DM](https://www.instagram.com/kafkaesc).
