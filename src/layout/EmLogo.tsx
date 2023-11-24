import Image from 'next/image';
import Logo from 'public/logo.png';

/**
 * @returns {JSX.Element} An image of the site logo a little less than 2rem wide and tall
 */
export default function EmLogo(): JSX.Element {
	return <Image alt="Cat-Summoner Logo" src={Logo} className="w-7 h-7" />;
}
