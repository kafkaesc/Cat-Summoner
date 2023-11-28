import Button from '@/elements/Button';
import H2 from '@/elements/H2';
import P from '@/elements/P';
import CatbookRow from '@/components/CatbookRow';
import CatbookRowEmpty from '@/components/CatbookRowEmpty';
import ConditionalLink from '@/components/ConditionalLink';
import EmptyCatbook from '@/components/EmptyCatbook';
import { useCatbook } from '@/hooks/useCatbook';

export default function CatbookFull() {
	const { catbookData: catbook, clearCatbook, isEmpty } = useCatbook();

	return (
		<>
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
							<CatbookRow catImageIds={catbook.fearless} name="Fearless" />
						) : (
							<CatbookRowEmpty name="Fearless" />
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
							<CatbookRow catImageIds={catbook.harvey} name="Harvey" />
						) : (
							<CatbookRowEmpty name="Harvey" />
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
							<CatbookRow catImageIds={catbook.lalo} name="Lalo" />
						) : (
							<CatbookRowEmpty name="Lalo" />
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
							<CatbookRow catImageIds={catbook.zelda} name="Zelda" />
						) : (
							<CatbookRowEmpty name="Zelda" />
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
		</>
	);
}
