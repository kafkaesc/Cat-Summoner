import Image from 'next/image';

import GitHubLogo from 'public/assets/images/social/github.png';
import InstagramLogo from 'public/assets/images/social/instagram.png';
import TwitterLogo from 'public/assets/images/social/twitter.png';

const socialLinks = [
	{
		alt: 'GitHub Logo',
		name: 'GitHub',
		src: GitHubLogo,
		url: 'https://github.com/kafkaesc',
	},
	{
		alt: 'Instagram Logo',
		name: 'Instagram',
		src: InstagramLogo,
		url: 'https://instagram.com/kafkaesc',
	},
	{
		alt: 'Twitter Logo',
		name: 'Twitter',
		src: TwitterLogo,
		url: 'https://twitter.com/_kafkaesc',
	},
];

export default function SocialLinks() {
	return (
		<ul className="text-center">
			{socialLinks.map((so) => {
				return (
					<li key={`${so.name}-Logo`} className="inline-block mx-3">
						<a href={so.url} rel="noreferrer" target="_blank">
							<Image alt={so.alt} height={24} src={so.src} />
						</a>
					</li>
				);
			})}
		</ul>
	);
}
