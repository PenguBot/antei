// Copyright 2017-2019 dirigeants - MIT License

const { Event } = require("@pengubot/antei");

module.exports = class extends Event {

	constructor(...args) {
		super(...args, { event: "messageDelete" });
	}

	run(message) {
		if (message.command && message.command.deletable) {
			for (const msg of message.responses) {
				msg.delete();
			}
		}
	}

};
