// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.

const { Event } = require("klasa");

module.exports = class extends Event {

	run(warning) {
		if (this.client.ready) this.client.console.debug(warning);
	}

	init() {
		if (!this.client.options.consoleEvents.debug) this.disable();
	}

};
