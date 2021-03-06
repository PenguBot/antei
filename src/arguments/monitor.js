// Copyright 2017-2019 dirigeants - MIT License

const { Argument } = require("@pengubot/antei");

module.exports = class extends Argument {

	run(arg, possible, message) {
		const monitor = this.client.monitors.get(arg);
		if (monitor) return monitor;
		throw message.language.get("RESOLVER_INVALID_PIECE", possible.name, "monitor");
	}

};
