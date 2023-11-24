import Link from '@/elements/Link';

interface ConditionalLinkProps {
	children: any;
	condition: boolean;
	link: string;
}

export default function ConditionalLink({
	children,
	condition,
	link,
}: ConditionalLinkProps): JSX.Element {
	return condition ? <Link href={link}>{children}</Link> : <>{children}</>;
}
