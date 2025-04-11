import Image from 'next/image';
import Button from '@/elements/Button';
import { useCatSummon } from '@/hooks/useCatSummon';

// import loading from 'public/assets/images/loading.png';

const cats = ['Fearless', 'Harvey', 'Lalo', 'Zelda'];

/**
 * @returns {JSX.Element} Clickable buttons for each cat and a loading area
 * that displays a new cat pic when one is summoned.
 */
export default function CatSummonCircle(): JSX.Element {
	const { isLoading: catIsLoading, summonedCat, summonCat } = useCatSummon();

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
			<div className="w-full md:flex-grow md:py-1 md:px-0.5">
				{catIsLoading && (
					<Image
						alt="Loading"
						className="mx-auto animate-spin-3 md:m-0"
						height="500"
						width="500"
						src="/assets/images/loading.png"
					/>
				)}
				{catIsLoading && summonedCat && (
					<Image
						alt={summonedCat.alt}
						className="hidden"
						height={500}
						width={500}
						src={summonedCat.src}
					/>
				)}
				{!catIsLoading && summonedCat && (
					<Image
						alt={summonedCat.alt}
						className="mx-auto md:m-0"
						height={500}
						width={500}
						src={summonedCat.src}
					/>
				)}
			</div>
		</div>
	);
}
