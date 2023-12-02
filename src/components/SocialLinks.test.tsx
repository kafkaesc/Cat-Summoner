import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SocialLinks from './SocialLinks';

it('Has the social links', () => {
	render(<SocialLinks />);
	const githubLink = screen.getByRole('link', { name: /github logo/i });
	const twitterLink = screen.getByRole('link', { name: /twitter logo/i });
	const instagramLink = screen.getByRole('link', { name: /instagram logo/i });
	const linkedInLink = screen.getByRole('link', { name: /linkedin logo/i });
	expect(githubLink).toBeInTheDocument();
	expect(twitterLink).toBeInTheDocument();
	expect(instagramLink).toBeInTheDocument();
	expect(linkedInLink).toBeInTheDocument();
});

it('Opens links in a new tab', () => {
	render(<SocialLinks />);
	const githubLink = screen.getByRole('link', { name: /github logo/i });
	const twitterLink = screen.getByRole('link', { name: /twitter logo/i });
	const instagramLink = screen.getByRole('link', { name: /instagram logo/i });
	const linkedInLink = screen.getByRole('link', { name: /linkedin logo/i });
	expect(githubLink).toBeInTheDocument();
	expect(githubLink).toHaveAttribute('target', '_blank');
	expect(twitterLink).toBeInTheDocument();
	expect(twitterLink).toHaveAttribute('target', '_blank');
	expect(instagramLink).toBeInTheDocument();
	expect(instagramLink).toHaveAttribute('target', '_blank');
	expect(linkedInLink).toBeInTheDocument();
	expect(linkedInLink).toHaveAttribute('target', '_blank');
});

it('Opens the correct URLs', () => {
	render(<SocialLinks />);
	const githubLink = screen.getByRole('link', { name: /github logo/i });
	const twitterLink = screen.getByRole('link', { name: /twitter logo/i });
	const instagramLink = screen.getByRole('link', { name: /instagram logo/i });
	const linkedInLink = screen.getByRole('link', { name: /linkedin logo/i });
	expect(githubLink).toBeInTheDocument();
	expect(githubLink).toHaveAttribute('href', 'https://github.com/kafkaesc');
	expect(twitterLink).toBeInTheDocument();
	expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/_kafkaesc');
	expect(instagramLink).toBeInTheDocument();
	expect(instagramLink).toHaveAttribute(
		'href',
		'https://instagram.com/kafkaesc'
	);
	expect(linkedInLink).toBeInTheDocument();
	expect(linkedInLink).toHaveAttribute(
		'href',
		'https://linkedin.com/in/jahettinger'
	);
});
