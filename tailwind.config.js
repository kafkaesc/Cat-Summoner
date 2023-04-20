/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors: {
			black: '#000',
			'cs-black': '#222',
			'cs-primary': '#38678f',
			'cs-primary-dark': '#2a4d6a',
			'cs-primary-light': '#4681b4',
			'cs-secondary': '#53a135',
			'cs-secondary-dark': '#3f7b28',
			'cs-secondary-light': '#5db43b',
			'cs-white': '#fdfdfd',
			link: '#00f',
			'link-hover': '#00c',
			red: '#f00',
			white: '#fff',
		},
		extend: {},
	},
	plugins: [],
};
