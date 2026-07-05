import { ComponentPropsWithoutRef } from 'react';

type ButtonStyle =
	| 'danger'
	| 'default'
	| 'primary'
	| 'secondary'
	| 'text'
	| 'warning';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	buttonStyle?: ButtonStyle;
}

// Shared by every variant except `text`, which is a borderless link-style button
const baseStyle = 'px-4 py-2 border-2 disabled:cursor-not-allowed';

const buttonStyles: Record<ButtonStyle, string> = {
	danger: `${baseStyle} border-cs-danger text-cs-white bg-cs-danger enabled:hover:border-cs-black enabled:hover:bg-cs-danger-dark enabled:focus-visible:border-cs-black enabled:focus-visible:bg-cs-danger-dark`,
	default: `${baseStyle} border-gray text-cs-black bg-gray enabled:hover:border-cs-black enabled:hover:bg-gray-dark enabled:focus-visible:border-cs-black enabled:focus-visible:bg-gray-dark`,
	primary: `${baseStyle} border-cs-primary text-cs-white bg-cs-primary enabled:hover:border-cs-black enabled:hover:bg-cs-primary-dark enabled:focus-visible:border-cs-black enabled:focus-visible:bg-cs-primary-dark`,
	secondary: `${baseStyle} border-cs-secondary text-cs-white bg-cs-secondary enabled:hover:border-cs-black enabled:hover:bg-cs-secondary-dark enabled:focus-visible:border-cs-black enabled:focus-visible:bg-cs-secondary-dark`,
	text: 'text-link enabled:hover:text-link-hover enabled:hover:underline enabled:focus-visible:text-link-hover enabled:focus-visible:underline disabled:cursor-not-allowed',
	warning: `${baseStyle} border-cs-warning text-cs-black bg-cs-warning enabled:hover:border-cs-black enabled:hover:bg-cs-warning-dark enabled:focus-visible:border-cs-black enabled:focus-visible:bg-cs-warning-dark`,
};

/** A styled button element that accepts all native attributes */
export default function Button({
	buttonStyle = 'default',
	children,
	className,
	...props
}: ButtonProps) {
	const styles = buttonStyles[buttonStyle] ?? buttonStyles.default;
	return (
		<button {...props} className={className ? `${styles} ${className}` : styles}>
			{children}
		</button>
	);
}
