const fs = require("fs");
const path = require("path");

const cwarn = (message) => {
	console.log(message);
	process.exitCode = 1;
};

const configPath = path.resolve("package.json");
if (fs.existsSync(configPath)) {
	const userConfigModule = require(configPath);
	config = userConfigModule.default || userConfigModule;

	if (!config.name) {
		cwarn("Package.json should be a name");
	}
	if (!config.exports) {
		cwarn("Add exports session on package.json");
	}
	if (!config.main) {
		cwarn("Add main session on package.json");
	}
	if (!config.unpkg) {
		cwarn("Add unpkg session on package.json");
	}
	if (!config.module) {
		cwarn("Add module session on package.json");
	}
	if (!config.source) {
		cwarn("Add source session on package.json");
	}
}

const tsconfigPath = path.resolve("tsconfig.json");
if (!fs.existsSync(tsconfigPath)) {
	cwarn("Please, add tsconfig.json");
}
