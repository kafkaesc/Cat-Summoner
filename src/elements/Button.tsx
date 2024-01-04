interface ButtonProps {
	buttonStyle?:
		| 'danger'
		| 'default'
		| 'primary'
		| 'secondary'
		| 'text'
		| 'warning';
	children: string;
	className?: string;
	disabled?: boolean;
	[props: string]: any;
}

interface ButtonStyleProps {
	children: string;
	className?: string;
	disabled?: boolean;
	[props: string]: any;
}

const DangerButton = ({
	children,
	className,
	disabled,
	...props
}: ButtonStyleProps): JSX.Element => {
	return className ? (
		<button
			{...props}
			className={`px-4 py-2 border-2 border-cs-danger text-cs-white bg-cs-danger enabled:hover:border-cs-black enabled:hover:bg-cs-danger-light disabled:cursor-not-allowed ${className}`}
			disabled={!!disabled}
		>
			{children}
		</button>
	) : (
		<button
			{...props}
			className="px-4 py-2 border-2 border-cs-danger text-cs-white bg-cs-danger enabled:hover:border-cs-black enabled:hover:bg-cs-danger-light disabled:cursor-not-allowed"
			disabled={!!disabled}
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
}: ButtonStyleProps): JSX.Element => {
	return className ? (
		<button
			{...props}
			className={`px-4 py-2 border-2 border-gray text-cs-black bg-gray enabled:hover:border-cs-black enabled:hover:bg-gray-light disabled:cursor-not-allowed ${className}`}
			disabled={!!disabled}
		>
			{children}
		</button>
	) : (
		<button
			{...props}
			className="px-4 py-2 border-2 border-gray text-cs-black bg-gray enabled:hover:border-cs-black enabled:hover:bg-gray-light disabled:cursor-not-allowed"
			disabled={!!disabled}
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
}: ButtonStyleProps): JSX.Element => {
	return className ? (
		<button
			{...props}
			className={`px-4 py-2 border-2 border-cs-primary text-cs-white bg-cs-primary enabled:hover:border-cs-black enabled:hover:bg-cs-primary-light disabled:cursor-not-allowed ${className}`}
			disabled={!!disabled}
		>
			{children}
		</button>
	) : (
		<button
			{...props}
			className="px-4 py-2 border-2 border-cs-primary text-cs-white bg-cs-primary enabled:hover:border-cs-black enabled:hover:bg-cs-primary-light disabled:cursor-not-allowed"
			disabled={!!disabled}
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
}: ButtonStyleProps): JSX.Element => {
	return className ? (
		<button
			{...props}
			className={`px-4 py-2 border-2 border-cs-secondary text-cs-white bg-cs-secondary enabled:hover:border-cs-black enabled:hover:bg-cs-secondary-light disabled:cursor-not-allowed ${className}`}
			disabled={!!disabled}
		>
			{children}
		</button>
	) : (
		<button
			{...props}
			className="px-4 py-2 border-2 border-cs-secondary text-cs-white bg-cs-secondary enabled:hover:border-cs-black enabled:hover:bg-cs-secondary-light disabled:cursor-not-allowed"
			disabled={!!disabled}
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
}: ButtonStyleProps): JSX.Element => {
	return className ? (
		<button
			{...props}
			className={`text-link enabled:hover:text-link-hover enabled:hover:underline disabled:cursor-not-allowed ${className}`}
			disabled={!!disabled}
		>
			{children}
		</button>
	) : (
		<button
			{...props}
			className="text-link enabled:hover:text-link-hover enabled:hover:underline disabled:cursor-not-allowed"
			disabled={!!disabled}
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
}: ButtonStyleProps): JSX.Element => {
	return className ? (
		<button
			{...props}
			className={`px-4 py-2 border-2 border-cs-warning text-cs-black bg-cs-warning enabled:hover:border-cs-black enabled:hover:bg-cs-warning-light disabled:cursor-not-allowed ${className}`}
			disabled={!!disabled}
		>
			{children}
		</button>
	) : (
		<button
			{...props}
			className="px-4 py-2 border-2 border-cs-warning text-cs-black bg-cs-warning enabled:hover:border-cs-black enabled:hover:bg-cs-warning-light disabled:cursor-not-allowed"
			disabled={!!disabled}
		>
			{children}
		</button>
	);
};

/**
 * @param {string | undefined} buttonStyle Optional string indicating the
 * style of the button, options are 'danger', 'default', 'primary',
 * 'secondary', 'text', and 'warning'
 * @param {string} children The content for the button
 * @param {string | undefined} className Optional string, if it exists it
 * will be appended to the classes for the button element
 * @param {boolean | undefined} disabled Optional boolean, if true the input
 * field will be disabled, the default value value is false
 * @param {any} props Button element attributes that will be passed along
 * @returns {JSX.Element} Button element styled according to the site styles
 */
export default function Button({
	buttonStyle,
	children,
	className,
	disabled,
	...props
}: ButtonProps): JSX.Element {
	return buttonStyle === 'danger' ? (
		<DangerButton className={className} disabled={!!disabled} {...props}>
			{children}
		</DangerButton>
	) : buttonStyle === 'default' ? (
		<DefaultButton className={className} disabled={!!disabled} {...props}>
			{children}
		</DefaultButton>
	) : buttonStyle === 'primary' ? (
		<PrimaryButton className={className} disabled={!!disabled} {...props}>
			{children}
		</PrimaryButton>
	) : buttonStyle === 'secondary' ? (
		<SecondaryButton className={className} disabled={!!disabled} {...props}>
			{children}
		</SecondaryButton>
	) : buttonStyle === 'text' ? (
		<TextButton className={className} disabled={!!disabled} {...props}>
			{children}
		</TextButton>
	) : buttonStyle === 'warning' ? (
		<WarningButton className={className} disabled={!!disabled} {...props}>
			{children}
		</WarningButton>
	) : (
		<DefaultButton className={className} disabled={!!disabled} {...props}>
			{children}
		</DefaultButton>
	);
}
