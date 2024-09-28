import type {Config} from "tailwindcss"

const config: Config = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],

	theme: {
		extend: {
			colors: {
				"color-dark": "var(--color-dark)",
				"color-main": "var(--color-main)",
				foreground: "var(--foreground)",
			},
		},
	},
	plugins: [],
}
export default config
