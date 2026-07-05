import { ComponentPropsWithoutRef } from 'react';

type AProps = ComponentPropsWithoutRef<'a'>;

const baseStyle = 'text-link hover:text-link-hover hover:underline';

/**
 * A styled anchor element that accepts all native attributes. When the link
 * opens a new tab it includes a screen-reader-only note announcing that.
 */
export default function A({ children, className, ...props }: AProps) {
	return (
		<a
			{...props}
			className={className ? `${baseStyle} ${className}` : baseStyle}
		>
			{children}
			{props.target === '_blank' && (
				<span className="sr-only"> (opens a new tab)</span>
			)}
		</a>
	);
}
