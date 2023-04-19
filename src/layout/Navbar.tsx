import Link from 'next/link';
import ContentColumn from './ContentColumn';

export default function Navbar() {
	return (
		<div className="text-center bg-cs-blue text-cs-white">
			<ContentColumn>
				<ul>
					<li className="inline-block px-4 py-2">
						<Link href="/">🐱</Link>
					</li>
					<li className="inline-block px-4 py-2">
						<Link href="/About">About</Link>
					</li>
					<li className="inline-block px-4 py-2">
						<Link href="/FAQs">FAQs</Link>
					</li>
				</ul>
			</ContentColumn>
		</div>
	);
}
