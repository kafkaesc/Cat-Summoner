interface H1Props {
	children: any;
	className?: string;
	[props: string]: any;
}

/**
 * @param {any} children JSX element or HTML element going inside the
 * h1 element
 * @param {string | undefined} className Optional string, if it exists it
 * will be appended to the classes for the heading element
 * @param {any} props Heading element attributes that will be passed along
 * @returns {JSX.Element} Heading 1 element styled according to site styles
 */
export default function H1({
	children,
	className,
	...props
}: H1Props): JSX.Element {
	return className &&
		(className.includes('text-center') ||
			className.includes('text-left') ||
			className?.includes('text-right')) ? (
		<h1 {...props} className={`text-4xl font-bold ${className}`}>
			{children}
		</h1>
	) : className ? (
		<h1 {...props} className={`text-4xl font-bold text-center ${className}`}>
			{children}
		</h1>
	) : (
		<h1 {...props} className="text-4xl font-bold text-center">
			{children}
		</h1>
	);
}
