// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.

const { Inhibitor } = require('klasa');

module.exports = class extends Inhibitor {

	run(message, command) {
		return command.hidden && message.command !== command && !this.client.owners.has(message.author);
	}

};
