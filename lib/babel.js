/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path");

const config = {
	presets: [
		[
			"@babel/preset-env",
			// Webpack takes care of modules, so we don't have to.
			{ target: { node: "current" }, modules: false },
			"@babel/typescript",
			"@babel/react",
			["@babel/env", { bugfixes: true, loose: true }],
		],
	],
	plugins: [
		"@babel/plugin-proposal-nullish-coalescing-operator",
		"@babel/plugin-proposal-optional-chaining",
		"@babel/plugin-proposal-class-properties",
		"babel-plugin-dynamic-import-node",
		["inline-json-import", {}],

		// The following two plugins use Object.assign directly, instead of Babel's
		// extends helper. Note that this assumes `Object.assign` is available.
		["@babel/plugin-proposal-object-rest-spread", { useBuiltIns: true }],

		[
			// Async functions are converted to generators by babel-preset-env (which
			// is based on babel-preset-latest)
			"@babel/plugin-transform-regenerator",
			{ async: false },
		],

		[
			// `foo${bar}`; => "foo" + bar;
			"@babel/plugin-transform-template-literals",
			{ loose: true },
		],

		// This is so we don't need to add `babel-polyfill` to our webpack `entry`.
		// Unlike `babel-polyfill`, `babel-runtime` + the transform do not pollute
		// the global namespace. Yay.
		// @see https://medium.com/@jcse/clearing-up-the-babel-6-ecosystem-c7678a314bf3#.7j10g8yn0
		[
			// Resolve the Babel runtime relative to the config.
			"@babel/plugin-transform-runtime",
			{
				helpers: false,
				polyfill: false,
				regenerator: true,
				moduleName: path.dirname("babel-runtime/package"),
			},
		],
	],
	exclude: "node_modules/**",
	extensions: [".ts", ".tsx"],
	runtimeHelpers: true,
};

if (process.env.NODE_ENV === "test" || process.env.BABEL_ENV === "test") {
	config.plugins.push.apply(config.plugins, [
		// We always include this plugin regardless of environment
		// because of a Babel bug that breaks object rest/spread without it:
		// https://github.com/babel/babel/issues/4851
		"@babel/plugin-transform-parameters",

		// Jest needs this to work properly with import/export syntax
		["@babel/plugin-transform-modules-commonjs", { loose: true }],
	]);
}

module.exports = config;
