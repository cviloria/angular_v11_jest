const path = require("path");
const rootDir = path.join(__dirname);

module.exports = {
	moduleNameMapper: {
		"@core/(.*)": "<rootDir>/src/app/core/$1"
	},
	preset: "jest-preset-angular",
	setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
	transformIgnorePatterns: ["node_modules/(?!(jest-test|@ngrx))"],
	testPathIgnorePatterns: [
		"<rootDir>/node_modules/",
		"<rootDir>/dist/",
		"<rootDir>/cypress/"
	],
	collectCoverage: true,
	coverageDirectory: path.join(`${rootDir}`, "/coverage/"), //  Ruta donde quedará los reportes
	coverageReporters: ["html", "json", "lcov", "text", "clover"], // Tipos de reportes que se generan
	reporters: [
		"default",
		[
			"jest-junit",
			{ outputDirectory: "./coverage/", outputName: "junit.xml" }
		],
		[
			"jest-html-reporters",
			{ publicPath: "./coverage/", filename: "report-jest.html" }
		],
		"jest-sonar"
	] // Dependencias que usaremos para los reportes
};
