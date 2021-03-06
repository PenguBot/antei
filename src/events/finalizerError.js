// Copyright 2017-2019 dirigeants - MIT License

const { Event } = require("@pengubot/antei");

module.exports = class extends Event {

	run(message, command, response, timer, finalizer, error) {
		this.client.emit("wtf", `[FINALIZER] ${finalizer.path}\n${error ?
			error.stack ? error.stack : error : "Unknown error"}`);
	}

};
