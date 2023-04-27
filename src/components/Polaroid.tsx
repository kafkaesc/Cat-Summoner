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
		<div className="p-2">
			<Image alt={alt} height={200} src={src} width={200} {...props} />
		</div>
	);
}
