interface AProps {
	children: any;
	[props: string]: any;
}

export default function A({ children, ...props }: AProps) {
	return (
		<a {...props} className="text-link hover:text-link-hover hover:underline">
			{children}
		</a>
	);
}
