import { ReactNode } from 'react';
import ContentColumn from './ContentColumn';
import Navbar from './Navbar';

interface LayoutProps {
	children: ReactNode;
}

/**
 * @param {ReactNode} children The content of the page
 * @returns A full page with navigation included at the top and
 * the children data inside of a content column
 */
export default function Layout({ children }: LayoutProps): JSX.Element {
	return (
		<>
			<Navbar />
			<main>
				<ContentColumn>{children}</ContentColumn>
			</main>
		</>
	);
}
