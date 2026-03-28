import { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	buttonStyle?:
		| 'danger'
		| 'default'
		| 'primary'
		| 'secondary'
		| 'text'
		| 'warning';
}

type ButtonStyleProps = ComponentPropsWithoutRef<'button'>;

const DangerButton = ({
	children,
	className,
	disabled,
	...props
}: ButtonStyleProps) => {
	return className ? (
		<button
			{...props}
			className={`px-4 py-2 border-2 border-cs-danger text-cs-white bg-cs-danger enabled:hover:border-cs-black enabled:hover:bg-cs-danger-light disabled:cursor-not-allowed ${className}`}
			disabled={disabled}
		>
			{children}
		</button>
	) : (
		<button
			{...props}
			className="px-4 py-2 border-2 border-cs-danger text-cs-white bg-cs-danger enabled:hover:border-cs-black enabled:hover:bg-cs-danger-light disabled:cursor-not-allowed"
			disabled={disabled}
		>
			{children}
		</button>
	);
};

const DefaultButton = ({
	children,
	className,
	disabled,
	...props
}: ButtonStyleProps) => {
	return className ? (
		<button
			{...props}
			className={`px-4 py-2 border-2 border-gray text-cs-black bg-gray enabled:hover:border-cs-black enabled:hover:bg-gray-light disabled:cursor-not-allowed ${className}`}
			disabled={disabled}
		>
			{children}
		</button>
	) : (
		<button
			{...props}
			className="px-4 py-2 border-2 border-gray text-cs-black bg-gray enabled:hover:border-cs-black enabled:hover:bg-gray-light disabled:cursor-not-allowed"
			disabled={disabled}
		>
			{children}
		</button>
	);
};

const PrimaryButton = ({
	children,
	className,
	disabled,
	...props
}: ButtonStyleProps) => {
	return className ? (
		<button
			{...props}
			className={`px-4 py-2 border-2 border-cs-primary text-cs-white bg-cs-primary enabled:hover:border-cs-black enabled:hover:bg-cs-primary-light disabled:cursor-not-allowed ${className}`}
			disabled={disabled}
		>
			{children}
		</button>
	) : (
		<button
			{...props}
			className="px-4 py-2 border-2 border-cs-primary text-cs-white bg-cs-primary enabled:hover:border-cs-black enabled:hover:bg-cs-primary-light disabled:cursor-not-allowed"
			disabled={disabled}
		>
			{children}
		</button>
	);
};

const SecondaryButton = ({
	children,
	className,
	disabled,
	...props
}: ButtonStyleProps) => {
	return className ? (
		<button
			{...props}
			className={`px-4 py-2 border-2 border-cs-secondary text-cs-white bg-cs-secondary enabled:hover:border-cs-black enabled:hover:bg-cs-secondary-light disabled:cursor-not-allowed ${className}`}
			disabled={disabled}
		>
			{children}
		</button>
	) : (
		<button
			{...props}
			className="px-4 py-2 border-2 border-cs-secondary text-cs-white bg-cs-secondary enabled:hover:border-cs-black enabled:hover:bg-cs-secondary-light disabled:cursor-not-allowed"
			disabled={disabled}
		>
			{children}
		</button>
	);
};

const TextButton = ({
	children,
	className,
	disabled,
	...props
}: ButtonStyleProps) => {
	return className ? (
		<button
			{...props}
			className={`text-link enabled:hover:text-link-hover enabled:hover:underline disabled:cursor-not-allowed ${className}`}
			disabled={disabled}
		>
			{children}
		</button>
	) : (
		<button
			{...props}
			className="text-link enabled:hover:text-link-hover enabled:hover:underline disabled:cursor-not-allowed"
			disabled={disabled}
		>
			{children}
		</button>
	);
};

const WarningButton = ({
	children,
	className,
	disabled,
	...props
}: ButtonStyleProps) => {
	return className ? (
		<button
			{...props}
			className={`px-4 py-2 border-2 border-cs-warning text-cs-black bg-cs-warning enabled:hover:border-cs-black enabled:hover:bg-cs-warning-light disabled:cursor-not-allowed ${className}`}
			disabled={disabled}
		>
			{children}
		</button>
	) : (
		<button
			{...props}
			className="px-4 py-2 border-2 border-cs-warning text-cs-black bg-cs-warning enabled:hover:border-cs-black enabled:hover:bg-cs-warning-light disabled:cursor-not-allowed"
			disabled={disabled}
		>
			{children}
		</button>
	);
};

/** A styled button element that accepts all native attributes */
export default function Button({
	buttonStyle,
	children,
	className,
	disabled,
	...props
}: ButtonProps) {
	return buttonStyle === 'danger' ? (
		<DangerButton className={className} disabled={disabled} {...props}>
			{children}
		</DangerButton>
	) : buttonStyle === 'default' ? (
		<DefaultButton className={className} disabled={disabled} {...props}>
			{children}
		</DefaultButton>
	) : buttonStyle === 'primary' ? (
		<PrimaryButton className={className} disabled={disabled} {...props}>
			{children}
		</PrimaryButton>
	) : buttonStyle === 'secondary' ? (
		<SecondaryButton className={className} disabled={disabled} {...props}>
			{children}
		</SecondaryButton>
	) : buttonStyle === 'text' ? (
		<TextButton className={className} disabled={disabled} {...props}>
			{children}
		</TextButton>
	) : buttonStyle === 'warning' ? (
		<WarningButton className={className} disabled={disabled} {...props}>
			{children}
		</WarningButton>
	) : (
		<DefaultButton className={className} disabled={disabled} {...props}>
			{children}
		</DefaultButton>
	);
}
