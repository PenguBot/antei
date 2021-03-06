// Copyright 2017-2019 dirigeants - MIT License

const { Event } = require("@pengubot/antei");

module.exports = class extends Event {

	run(warning) {
		if (this.client.ready) this.client.console.debug(warning);
	}

	init() {
		if (!this.client.options.consoleEvents.debug) this.disable();
	}

};
