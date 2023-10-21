import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				green: {
					100: "#50B2C0",
					200: "#255D6A",
					300: "#0A313C",
				},

				purple: {
					100: "#8381D9",
					200: "#2A2879",
				},

				gray: {
					100: "#F8F9FC",
					200: "#E6E8F2",
					300: "#D1D6E4",
					400: "#8D95AF",
					500: "#303F73",
					600: "#252D4A",
					700: "#181C2A",
					800: "#0E1116",
				},

				"gradient-vertical": "linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)",
				"gradient-horizontal": "linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)",
			},
			lineHeight: {
				shorter: "125%",
				short: "140%",
				base: "160%",
				tall: "180%",
			},
			boxShadow: {
				card: "0 0 0 2px #303F73",
			}
		},
	},
	plugins: [require("daisyui")],
};
export default config;
