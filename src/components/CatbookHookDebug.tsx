import Button from '@/elements/Button';
import { useCatbook } from '@/hooks/useCatbook';

export default function CatbookHookDebug() {
	const { clearCatbook, unlockCatbookImage } = useCatbook();

	return (
		<div>
			<code>debug</code>
			<br />
			<Button onClick={() => unlockCatbookImage('fearless', 1)}>
				unlock fearless 1
			</Button>
			<Button onClick={() => unlockCatbookImage('harvey', 1)}>
				unlock harvey 1
			</Button>
			<Button onClick={() => unlockCatbookImage('harvey', 2)}>
				unlock harvey 2
			</Button>
			<Button onClick={() => unlockCatbookImage('lalo', 1)}>
				unlock lalo 1
			</Button>
			<Button onClick={() => unlockCatbookImage('lalo', 2)}>
				unlock lalo 2
			</Button>
			<Button onClick={() => clearCatbook()}>clear</Button>
		</div>
	);
}
