import NextLink from 'next/link';

interface LinkProps {
	href: string;
	children: any;
	[props: string]: any;
}

export default function Link({ href, children, ...props }: LinkProps) {
	return (
		<NextLink
			{...props}
			className="text-link hover:text-link-hover hover:underline"
			href={href}
		>
			{children}
		</NextLink>
	);
}
