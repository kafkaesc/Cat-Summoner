import Image from 'next/image';
import Logo from 'public/logo.png';

export default function EmLogo() {
	return <Image alt="Cat-Summoner Logo" src={Logo} className="w-7 h-7" />;
}
