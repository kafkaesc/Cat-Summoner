import { ComponentPropsWithoutRef } from 'react';
import NextLink from 'next/link';

interface LinkProps extends ComponentPropsWithoutRef<typeof NextLink> {
	linkStyle?: 'dark-background' | 'light-background';
}

/** A styled Next Link component that accepts all native attributes */
export default function Link({
	children,
	className,
	href,
	linkStyle,
	...props
}: LinkProps) {
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
