// Copyright 2017-2019 dirigeants - MIT License

const { Event } = require("@pengubot/antei");

module.exports = class extends Event {

	run(log) {
		this.client.console.verbose(log);
	}

	init() {
		if (!this.client.options.consoleEvents.verbose) this.disable();
	}

};
