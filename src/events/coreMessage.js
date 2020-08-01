// Copyright 2017-2019 dirigeants - MIT License

const { Event } = require("@pengubot/antei");

module.exports = class extends Event {

	constructor(...args) {
		super(...args, { event: "message" });
	}

	run(message) {
		if (this.client.ready) this.client.monitors.run(message);
	}

};
