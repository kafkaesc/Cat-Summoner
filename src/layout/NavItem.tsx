import { ComponentPropsWithoutRef } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

type NavItemProps = ComponentPropsWithoutRef<typeof NextLink>;

/** @returns An individual navigation link */
export default function NavItem({ children, href, ...props }: NavItemProps) {
	const { pathname } = useRouter();
	const isActive = typeof href === 'string' && pathname === href;
	return (
		<li className="inline-block">
			<NextLink
				{...props}
				aria-current={isActive ? 'page' : undefined}
				className="inline-block px-2 py-2"
				href={href}
			>
				<span
					className={`inline-block px-2 py-1 align-bottom border-b-2 hover:border-solid hover:border-cs-secondary-xlight hover:border-b-2 ${
						isActive ? 'border-cs-secondary-xlight' : 'border-cs-primary'
					}`}
				>
					{children}
				</span>
			</NextLink>
		</li>
	);
}
