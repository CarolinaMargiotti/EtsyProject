module.exports = {
	preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
	collectCoverageFrom: ["{src,tests}/*/.{ts,js,vue}"],
	testPathIgnorePatterns: ["./dist"],
	testTimeout: 15000,
	transform: {
		".+.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$":
			"jest-transform-stub",
	},
};
