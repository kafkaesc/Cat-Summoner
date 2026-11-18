import { useState } from 'react';
import Image from 'next/image';
import Button from '@/elements/Button';
import { useCatSummon } from '@/hooks/useCatSummon';

const cats = ['Fearless', 'Harvey', 'Lalo', 'Zelda'];

const stillGrassAlt =
	'An image of grass, still and quiet, waiting for a cat to be summoned.';

/**
 * @returns {React.JSX.Element} Clickable buttons for each cat and a loading area
 * that displays a new cat pic when one is summoned.
 */
export default function CatSummonCircle() {
	const {
		error: summonError,
		isLoading: catIsLoading,
		summonedCat,
		summonCat,
		unlockSummonedCat,
	} = useCatSummon();
	const [lastCat, setLastCat] = useState<string | null>(null);
	const [catImageFailed, setCatImageFailed] = useState(false);
	// Remounts the cat image on every summon, so retrying a photo that failed
	// to load requests it again instead of reusing the failed attempt
	const [summonCount, setSummonCount] = useState(0);

	const summonFailed =
		!catIsLoading && (Boolean(summonError) || catImageFailed);
	const noLoadingNoSummon = !catIsLoading && !summonedCat;

	function handleSummon(cat: string) {
		setLastCat(cat);
		setCatImageFailed(false);
		setSummonCount((count) => count + 1);
		summonCat(cat);
	}

	function failureMessage() {
		if (lastCat) {
			return `${lastCat} didn't answer your summon. Try calling them again.`;
		}
		return "The cat didn't answer your summon. Try calling them again.";
	}

	// The cat image stays mounted while hidden, so it preloads during the
	// summon and the previous cat stays out of view after a failure
	function catImageClass() {
		if (catIsLoading || summonFailed) return 'hidden';
		return 'mx-auto md:m-0';
	}

	return (
		<div className="text-center md:flex">
			<div className="w-full mb-1 md:flex-none md:w-32 lg:w-64 md:py-1 md:px-0.5">
				{cats.map((cat) => (
					<Button
						buttonStyle="secondary"
						className="md:mb-1 md:w-full"
						key={cat}
						onClick={() => handleSummon(cat)}
					>
						{cat}
					</Button>
				))}
			</div>
			<output className="block w-full md:grow md:py-1 md:px-0.5">
				{/* The still grass is only present before the first summon,
				as the output's initial content it gets real description */}
				{noLoadingNoSummon && !summonFailed && (
					<Image
						alt={stillGrassAlt}
						className="mx-auto md:m-0"
						fetchPriority="high"
						height={500}
						loading="eager"
						src="/assets/images/grass-still.svg"
						width={500}
					/>
				)}
				{/* When a summon fails the still grass returns as a backdrop, so it
				gets an empty alt and the message carries the status. The message
				sits over the grass's empty top so nothing shifts on the page */}
				{summonFailed && (
					<span className="relative block mx-auto w-fit md:m-0">
						<span className="absolute inset-x-0 top-0 block px-4 pt-2 text-center">
							{failureMessage()}
						</span>
						<Image
							alt=""
							height={500}
							src="/assets/images/grass-still.svg"
							width={500}
						/>
					</span>
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
						className={catImageClass()}
						height={500}
						key={summonCount}
						loading="eager"
						onError={() => setCatImageFailed(true)}
						onLoad={unlockSummonedCat}
						src={summonedCat.src}
						width={500}
					/>
				)}
			</output>
		</div>
	);
}
