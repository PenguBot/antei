// Copyright 2017-2019 dirigeants - MIT License

const { Argument } = require("@pengubot/antei");

module.exports = class extends Argument {

	constructor(...args) {
		super(...args, { aliases: ["msg"] });
	}

	async run(arg, possible, message) {
		const msg = this.constructor.regex.snowflake.test(arg) ? await message.channel.messages.fetch(arg).catch(() => null) : undefined;
		if (msg) return msg;
		throw message.language.get("RESOLVER_INVALID_MESSAGE", possible.name);
	}

};
