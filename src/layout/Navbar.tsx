import ContentColumn from './ContentColumn';
import EmLogo from './EmLogo';
import NavItem from './NavItem';

/**
 * @returns {JSX.Element} Navigation bar with links to top-level pages
 */
export default function Navbar(): JSX.Element {
	return (
		<div className="text-center bg-cs-primary text-cs-white">
			<ContentColumn>
				<ul>
					<NavItem aria-label="Home" href="/">
						<EmLogo />
					</NavItem>
					<NavItem href="/Catbook">Catbook</NavItem>
					<NavItem href="/About">About</NavItem>
					<NavItem href="/FAQs">FAQs</NavItem>
				</ul>
			</ContentColumn>
		</div>
	);
}
