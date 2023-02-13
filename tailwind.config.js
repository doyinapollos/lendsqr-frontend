/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				avenirNextBold: "'AvenirNextBold', serif",
				avenirNextLight: "'AvenirNextLight', serif",
				avenirNextRegular: "'AvenirNextRegular', serif",
			},
			spacing: {
				is01px: "1px",
				529: "529px",
			},
			colors: {
				"lendsqr-red": "#ED2025",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
