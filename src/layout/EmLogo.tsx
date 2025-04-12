import Image from 'next/image';

/**
 * @returns {JSX.Element} An image of the site logo a little less than 2rem wide and tall
 */
export default function EmLogo(): JSX.Element {
	return (
		<Image
			alt="Cat Summoner Logo"
			className="w-7 h-7"
			height={48}
			src="/logo.png"
			width={48}
		/>
	);
}
