import { useState } from 'react';
import Image from 'next/image';
import Button from '@/elements/Button';
import H2 from '@/elements/H2';
import P from '@/elements/P';

import { useCatImageDetails } from '@/hooks/useCatImageDetails';

interface CatbookPhotoModalProps {
	buttonText?: string;
	children?: any;
}

export default function CatbookPhotoModal({
	buttonText,
	children,
}: CatbookPhotoModalProps) {
	const [showModal, setShowModal] = useState<boolean>(false);
	const cid = useCatImageDetails();
	const img = cid.getImageDetails('lalo', 1);
	return (
		<>
			<Button onClick={() => setShowModal(true)} type="button">
				{buttonText ? buttonText : 'Cat Pic'}
			</Button>
			{showModal ? (
				<>
					<div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
						<div className="relative w-auto max-w-3xl mx-auto my-6">
							<div className="relative flex flex-col w-full bg-white border rounded-lg shadow-lg outline-none focus:outline-none">
								<div className="flex items-start justify-between p-1">
									<h2 className="text-2xl font-bold">General Info</h2>
									{/*<Button
										className="inline-block float-right"
										onClick={() => setShowModal(false)}
										type="button"
									>
										Close
									</Button>*/}
								</div>
								<div className="relative flex-auto px-1">
									{img && (
										<Image
											alt={img.alt}
											className="mx-auto md:m-0"
											height={500}
											width={500}
											src={img.src}
										/>
									)}
								</div>
								<div className="flex items-center justify-center p-1">
									<Button onClick={() => setShowModal(false)} type="button">
										Close
									</Button>
								</div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
}
