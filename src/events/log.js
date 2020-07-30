// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.

const { Event } = require("klasa");

module.exports = class extends Event {

	run(data) {
		this.client.console.log(data);
	}

	init() {
		if (!this.client.options.consoleEvents.log) this.disable();
	}

};
