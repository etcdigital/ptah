const { nodeResolve } = require("@rollup/plugin-node-resolve");
const typescript = require("rollup-plugin-typescript2");

module.exports.plugins => [
	nodeResolve(),
	typescript({
		useTsconfigDeclarationDir: true,
		tsconfigDefaults: defaults,
		tsconfig: "tsconfig.json",
	}),
];
