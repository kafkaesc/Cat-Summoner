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
						className="inline-block w-1/2 sm:w-1/4 px-0.5 aspect-square "
						key={`${catName}-bottom-pic-${index}`}
					>
						<div className="relative inline-block w-full h-full">
							<Image alt={image.alt} fill={true} src={image.src} />
						</div>
					</div>
				);
			})}
		</>
	);
}
