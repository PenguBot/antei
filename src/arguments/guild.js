// Copyright (c) 2017-2019 dirigeants - MIT License

const { Argument } = require("klasa");

module.exports = class extends Argument {

	run(arg, possible, message) {
		const guild = this.constructor.regex.snowflake.test(arg) ? this.client.guilds.get(arg) : null;
		if (guild) return guild;
		throw message.language.get("RESOLVER_INVALID_GUILD", possible.name);
	}

};
