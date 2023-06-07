import NextLink from 'next/link';

interface LinkProps {
	href: string;
	children: any;
	className?: string;
	[props: string]: any;
}

export default function Link({
	href,
	children,
	className,
	...props
}: LinkProps) {
	return className ? (
		<NextLink
			{...props}
			className={`text-link hover:text-link-hover hover:underline ${className}`}
			href={href}
		>
			{children}
		</NextLink>
	) : (
		<NextLink
			{...props}
			className="text-link hover:text-link-hover hover:underline"
			href={href}
		>
			{children}
		</NextLink>
	);
}
