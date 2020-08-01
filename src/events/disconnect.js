// Copyright 2017-2019 dirigeants - MIT License

const { Event } = require("@pengubot/antei");

module.exports = class extends Event {

	run(err) {
		this.client.emit("error", `Disconnected | ${err.code}: ${err.reason}`);
	}

};
