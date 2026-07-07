import {
	MouseEvent,
	ReactNode,
	SyntheticEvent,
	useEffect,
	useId,
	useRef,
} from 'react';

import Button from '@/elements/Button';

interface ModalProps {
	children: ReactNode;
	onClose: () => void;
	title: string;
}

/**
 * @param {ReactNode} children The content of the modal
 * @param {() => void} onClose Called when the user closes the modal via the
 * Close button, the Escape key, or a click on the backdrop
 * @param {string} title Heading displayed at the top of the modal and used
 * as its accessible name
 * @returns {JSX.Element} A modal dialog built on the native dialog element,
 * opened with showModal() so the browser provides top-layer rendering,
 * focus containment, and the ::backdrop overlay. Mount it to open it; it
 * stays open until unmounted.
 */
export default function Modal({ children, onClose, title }: ModalProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const titleId = useId();

	useEffect(() => {
		dialogRef.current?.showModal();
	}, []);

	function handleBackdropMouseDown(e: MouseEvent<HTMLDialogElement>) {
		// The browser reports clicks on the ::backdrop as targeting the dialog
		// element itself, so a click inside the panel can never match this
		if (e.target === dialogRef.current) {
			onClose();
		}
	}

	function handleCancel(e: SyntheticEvent<HTMLDialogElement>) {
		// Escape pressed: let the parent unmount the dialog instead of the
		// browser closing it, so mount state stays the single source of truth
		e.preventDefault();
		onClose();
	}

	return (
		<dialog // NOSONAR - this is a pointer-exclusive convention, keyboard users have esc
			ref={dialogRef}
			aria-labelledby={titleId}
			className="w-fit max-w-3xl p-0 bg-white border rounded-lg shadow-lg backdrop:bg-black/50"
			onCancel={handleCancel}
			onMouseDown={handleBackdropMouseDown}
		>
			<div className="flex flex-col w-full">
				<div className="flex items-start justify-between p-1">
					<h2 id={titleId} className="text-2xl font-bold">
						{title}
					</h2>
				</div>
				<div className="relative flex-auto px-1">{children}</div>
				<div className="flex items-center justify-center p-1">
					<Button onClick={onClose} type="button">
						Close
					</Button>
				</div>
			</div>
		</dialog>
	);
}
