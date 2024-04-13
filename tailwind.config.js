/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./src/pages/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				"bounce-slow": "bounce 1.5s linear infinite",
				brush: "brush 5s 0s 1",
			},

			colors: {
				dark: "#0b0d17",
				lightblue: "#d0d6f9",
				white: "#ffffff",
				grayscale: "rgba(255, 255, 255, 0.04)",
				grayscale2: "rgba(255, 255, 255, 0.2);",
				grayscale3: "rgba(0, 0, 0, 0.7);",
			},
			keyframes: {
				shadow: {
					"0%": {
						boxShadow: "none",
					},
					"100%": {
						boxShadow: "0px 0px 0px 80px rgba(0, 0, 0, 0.5)",
					},
				},
			},
			boxShadow: {
				"3xl": "0px 0px 0px 100px rgba(186, 186, 206, 0.15)",
			},
			width: {
				111: "27.75rem",
				207: "51.875rem",
				calc: "calc(100% - 1100px)",
				"600p": "600%",
			},
			height: {
				"100p": "100%",
			},
			backgroundImage: {
				firma: "url('./assets/firma/background.jpg')",
			},
			fontFamily: {
				barlow: ['"Barlow Condensed"', "sans-serif"],
				belle: ['"Bellefair"', "sans-serif"],
			},
			fontSize: {
				"10xl": "9.375rem",
				"2.5xl": "1.75rem",
			},
		},

		plugins: [],
	},
};
