import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
	return (
		<Html lang="en">
			<Head />
			<body className="bg-cs-white">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
