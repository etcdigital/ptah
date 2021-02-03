const { terser } = require("rollup-plugin-terser");

module.exports.ESM = (file, min = true) => ({
	format: "esm",
	file,
	sourcemap: false,
	plugins: min ? [terser()] : [],
	exports: "named",
});

module.exports.CJS = (file, min = true) => ({
	format: "cjs",
	file,
	sourcemap: false,
	plugins: min ? [terser()] : [],
	exports: "named",
});

module.exports.UMD = (file, name, min = true) => ({
	name: name,
	format: "umd",
	file,
	sourcemap: false,
	plugins: min ? [terser()] : [],
	exports: "named",
});
