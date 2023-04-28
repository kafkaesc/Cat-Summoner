import Image from 'next/image';

/* TODO:
	Polaroid dimension ratio is 5:6
	Display square image (cropped if necessary) with extra white space below, 
	like a polaroid
*/

interface PolaroidProps {
	alt: string;
	src: string;
	[props: string]: any;
}

export default function Polaroid({ alt, src, ...props }: PolaroidProps) {
	return (
		<div
			className="inline-block p-2 mx-1 border border-cs-black"
			style={{ aspectRatio: '5/6' }}
		>
			<Image alt={alt} height={150} src={src} width={150} {...props} />
		</div>
	);
}
