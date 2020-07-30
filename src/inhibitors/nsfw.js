// Copyright (c) 2017-2019 dirigeants - MIT License

const { Inhibitor } = require("klasa");

module.exports = class extends Inhibitor {

	run(message, command) {
		if (command.nsfw && !message.channel.nsfw) throw message.language.get("INHIBITOR_NSFW");
	}

};
