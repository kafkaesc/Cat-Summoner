import Image from 'next/image';

const techLinks = [
	{
		alt: 'Next.js Logo',
		name: 'Next.js',
		src: '/assets/images/tech/next.svg',
		url: 'https://nextjs.org/',
	},
	{
		alt: 'React Logo',
		name: 'React',
		src: '/assets/images/tech/react.svg',
		url: 'https://react.dev/',
	},
	{
		alt: 'TypeScript Logo',
		name: 'TypeScript',
		src: '/assets/images/tech/typescript.svg',
		url: 'https://typescriptlang.org/',
	},
	{
		alt: 'Tailwind Logo',
		name: 'Tailwind',
		src: '/assets/images/tech/tailwind.svg',
		url: 'https://tailwindcss.com/',
	},
	{
		alt: 'Jest Logo',
		name: 'Jest',
		src: '/assets/images/tech/jest.svg',
		url: 'https://jestjs.io/',
	},
	{
		alt: 'AWS Logo',
		name: 'AWS',
		src: '/assets/images/tech/aws.svg',
		url: 'https://aws.amazon.com/what-is-aws/',
	},
];

/**
 * @returns {JSX.Element} Linked icons for technology used for the front end
 */
export default function FrontEndTechList(): JSX.Element {
	return (
		<ul className="text-center">
			{techLinks.map((tl, index) => {
				return (
					<span key={`${tl.name}-Logo`}>
						<li className="inline-block p-3 md:p-2 md:mx-3 hover:animate-float-up-750ms">
							<a href={tl.url} rel="noreferrer" target="_blank">
								<Image
									alt={tl.alt}
									height={0}
									src={tl.src}
									width={0}
									style={{ height: 45, width: 'auto' }}
								/>
							</a>
						</li>
						{index === 0 && <br className="md:hidden" />}
						{index === 4 && <br className="md:hidden" />}
					</span>
				);
			})}
		</ul>
	);
}
