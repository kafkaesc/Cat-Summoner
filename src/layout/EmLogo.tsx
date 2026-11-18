import Image from 'next/image';

/**
 * The negative vertical margin lets the 28px logo take up the same 24px of
 * height as a line of nav text, so every nav link (and its focus ring) is
 * the same size.
 *
 * @returns {React.JSX.Element} An image of the site logo a little less than 2rem wide and tall
 */
export default function EmLogo() {
	return (
		<Image
			alt="Cat Summoner Logo"
			className="w-7 h-7 -my-0.5"
			height={48}
			src="/logo.png"
			width={48}
		/>
	);
}
