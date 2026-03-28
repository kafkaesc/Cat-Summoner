import { ComponentPropsWithoutRef } from 'react';

type AProps = ComponentPropsWithoutRef<'a'>;

/** A styled anchor element that accepts all native attributes */
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
