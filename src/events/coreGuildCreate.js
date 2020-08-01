// Copyright 2017-2019 dirigeants - MIT License

const { Event } = require("@pengubot/antei");

module.exports = class extends Event {

	constructor(...args) {
		super(...args, { event: "guildCreate" });
	}

	run(guild) {
		if (!guild.available) return;
		if (this.client.settings.guildBlacklist.includes(guild.id)) {
			guild.leave();
			this.client.emit("warn", `Blacklisted guild detected: ${guild.name} [${guild.id}]`);
		}
	}

};
