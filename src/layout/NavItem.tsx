import { ComponentPropsWithoutRef } from 'react';
import NextLink from 'next/link';

type NavItemProps = ComponentPropsWithoutRef<typeof NextLink>;

/** @returns An individual navigation link */
export default function NavItem({ children, ...props }: NavItemProps) {
	return (
		<li className="inline-block">
			<NextLink {...props} className="inline-block px-2 py-2">
				<span className="inline-block px-2 py-1 align-bottom border-b-2 border-cs-primary hover:border-solid hover:border-cs-secondary hover:border-b-2">
					{children}
				</span>
			</NextLink>
		</li>
	);
}
