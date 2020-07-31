// Copyright 2017-2019 dirigeants - MIT License

const { Event } = require('klasa');

module.exports = class extends Event {

	run(warning) {
		this.client.console.warn(warning);
	}

	init() {
		if (!this.client.options.consoleEvents.warn) this.disable();
	}

};
