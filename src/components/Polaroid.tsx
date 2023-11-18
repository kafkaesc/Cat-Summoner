import Image, { StaticImageData } from 'next/image';

interface PolaroidProps {
	alt: string;
	src: StaticImageData;
	[props: string]: any;
}

/**
 * @param {string} alt Alt text for the image
 * @param {StaticImageData} src Image data to display within the polaroid
 * @param {any} props Optional props parameter that can include a className string
 * @returns {JSX.Element} A square image (cropped if necessary) with extra
 * white space below, like a polaroid. Polaroid dimensions are 5:6.
 */
export default function Polaroid({ alt, src, ...props }: PolaroidProps) {
	return (
		<div
			className="inline-block p-2 mx-1 border border-cs-black"
			style={{ aspectRatio: '5/6' }}
		>
			{props && props.className ? (
				<Image
					alt={alt}
					height={150}
					src={src}
					width={150}
					className={props.className}
				/>
			) : (
				<Image alt={alt} height={150} src={src} width={150} />
			)}
		</div>
	);
}
