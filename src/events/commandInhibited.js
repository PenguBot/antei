// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.

const { Event } = require("klasa");

module.exports = class extends Event {

	run(message, command, response) {
		if (response && response.length) message.sendMessage(response);
	}

};
