// Copyright 2017-2019 dirigeants - MIT License

const { Inhibitor } = require("@pengubot/antei");

module.exports = class extends Inhibitor {

	run(message, command) {
		return command.hidden && message.command !== command && !this.client.owners.has(message.author);
	}

};
