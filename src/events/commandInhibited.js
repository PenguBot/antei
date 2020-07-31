// Copyright 2017-2019 dirigeants - MIT License

const { Event } = require("klasa");

module.exports = class extends Event {

	run(message, command, response) {
		if (response && response.length) message.sendMessage(response);
	}

};
