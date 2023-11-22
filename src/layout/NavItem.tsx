import Link from 'next/link';

/**
 * List items to be used in the Navbar component
 * @param {any} children The content to go inside the navigation link,
 * usually a string
 * @param {any} props Component props to be passed to the
 * Next Link component
 * @returns
 */
export default function NavItem({ children, ...props }: any) {
	return (
		<li className="inline-block">
			<Link {...props} className="inline-block px-2 py-2">
				<span className="inline-block px-2 py-1 align-bottom border-b-2 border-cs-primary hover:border-solid hover:border-cs-secondary hover:border-b-2">
					{children}
				</span>
			</Link>
		</li>
	);
}
