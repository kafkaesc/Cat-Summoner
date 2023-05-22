import Button from '@/elements/Button';
import { useCatbook } from '@/hooks/useCatbook';

export default function CatbookHookDebug() {
	const { clearCatbook, unlockCatbookImage } = useCatbook();

	function unlockAll() {
		unlockCatbookImage('fearless', 1);
		unlockCatbookImage('harvey', 1);
		unlockCatbookImage('harvey', 2);
		unlockCatbookImage('harvey', 3);
		unlockCatbookImage('harvey', 4);
		unlockCatbookImage('lalo', 1);
		unlockCatbookImage('lalo', 2);
		unlockCatbookImage('lalo', 3);
		unlockCatbookImage('lalo', 4);
		unlockCatbookImage('lalo', 5);
	}

	return (
		<div>
			<code>debug</code>
			<br />
			<Button onClick={() => unlockAll()}>all</Button>
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
