import Polaroid from '@/components/Polaroid';
import { useCatImageDetails } from '@/hooks/useCatImageDetails';

interface CatbookRowProps {
	catImageIds: number[];
	name: string;
}

export default function CatbookRow({
	catImageIds,
	name,
}: CatbookRowProps): JSX.Element {
	const { getImageDetails: getImage } = useCatImageDetails();
	return (
		<div className="text-center md:text-left">
			{catImageIds.map((catImageId) => {
				const image = getImage(name.toLowerCase(), catImageId);
				return image && <Polaroid key={`${name}-${catImageId}`} {...image} />;
			})}
		</div>
	);
}
