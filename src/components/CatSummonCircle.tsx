import Image from 'next/image';
import Button from '@/elements/Button';
import { useCatSummon } from '@/hooks/useCatSummon';

const cats = ['Fearless', 'Harvey', 'Lalo', 'Zelda'];

/**
 * @returns {JSX.Element} Clickable buttons for each cat and a loading area
 * that displays a new cat pic when one is summoned.
 */
export default function CatSummonCircle() {
	const { isLoading: catIsLoading, summonedCat, summonCat } = useCatSummon();
	const noLoadingNoSummon = !catIsLoading && !summonedCat;

	return (
		<div className="text-center md:flex">
			<div className="w-full mb-1 md:flex-none md:w-32 lg:w-64 md:py-1 md:px-0.5">
				{cats.map((cat) => (
					<Button
						buttonStyle="secondary"
						className="md:mb-1 md:w-full"
						disabled={catIsLoading}
						key={cat}
						onClick={() => summonCat(cat)}
					>
						{cat}
					</Button>
				))}
			</div>
			<div className="w-full md:flex-grow md:py-1 md:px-0.5">
				{noLoadingNoSummon && (
					<Image
						alt="An image of grass, still and quiet, waiting for a cat to be summoned. It sits on a transparent background, with the grass as a green and inviting foreground."
						className="mx-auto md:m-0"
						height={500}
						src="/assets/images/grass-still.svg"
						width={500}
					/>
				)}
				{/* Always rendered so the browser preloads it before loading is triggered */}
				<Image
					alt="Loading. The grass is slowly swaying in the breeze, you anticipate the arrival of the summoned cat."
					className={catIsLoading ? 'mx-auto md:m-0' : 'hidden'}
					height={500}
					src="/assets/images/grass-animated.svg"
					width={500}
				/>
				{summonedCat && (
					<Image
						alt={summonedCat.alt}
						// catIsLoading hides the image while playing the rustling grass animation
						className={catIsLoading ? 'hidden' : 'mx-auto md:m-0'}
						height={500}
						loading="eager"
						src={summonedCat.src}
						width={500}
					/>
				)}
			</div>
		</div>
	);
}
