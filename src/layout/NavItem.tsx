import Link from 'next/link';

export default function NavItem({ children, ...props }: any) {
	return (
		<li className="inline-block">
			<Link {...props} className="inline-block px-2 py-2">
				<span className="inline-block px-2 py-1 border-b-2 border-cs-blue hover:border-solid hover:border-cs-green hover:border-b-2">
					{children}
				</span>
			</Link>
		</li>
	);
}
