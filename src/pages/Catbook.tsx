import Head from 'next/head';
import Button from '@/elements/Button';
import H1 from '@/elements/H1';
import H2 from '@/elements/H2';
import P from '@/elements/P';
import Layout from '@/layout/Layout';
import EmptyCatbook from '@/components/EmptyCatbook';
import EmptyCatbookRow from '@/components/EmptyCatbookRow';
import Polaroid from '@/components/Polaroid';
import { useCatbook } from '@/hooks/useCatbook';
import { useCatImageDetails } from '@/hooks/useCatImageDetails';

export default function Catbook() {
	const { catbookData: catbook, clearCatbook, isEmpty } = useCatbook();
	const { getImageDetails: getCatImage } = useCatImageDetails();

	return (
		<Layout>
			<Head>
				<title>Catbook 🐱 Cat Summoner</title>
			</Head>
			<H1 className="mb-2">Catbook</H1>
			{isEmpty() ? (
				<EmptyCatbook />
			) : (
				<>
					<H2>Fearless</H2>
					<div className="text-center md:text-left">
						{catbook.fearless ? (
							catbook.fearless.map((catImageId, index) => {
								const image = getCatImage('fearless', catImageId);
								return (
									image && <Polaroid key={`fearless-${index}`} {...image} />
								);
							})
						) : (
							<EmptyCatbookRow name="Fearless" />
						)}
					</div>
					<H2>Harvey</H2>
					<div className="text-center md:text-left">
						{catbook.harvey ? (
							catbook.harvey.map((catImageId, index) => {
								const image = getCatImage('harvey', catImageId);
								return image && <Polaroid key={`harvey-${index}`} {...image} />;
							})
						) : (
							<EmptyCatbookRow name="Harvey" />
						)}
					</div>
					<H2>Lalo</H2>
					<div className="text-center md:text-left">
						{catbook.lalo ? (
							catbook.lalo.map((catImageId, index) => {
								const image = getCatImage('lalo', catImageId);
								return image && <Polaroid key={`lalo-${index}`} {...image} />;
							})
						) : (
							<EmptyCatbookRow name="Lalo" />
						)}
					</div>
					<H2>Zelda</H2>
					<div className="text-center md:text-left">
						{catbook.zelda ? (
							catbook.zelda?.map((catImageId, index) => {
								const image = getCatImage('zelda', catImageId);
								return image && <Polaroid key={`zelda-${index}`} {...image} />;
							})
						) : (
							<EmptyCatbookRow name="Zelda" />
						)}
					</div>
					<P className="text-center">
						Want to start over?{' '}
						<Button buttonStyle="text" onClick={() => clearCatbook()}>
							Click here to reset your Catbook
						</Button>
						.
					</P>
				</>
			)}
		</Layout>
	);
}
