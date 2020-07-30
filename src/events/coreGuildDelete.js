// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.

const { Event } = require("klasa");

module.exports = class extends Event {

	constructor(...args) {
		super(...args, { event: "guildDelete" });
	}

	run(guild) {
		if (this.client.ready && guild.available && !this.client.options.settings.preserve) guild.settings.destroy().catch(() => null);
	}

};
