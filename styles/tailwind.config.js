const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: ["_site/**/*.html"],
	safelist: [],
	theme: {
		fontFamily: {
			sans: ["Inter", ...defaultTheme.fontFamily.sans]
		}
	},
	plugins: [],
}