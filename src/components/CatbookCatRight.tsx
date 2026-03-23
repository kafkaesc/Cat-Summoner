import { ReactNode } from 'react';

interface CcRightProps {
	children: ReactNode;
}

export default function CatbookCatRight({ children }: CcRightProps) {
	return (
		<div className="align-top md:px-2 full-width md:inline-block md:w-1/2">
			{children}
		</div>
	);
}
