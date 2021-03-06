// Copyright 2017-2019 dirigeants - MIT License

const { Argument } = require("@pengubot/antei");

module.exports = class extends Argument {

	run(arg, possible, message) {
		const literal = possible.name.toLowerCase();
		if (typeof arg === "undefined" || arg.toLowerCase() !== literal) message.args.splice(message.params.length, 0, undefined);
		return literal;
	}

};
