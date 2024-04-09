import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				main: {
					100: '#F0ECF5',
					200: '#E0DAEB',
					300: '#B5AEC3',
					400: '#7B7587',
					500: '#312E38',
					600: '#252130',
					700: '#1B1728',
					800: '#120E20',
					900: '#0C081A',
				},
				accent: {
					100: '#F4E0F8',
					200: '#E8C3F2',
					300: '#C89AD9',
					400: '#9E73B4',
					500: '#6A4483',
					600: '#533170',
					700: '#3F225E',
					800: '#2C154B',
					900: '#1F0D3E',
				},
			},
			dropShadow: {
				glowaccent: ['0 1px 1px rgba(106, 68, 131, 1)', '0 1px 1px rgba(106, 68, 131, 1)'],
			},
		},
	},
	plugins: [],
};
export default config;
