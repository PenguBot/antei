// Copyright 2017-2019 dirigeants - MIT License

const { Argument } = require("@pengubot/antei");

module.exports = class extends Argument {

	constructor(...args) {
		super(...args, { aliases: ["reg", "regex"] });
	}

	run(arg, possible, message) {
		const results = possible.regex.exec(arg);
		if (results !== null) return results;
		throw message.language.get("RESOLVER_INVALID_REGEX_MATCH", possible.name, possible.regex.toString());
	}

};
