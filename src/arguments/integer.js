// Copyright (c) 2017-2019 dirigeants - MIT License

const { Argument } = require("klasa");

module.exports = class extends Argument {

	constructor(...args) {
		super(...args, { aliases: ["int"] });
	}

	run(arg, possible, message) {
		const { min, max } = possible;
		const number = parseInt(arg, 10);
		if (!Number.isInteger(number)) throw message.language.get("RESOLVER_INVALID_INT", possible.name);
		return this.constructor.minOrMax(this.client, number, min, max, possible, message) ? number : null;
	}

};
