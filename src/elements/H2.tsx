import { ComponentPropsWithoutRef } from 'react';

type H2Props = ComponentPropsWithoutRef<'h2'>;

/** A styled heading element that accepts all native attributes */
export default function H2({ children, className, ...props }: H2Props) {
	return className ? (
		<h2 {...props} className={`mb-2 text-2xl font-bold ${className}`}>
			{children}
		</h2>
	) : (
		<h2 {...props} className="mb-2 text-2xl font-bold">
			{children}
		</h2>
	);
}
