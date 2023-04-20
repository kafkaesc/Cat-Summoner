interface H1Props {
	children: any;
	[props: string]: any;
}

export default function H1({ children, ...props }: H1Props) {
	return <h1 {...props}>{children}</h1>;
}
