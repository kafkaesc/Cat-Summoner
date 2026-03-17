interface CcLeftProps {
	children: React.ReactNode;
}

export default function CatbookCatLeft({ children }: CcLeftProps): JSX.Element {
	return (
		<div className="text-center align-top full-width md:text-right md:inline-block md:w-1/2">
			{children}
		</div>
	);
}
