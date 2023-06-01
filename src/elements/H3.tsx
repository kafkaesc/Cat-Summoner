interface H3Props {
	children: any;
	className?: string;
	[props: string]: any;
}

export default function H3({ children, className, ...props }: H3Props) {
	return className ? (
		<h3 {...props} className={`mb-2 text-xl font-bold ${className}`}>
			{children}
		</h3>
	) : (
		<h3 {...props} className="mb-2 text-xl font-bold">
			{children}
		</h3>
	);
}
