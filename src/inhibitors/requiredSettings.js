// Copyright 2017-2019 dirigeants - MIT License

const { Inhibitor } = require("@pengubot/antei");

module.exports = class extends Inhibitor {

	run(message, command) {
		if (!command.requiredSettings.length || message.channel.type !== "text") return;
		// eslint-disable-next-line eqeqeq
		const requiredSettings = command.requiredSettings.filter(setting => message.guild.settings.get(setting) === null);
		if (requiredSettings.length) throw message.language.get("INHIBITOR_REQUIRED_SETTINGS", requiredSettings);
	}

};
