interface H3Props {
	children: any;
	className?: string;
	[props: string]: any;
}

/**
 * @param {any} children JSX element or HTML element going inside the
 * h3 element
 * @param {string|undefined} className Optional string, if it exists it
 * will be appended to the classes for the heading element
 * @param {any} props Heading element attributes that will be passed along
 * @returns {JSX.Element} Heading 3 element styled according to site styles
 */
export default function H3({ children, className, ...props }: H3Props) {
	return className ? (
		<h3 {...props} className={`mb-2 text-xl font-bold ${className}`}>
			{children}
		</h3>
	) : (
		<h3 {...props} className="mb-2 text-xl font-bold">
			{children}
		</h3>
	);
}
