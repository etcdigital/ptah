#!/usr/bin/env node
const { terser } = require("rollup-plugin-terser");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const typescript = require("rollup-plugin-typescript2");
const { babel } = require("@rollup/plugin-babel");
const svgr = require("@svgr/rollup").default;
const url = require("@rollup/plugin-url");
const babelConfig = require("../lib/babel");
const typescriptConfig = require("../lib/typescript");
const { getConfig } = require("../lib/required");

module.exports.getConfiguration = () => {
	const config = getConfig();
	return {
		input: config.source,
		output: [
			{
				format: "esm",
				file: config.module,
				sourcemap: false,
				plugins: [terser()],
				exports: "named",
			},
			{
				format: "cjs",
				file: config.main,
				sourcemap: false,
				plugins: [terser()],
				exports: "named",
			},
		],
		external: [
			...require("module").builtinModules,
			...Object.keys(config.dependencies || {}),
			...Object.keys(config.devDependencies || {}),
			...Object.keys(config.peerDependencies || {}),
			"react",
		],
		plugins: [
			nodeResolve(),
			typescript(typescriptConfig),
			url(),
			svgr(),
			babel(babelConfig),
		],
	};
};
