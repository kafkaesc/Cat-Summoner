import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Button from '@/elements/Button';

interface CatbookPhotoModalProps {
	alt: string;
	children: any;
	src: StaticImageData;
}

export default function CatbookPhotoModal({
	alt,
	children,
	src,
}: CatbookPhotoModalProps): JSX.Element {
	const [showModal, setShowModal] = useState<boolean>(false);
	return (
		<>
			<span className="cursor-pointer" onClick={() => setShowModal(true)}>
				{children}
			</span>
			{showModal ? (
				<div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
					<div className="relative w-auto max-w-3xl mx-auto my-6">
						<div className="relative flex flex-col w-full bg-white border rounded-lg shadow-lg outline-none focus:outline-none">
							<div className="flex items-start justify-between p-1">
								<h2 className="text-2xl font-bold">General Info</h2>
							</div>
							<div className="relative flex-auto px-1">
								<Image
									alt={alt}
									className="mx-auto md:m-0"
									height={512}
									width={512}
									src={src}
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
