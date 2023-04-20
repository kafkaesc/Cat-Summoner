import ContentColumn from './ContentColumn';
import NavItem from './NavItem';

export default function Navbar() {
	return (
		<div className="text-center bg-cs-primary text-cs-white">
			<ContentColumn>
				<ul>
					<NavItem aria-label="Home" href="/">
						🐱
					</NavItem>
					<NavItem href="/Catbook">Catbook</NavItem>
					<NavItem href="/About">About</NavItem>
					<NavItem href="/FAQs">FAQs</NavItem>
				</ul>
			</ContentColumn>
		</div>
	);
}
