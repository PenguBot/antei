// Copyright 2017-2019 dirigeants - MIT License

const { Inhibitor } = require("@pengubot/antei");

module.exports = class extends Inhibitor {

	run(message, command) {
		if (command.nsfw && !message.channel.nsfw) throw message.language.get("INHIBITOR_NSFW");
	}

};
