// Copyright 2017-2019 dirigeants - MIT License

const { Argument } = require("@pengubot/antei");

module.exports = class extends Argument {

	run(arg, possible, message) {
		const guild = this.constructor.regex.snowflake.test(arg) ? this.client.guilds.cache.get(arg) : null;
		if (guild) return guild;
		throw message.language.get("RESOLVER_INVALID_GUILD", possible.name);
	}

};
