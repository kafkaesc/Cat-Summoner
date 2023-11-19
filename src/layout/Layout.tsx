import ContentColumn from './ContentColumn';
import Navbar from './Navbar';

/**
 * @param {any} children The content of the page
 * @returns A full page with navigation included at the top and
 * the children data inside of a content column
 */
export default function Layout({ children }: any) {
	return (
		<>
			<Navbar />
			<main>
				<ContentColumn>{children}</ContentColumn>
			</main>
		</>
	);
}
