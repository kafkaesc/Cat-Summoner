interface ButtonProps {
	className?: string;
	disabled?: boolean;
	[props: string]: any;
}

export default function Button({ className, disabled, ...props }: ButtonProps) {
	return disabled ? (
		className ? (
			<button
				{...props}
				className="px-4 py-2 border cursor-not-allowed"
				disabled={true}
			></button>
		) : (
			<button
				{...props}
				className="px-4 py-2 border cursor-not-allowed"
				disabled={true}
			></button>
		)
	) : className ? (
		<button {...props} className="px-4 py-2 border"></button>
	) : (
		<button {...props} className="px-4 py-2 border"></button>
	);
}
