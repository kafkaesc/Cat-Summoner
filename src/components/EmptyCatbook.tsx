import P from '@/elements/P';
import Link from '@/elements/Link';

export default function EmptyCatbook() {
	return (
		<P>
			Looks like you haven&apos;t unlocked any cat pictures yet! If you visit
			the <Link href="/">Cat Summoner homepage</Link> and summon a few cats
			you&apos;ll be able to see the pictures you&apos;ve found here.
		</P>
	);
}
