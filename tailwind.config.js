/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
	theme: {
		extend: {
			borderColor: {
				lightGray: "#e1e3df",
			},
			backgroundColor: {
				lightGray: "#e1e3df",
				lighterGray: "#F3F3F3",
				toastedYellow: "#FDEBD2",
			},
			letterSpacing: {
				regular: "1px",
			},
			padding: {
				headerPad: "18rem",
			},
		},
	},
	plugins: [],
};
