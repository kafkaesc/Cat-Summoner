import { ReactNode } from 'react';
import Link from '@/elements/Link';

interface ConditionalLinkProps {
	children: ReactNode;
	condition: boolean;
	link: string;
}

export default function ConditionalLink({
	children,
	condition,
	link,
}: ConditionalLinkProps) {
	return condition ? <Link href={link}>{children}</Link> : <>{children}</>;
}
