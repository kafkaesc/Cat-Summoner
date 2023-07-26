import Image from 'next/image';
import H2 from '@/elements/H2';
import { CatImageDetails } from '@/interfaces/CatInterfaces';

interface CatPicRowProps {
	catName: string;
	images: CatImageDetails[];
	title?: string;
}

export default function CatbookCatBottomPics({
	catName,
	images,
	title,
}: CatPicRowProps) {
	return (
		<>
			{title && <H2>{title}</H2>}
			{images.map((image, index) => {
				return (
					<div
						className="inline-block m-0.5"
						key={`${catName}-bottom-pic-${index}`}
					>
						<Image
							alt={image.alt}
							className="inline-block"
							height={150}
							src={image.src}
							width={150}
						/>
					</div>
				);
			})}
		</>
	);
}
