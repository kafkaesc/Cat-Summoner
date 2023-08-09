import Head from 'next/head';
import Button from '@/elements/Button';
import H1 from '@/elements/H1';
import H2 from '@/elements/H2';
import P from '@/elements/P';
import Layout from '@/layout/Layout';
import ConditionalLink from '@/components/ConditionalLink';
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
					<H2>
						<ConditionalLink
							condition={!!(catbook.fearless && catbook.fearless.length > 0)}
							link={`/Catbook/Fearless`}
						>
							Fearless
						</ConditionalLink>
					</H2>
					<div className="text-center md:text-left">
						{catbook.fearless ? (
							catbook.fearless.map((catImageId) => {
								const image = getCatImage('fearless', catImageId);
								return (
									image && (
										<Polaroid key={`fearless-${catImageId}`} {...image} />
									)
								);
							})
						) : (
							<EmptyCatbookRow name="Fearless" />
						)}
					</div>
					<H2>
						<ConditionalLink
							condition={!!(catbook.harvey && catbook.harvey.length > 0)}
							link={`/Catbook/Harvey`}
						>
							Harvey
						</ConditionalLink>
					</H2>
					<div className="text-center md:text-left">
						{catbook.harvey ? (
							catbook.harvey.map((catImageId) => {
								const image = getCatImage('harvey', catImageId);
								return (
									image && <Polaroid key={`harvey-${catImageId}`} {...image} />
								);
							})
						) : (
							<EmptyCatbookRow name="Harvey" />
						)}
					</div>
					<H2>
						<ConditionalLink
							condition={!!(catbook.lalo && catbook.lalo.length > 0)}
							link={`/Catbook/Lalo`}
						>
							Lalo
						</ConditionalLink>
					</H2>
					<div className="text-center md:text-left">
						{catbook.lalo ? (
							catbook.lalo.map((catImageId) => {
								const image = getCatImage('lalo', catImageId);
								return (
									image && <Polaroid key={`lalo-${catImageId}`} {...image} />
								);
							})
						) : (
							<EmptyCatbookRow name="Lalo" />
						)}
					</div>
					<H2>
						<ConditionalLink
							condition={!!(catbook.zelda && catbook.zelda.length > 0)}
							link={`/Catbook/Zelda`}
						>
							Zelda
						</ConditionalLink>
					</H2>
					<div className="text-center md:text-left">
						{catbook.zelda ? (
							catbook.zelda?.map((catImageId) => {
								const image = getCatImage('zelda', catImageId);
								return (
									image && <Polaroid key={`zelda-${catImageId}`} {...image} />
								);
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
