// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.

const { Event } = require("klasa");

module.exports = class extends Event {

	constructor(...args) {
		super(...args, { event: "messageDeleteBulk" });
	}

	run(messages) {
		for (const message of messages.values()) {
			if (message.command && message.command.deletable) {
				for (const msg of message.responses) {
					msg.delete();
				}
			}
		}
	}

};
