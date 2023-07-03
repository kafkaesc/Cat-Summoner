import Image from 'next/image';
import Link from '@/elements/Link';
import P from '@/elements/P';
import ContentColumn from '@/layout/ContentColumn';
import Heading404 from '@/components/Heading404';
import { useCatImageDetails } from '@/hooks/useCatImageDetails';

export default function Custom404() {
	const { getSpecialImage } = useCatImageDetails();
	const image = getSpecialImage('404');
	return (
		<div className="h-screen bg-black">
			<ContentColumn>
				<Heading404 />
				{image && (
					<Image
						alt={image.alt}
						className="mx-auto"
						height={400}
						width={400}
						src={image.src}
					/>
				)}
				<P className="text-center text-cs-white">
					That page does not exist. Please double check the URL or{' '}
					<Link href="/" linkStyle="dark-background">
						return home
					</Link>
					.
				</P>
			</ContentColumn>
		</div>
	);
}
