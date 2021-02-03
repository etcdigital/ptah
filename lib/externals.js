module.exports.external = (dependencies, devDependencies, peerDependencies) => [
	...require("module").builtinModules,
	...Object.keys(dependencies || {}),
	...Object.keys(devDependencies || {}),
	...Object.keys(peerDependencies || {}),
	"react",
];
