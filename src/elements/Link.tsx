import NextLink from 'next/link';

interface LinkProps {
	children: any;
	className?: string;
	href: string;
	linkStyle?: 'dark-background' | 'light-background';
	[props: string]: any;
}

/**
 * @param {any} children Content of the Next Link component
 * @param {string | undefined} className Optional string, if it exists it
 * will be appended to the classes for the Next Link element
 * @param {string} href The path or URL to navigate to
 * @param {string | undefined} linkStyle Optional string indicating the style
 * of the link, options are 'dark-background' and 'light-background', default
 * is light-background
 * @param {any} props Next Link component props that will be passed along
 * @returns {JSX.Element} A JSX component from next/link that provide linking
 * around the site via the Next framework
 */
export default function Link({
	children,
	className,
	href,
	linkStyle,
	...props
}: LinkProps): JSX.Element {
	return linkStyle === 'dark-background' && className ? (
		<NextLink
			{...props}
			className={`text-link-dark-bg hover:text-link-dark-bg-hover hover:underline ${className}`}
			href={href}
		>
			{children}
		</NextLink>
	) : linkStyle === 'dark-background' ? (
		<NextLink
			{...props}
			className="text-link-dark-bg hover:text-link-dark-bg-hover hover:underline"
			href={href}
		>
			{children}
		</NextLink>
	) : className ? (
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
