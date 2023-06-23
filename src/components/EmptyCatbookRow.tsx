import Link from '@/elements/Link';
import P from '@/elements/P';

interface EmptyCatbookRowProps {
	name: string;
}

export default function EmptyCatbookRow({ name }: EmptyCatbookRowProps) {
	return (
		<P className="text-left">
			You have not unlocked any {name} pictures. You can visit the{' '}
			<Link href="/">Cat Summoner homepage</Link> to call them a few times, then
			check back here.
		</P>
	);
}
