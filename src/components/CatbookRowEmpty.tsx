import Link from '@/elements/Link';
import P from '@/elements/P';

interface CatbookRowEmptyProps {
	name: string;
}

/**
 * @param {string} name Cat name for the cat
 * @returns {JSX.Element} Paragraph informing the user they haven't unlocked
 * any pictures for the cat and a link to the homepage to unlock more pictures.
 */
export default function EmptyCatbookRow({
	name,
}: CatbookRowEmptyProps): JSX.Element {
	return (
		<P className="text-left">
			You have not unlocked any {name} pictures. You can visit the{' '}
			<Link href="/">Cat Summoner homepage</Link> to call them a few times, then
			check back here.
		</P>
	);
}
