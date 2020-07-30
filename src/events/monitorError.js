// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.

const { Event } = require("klasa");

module.exports = class extends Event {

	run(message, monitor, error) {
		this.client.emit("wtf", `[MONITOR] ${monitor.path}\n${error ?
			error.stack ? error.stack : error : "Unknown error"}`);
	}

};
