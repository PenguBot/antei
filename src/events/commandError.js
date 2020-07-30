// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.

const { Event } = require("klasa");

module.exports = class extends Event {

	run(message, command, params, error) {
		if (error instanceof Error) this.client.emit("wtf", `[COMMAND] ${command.path}\n${error.stack || error}`);
		if (error.message) message.sendCode("JSON", error.message).catch(err => this.client.emit("wtf", err));
		else message.sendMessage(error).catch(err => this.client.emit("wtf", err));
	}

};
