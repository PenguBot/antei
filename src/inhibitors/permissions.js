// Copyright 2017-2019 dirigeants - MIT License

const { Inhibitor } = require("@pengubot/antei");

module.exports = class extends Inhibitor {

	async run(message, command) {
		const { broke, permission } = await this.client.permissionLevels.run(message, command.permissionLevel);
		if (!permission) throw broke ? message.language.get("INHIBITOR_PERMISSIONS") : true;
	}

};
