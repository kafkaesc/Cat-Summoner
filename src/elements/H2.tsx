interface H2Props {
	children: any;
	[props: string]: any;
}

export default function H2({ children, ...props }: H2Props) {
	return <h2 {...props}>{children}</h2>;
}
