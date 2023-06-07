interface AProps {
	children: any;
	className?: string;
	[props: string]: any;
}

export default function A({ children, className, ...props }: AProps) {
	return className ? (
		<a
			{...props}
			className={`text-link hover:text-link-hover hover:underline ${className}`}
		>
			{children}
		</a>
	) : (
		<a {...props} className="text-link hover:text-link-hover hover:underline">
			{children}
		</a>
	);
}
