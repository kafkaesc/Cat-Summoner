import { ReactNode, useState } from 'react';
import Image from 'next/image';

import Modal from '@/layout/Modal';

interface CatbookPhotoModalProps {
	alt: string;
	children: ReactNode;
	src: string;
	title?: string;
}

/**
 * @param {string} alt Alt text for the full-size cat photo
 * @param {ReactNode} children The clickable trigger content
 * @param {string} src Source of the full-size cat photo
 * @param {string} title Optional heading for the modal, defaults to 'Cat'
 * @returns {JSX.Element} A button wrapping the provided children that opens
 * the cat photo in a modal dialog when clicked
 */
export default function CatbookPhotoModal({
	alt,
	children,
	src,
	title,
}: CatbookPhotoModalProps) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button
				className="relative block w-full h-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
				onClick={() => setShowModal(true)}
				type="button"
			>
				{children}
			</button>
			{showModal ? (
				<Modal onClose={() => setShowModal(false)} title={title || 'Cat'}>
					<Image
						alt={alt}
						className="mx-auto md:m-0"
						height={512}
						src={src}
						width={512}
					/>
				</Modal>
			) : null}
		</>
	);
}
