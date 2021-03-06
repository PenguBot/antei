// Copyright 2017-2019 dirigeants - MIT License

const { Argument, Duration } = require("@pengubot/antei");

module.exports = class extends Argument {

	run(arg, possible, message) {
		const date = new Duration(arg).fromNow;
		if (!isNaN(date.getTime()) && date.getTime() > Date.now()) return date;
		throw message.language.get("RESOLVER_INVALID_DURATION", possible.name);
	}

};
