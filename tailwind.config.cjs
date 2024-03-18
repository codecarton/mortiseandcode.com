const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'salamander-100': '#F2F7F7',
				'salamander-200': '#ACBEBE',
				'salamander-300': '#7C8E8E',
				'salamander-400': '#5E7171',
				'salamander-500': '#2F3E3E',
				'salamander-600': '#213434',
				'salamander-700': '#152D2D',
				'salamander-800': '#0A1F1F',
				'salamander-900': '#041717',
				'goldbrush-100': '#FCF6E8',
				'goldbrush-200': '#F4DFB1',
				'goldbrush-300': '#EBCB87',
				'goldbrush-400': '#D7B162',
				'goldbrush-500': '#C09946',
				'goldbrush-600': '#9A762B',
				'goldbrush-700': '#7B5B18',
				'goldbrush-800': '#573E0B',
				'goldbrush-900': '#332404'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
