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
				lightBlue: "#D7E6F5",
				darkerBlue: "#4D6BC6",
				grayBlue: "#2F466C",
				toastedYellow: "#FDEBD2",
				transparentBlack: "#5c5c5c80",
			},
			colors: {
				muted: "rgb(89, 89, 89)",
				grayBlue: "#2F466C",
			},
			letterSpacing: {
				regular: "1px",
			},
			padding: {
				headerPad: "18rem",
			},
			width: {
				pageContent: "69.5vw",
			},
			height: {
				searchBar: "2.7rem",
			},
			margin: {
				pageContent: "0 auto",
			},
			screens: {
				"max-lg": {
					max: "1023px",
				},
			},
			fill: {
				lightBlue: "#D7E6F5",
			},
		},
	},
	plugins: [],
};
