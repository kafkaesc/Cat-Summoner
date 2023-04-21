interface H1Props {
	children: any;
	className?: string;
	[props: string]: any;
}

export default function H1({ children, className, ...props }: H1Props) {
	return className ? (
		<h1
			{...props}
			className={`mb-2 text-4xl font-bold text-center ${className}`}
		>
			{children}
		</h1>
	) : (
		<h1 {...props} className="mb-2 text-4xl font-bold text-center">
			{children}
		</h1>
	);
}
