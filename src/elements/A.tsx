interface AProps {
	children: any;
	className?: string;
	[props: string]: any;
}

/**
 * @param {any} children JSX element or HTML element going inside the
 * anchor element
 * @param {string | undefined} className Optional string, if it exists it
 * will be appended to the classes for the anchor element
 * @param {any} props Anchor element attributes that will be passed along
 * @returns {JSX.Element} Anchor element styled according to site styles
 */
export default function A({ children, className, ...props }: AProps) {
	return className ? (
		<a
			{...props}
			className={`text-link hover:text-link-hover hover:underline ${className}`}
		>
			{children}
		</a>
	) : (
		<a {...props} className="text-link hover:text-link-hover hover:underline">
			{children}
		</a>
	);
}
