import Link from '@/elements/Link';
import P from '@/elements/P';
import ContentColumn from '@/layout/ContentColumn';
import Heading404 from '@/components/Heading404';

export default function Custom404() {
	return (
		<ContentColumn>
			<Heading404 />
			<P className="text-center">
				That page does not exist. Please double check the URL or{' '}
				<Link href="/">return home</Link>.
			</P>
		</ContentColumn>
	);
}
