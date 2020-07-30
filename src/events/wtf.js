// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.

const { Event } = require('klasa');

module.exports = class extends Event {

	run(failure) {
		this.client.console.wtf(failure);
	}

	init() {
		if (!this.client.options.consoleEvents.wtf) this.disable();
	}

};
