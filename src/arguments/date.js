// Copyright 2017-2019 dirigeants - MIT License

const { Argument } = require("@pengubot/antei");

module.exports = class extends Argument {

	run(arg, possible, message) {
		const date = new Date(arg);
		if (!isNaN(date.getTime()) && date.getTime() > Date.now()) return date;
		throw message.language.get("RESOLVER_INVALID_DATE", possible.name);
	}

};
