// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.

const { Event } = require("klasa");

module.exports = class extends Event {

	constructor(...args) {
		super(...args, { event: "message" });
	}

	run(message) {
		if (this.client.ready) this.client.monitors.run(message);
	}

};
