/*
 * Turns the home page's Lighthouse CI results into shields.io endpoint badge
 * files. Each badge shows the category's best score across the runs, the same
 * optimistic scoring the weekly Lighthouse check uses.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const reportsDir = 'lighthouse-reports';
const badgesDir = 'lighthouse-badges';

const categories = [
	{ key: 'performance', label: 'Performance' },
	{ key: 'accessibility', label: 'Accessibility' },
	{ key: 'best-practices', label: 'Best Practices' },
	{ key: 'seo', label: 'SEO' },
];

/** Uses Lighthouse's own score bands */
function badgeColor(score) {
	if (score >= 90) return 'brightgreen';
	if (score >= 50) return 'orange';
	return 'red';
}

const manifest = JSON.parse(
	readFileSync(join(reportsDir, 'manifest.json'), 'utf8'),
);
const homeRuns = manifest.filter((run) => new URL(run.url).pathname === '/');
if (homeRuns.length === 0) {
	throw new Error('No Lighthouse runs found for the home page');
}

mkdirSync(badgesDir, { recursive: true });
for (const { key, label } of categories) {
	const best = Math.max(...homeRuns.map((run) => run.summary[key]));
	const score = Math.round(best * 100);
	const badge = {
		schemaVersion: 1,
		label,
		message: String(score),
		color: badgeColor(score),
	};
	writeFileSync(
		join(badgesDir, `${key}.json`),
		`${JSON.stringify(badge, null, '\t')}\n`,
	);
}
