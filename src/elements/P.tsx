import { ComponentPropsWithoutRef } from 'react';

type PProps = ComponentPropsWithoutRef<'p'>;

/** A styled paragraph element that accepts all native attributes */
export default function P({ children, className, ...props }: PProps) {
	return className ? (
		<p {...props} className={`mb-2 ${className}`}>
			{children}
		</p>
	) : (
		<p {...props} className="mb-2">
			{children}
		</p>
	);
}
