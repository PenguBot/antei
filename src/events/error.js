// Copyright 2017-2019 dirigeants - MIT License

const { Event } = require('klasa');

module.exports = class extends Event {

	run(err) {
		this.client.console.error(err);
	}

	init() {
		if (!this.client.options.consoleEvents.error) this.disable();
	}

};
