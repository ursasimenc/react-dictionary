/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				gray_5: "#757575",
				purple: "#a445ed",
				white: "#ffffff",
				gray_3: "#2d2d2d",
				darkPurple: "#8f19e8",
				gray_7: "#e9e9e9",
				gray_4: "#3a3a3a",
				gray_1: "#050505",
				gray_2: "#1f1f1f",
				gray_9: "#f4f4f4",
				black: "#000000",
				red: "#ff5252",
				gray_6: "#cecece",
			},
			fontSize: {
				base: "0.875rem",
				lg: "1.125rem",
				xl: "1.25rem",
				"2xl": "1.5rem",
				"3xl": "4rem",
			},
			fontFamily: {
				Sans: "Inter",
				Serif: "Lora",
				Monospace: "Inconsolata",
			},
			borderRadius: {
				none: "0",
				xs: "0.625rem",
				sm: "1rem",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
