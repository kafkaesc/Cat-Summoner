import Image from 'next/image';

interface PolaroidProps {
	alt: string;
	className?: string;
	src: string;
}

/**
 * @param {string} alt Alt text for the image
 * @param {string} className Optional className applied to the image element
 * @param {string} src Image path to display within the polaroid
 * @returns A square image (cropped if necessary) with extra
 * white space below, like a polaroid. Polaroid dimensions are 5:6.
 */
export default function Polaroid({ alt, className, src }: PolaroidProps) {
	return (
		<div
			className="inline-block p-2 mx-1 border border-cs-black"
			style={{ aspectRatio: '5/6' }}
		>
			{className ? (
				<Image
					alt={alt}
					height={150}
					src={src}
					width={150}
					className={className}
				/>
			) : (
				<Image alt={alt} height={150} src={src} width={150} />
			)}
		</div>
	);
}
