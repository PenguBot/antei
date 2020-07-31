// Copyright 2017-2019 dirigeants - MIT License

const { Event } = require("klasa");

module.exports = class extends Event {

	run(message) {
		if (message.command && message.command.deletable) {
			for (const msg of message.responses) {
				msg.delete();
			}
		}
	}

};
