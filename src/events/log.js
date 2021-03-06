// Copyright 2017-2019 dirigeants - MIT License

const { Event } = require("@pengubot/antei");

module.exports = class extends Event {

	run(data) {
		this.client.console.log(data);
	}

	init() {
		if (!this.client.options.consoleEvents.log) this.disable();
	}

};
