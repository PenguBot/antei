// Copyright 2017-2019 dirigeants - MIT License

const { Argument } = require("@pengubot/antei");

module.exports = class extends Argument {

	run(arg, possible, message) {
		const event = this.client.events.get(arg);
		if (event) return event;
		throw message.language.get("RESOLVER_INVALID_PIECE", possible.name, "event");
	}

};
