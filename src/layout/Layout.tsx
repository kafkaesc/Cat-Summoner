import ContentColumn from './ContentColumn';
import Navbar from './Navbar';

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
