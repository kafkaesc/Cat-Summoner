import { ReactNode, useState } from 'react';
import Image from 'next/image';
import Button from '@/elements/Button';

interface CatbookPhotoModalProps {
	alt: string;
	children: ReactNode;
	src: string;
	title?: string;
}

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
				<div
					aria-modal="true"
					className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
					aria-labelledby="catbookPhotoModalTitle"
					role="dialog"
				>
					<div className="relative w-auto max-w-3xl mx-auto my-6">
						<div className="relative flex flex-col w-full bg-white border rounded-lg shadow-lg outline-none focus:outline-none">
							<div className="flex items-start justify-between p-1">
								<h2 id="catbookPhotoModalTitle" className="text-2xl font-bold">
									{title || 'Cat'}
								</h2>
							</div>
							<div className="relative flex-auto px-1">
								<Image
									alt={alt}
									className="mx-auto md:m-0"
									height={512}
									src={src}
									width={512}
								/>
							</div>
							<div className="flex items-center justify-center p-1">
								<Button onClick={() => setShowModal(false)} type="button">
									Close
								</Button>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}
