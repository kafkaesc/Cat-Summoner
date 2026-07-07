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
						key={cat}
						onClick={() => summonCat(cat)}
					>
						{cat}
					</Button>
				))}
			</div>
			<output className="block w-full md:flex-grow md:py-1 md:px-0.5">
				{/* The still grass is only present before the first summon,
				as the output's initial content it gets real description */}
				{noLoadingNoSummon && (
					<Image
						alt="An image of grass, still and quiet, waiting for a cat to be summoned. It sits on a transparent background, with the grass as a green and inviting foreground."
						className="mx-auto md:m-0"
						height={500}
						src="/assets/images/grass-still.svg"
						width={500}
					/>
				)}
				{/* The swaying grass is a decorative loading indicator, so it gets
				an empty alt, the sr-only text carries the loading status 
				for accessibility devices */}
				{catIsLoading && (
					<>
						<span className="sr-only">Summoning a cat...</span>
						<Image
							alt=""
							className="mx-auto md:m-0"
							height={500}
							src="/assets/images/grass-animated.svg"
							width={500}
						/>
					</>
				)}
				{summonedCat && (
					<Image
						alt={summonedCat.alt}
						className={catIsLoading ? 'hidden' : 'mx-auto md:m-0'}
						height={500}
						loading="eager"
						src={summonedCat.src}
						width={500}
					/>
				)}
			</output>
		</div>
	);
}
