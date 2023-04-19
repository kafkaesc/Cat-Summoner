import Image from 'next/image';

import GitHubLogo from 'public/assets/images/social/github.png';
import InstagramLogo from 'public/assets/images/social/instagram.png';
import TwitterLogo from 'public/assets/images/social/twitter.png';

export default function SocialLinks() {
	return (
		<ul className="text-center">
			<li className="inline-block mx-3">
				<a href="https://github.com/kafkaesc" rel="noreferrer" target="_blank">
					<Image alt="GitHub Logo" height={32} src={GitHubLogo} />
				</a>
			</li>
			<li className="inline-block mx-3">
				<a
					href="https://instagram.com/kafkaesc"
					rel="noreferrer"
					target="_blank"
				>
					<Image alt="Instagram" height={32} src={InstagramLogo} />
				</a>
			</li>
			<li className="inline-block mx-3">
				<a
					href="https://twitter.com/_kafkaesc"
					rel="noreferrer"
					target="_blank"
				>
					<Image alt="Twitter Logo" height={32} src={TwitterLogo} />
				</a>
			</li>
		</ul>
	);
}
