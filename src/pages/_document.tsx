import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					as="image"
					href="/assets/images/grass-animated.svg"
					rel="preload"
				/>
			</Head>
			<body className="bg-cs-white">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
