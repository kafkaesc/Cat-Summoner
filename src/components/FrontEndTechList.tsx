import Image from 'next/image';

import NextJsLogo from 'public/assets/images/tech/next.svg';
import ReactLogo from 'public/assets/images/tech/react.svg';
import TypeScriptLogo from 'public/assets/images/tech/typescript.svg';
import TailwindLogo from 'public/assets/images/tech/tailwind.svg';
import JestLogo from 'public/assets/images/tech/jest.svg';

const techLinks = [
	{
		alt: 'Next.js Logo',
		name: 'Next.js',
		src: NextJsLogo,
		url: 'https://nextjs.org/',
	},
	{
		alt: 'React Logo',
		name: 'React',
		src: ReactLogo,
		url: 'https://react.dev/',
	},
	{
		alt: 'TypeScript Logo',
		name: 'TypeScript',
		src: TypeScriptLogo,
		url: 'https://www.typescriptlang.org/',
	},
	{
		alt: 'Tailwind Logo',
		name: 'Tailwind',
		src: TailwindLogo,
		url: 'https://tailwindcss.com/',
	},
	{
		alt: 'Jest Logo',
		name: 'Jest',
		src: JestLogo,
		url: 'https://jestjs.io/',
	},
];

export default function FrontEndTechList() {
	return (
		<ul className="text-center">
			{techLinks.map((tl, index) => {
				return (
					<span key={`${tl.name}-Logo`}>
						<li className="inline-block p-3 md:mx-3 hover:animate-float-up-750ms">
							<a href={tl.url} rel="noreferrer" target="_blank">
								<Image alt={tl.alt} height={48} src={tl.src} />
							</a>
						</li>
						{index === 0 && <br className="md:hidden" />}
					</span>
				);
			})}
		</ul>
	);
}
