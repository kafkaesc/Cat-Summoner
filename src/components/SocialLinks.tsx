import Image from 'next/image';

const socialLinks = [
	{
		alt: 'GitHub Logo',
		name: 'GitHub',
		src: '/assets/images/social/github.png',
		url: 'https://github.com/kafkaesc',
	},
	{
		alt: 'Instagram Logo',
		name: 'Instagram',
		src: '/assets/images/social/instagram.png',
		url: 'https://instagram.com/kafkaesc',
	},
	{
		alt: 'Twitter Logo',
		name: 'Twitter',
		src: '/assets/images/social/twitter.png',
		url: 'https://twitter.com/_kafkaesc',
	},
	{
		alt: 'LinkedIn Logo',
		name: 'LinkedIn',
		src: '/assets/images/social/linkedin.png',
		url: 'https://linkedin.com/in/jahettinger',
	},
];

/**
 * @returns {JSX.Element} Linked icons for social media accounts
 */
export default function SocialLinks(): JSX.Element {
	return (
		<ul className="text-center">
			{socialLinks.map((so) => {
				return (
					<li key={`${so.name}-Logo`} className="inline-block mx-3">
						<a href={so.url} rel="noreferrer" target="_blank">
							<Image
								alt={so.alt}
								height={52}
								src={so.src}
								style={{ height: 24, width: 'auto' }}
								width={52}
							/>
						</a>
					</li>
				);
			})}
		</ul>
	);
}
