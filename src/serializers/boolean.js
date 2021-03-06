// Copyright 2017-2019 dirigeants - MIT License

const { Serializer } = require("@pengubot/antei");
const truths = ["1", "true", "+", "t", "yes", "y"];
const falses = ["0", "false", "-", "f", "no", "n"];

module.exports = class extends Serializer {

	constructor(...args) {
		super(...args, { aliases: ["bool"] });
	}

	deserialize(data, piece, language) {
		const boolean = String(data).toLowerCase();
		if (truths.includes(boolean)) return true;
		if (falses.includes(boolean)) return false;
		throw language.get("RESOLVER_INVALID_BOOL", piece.key);
	}

	stringify(value) {
		return value ? "Enabled" : "Disabled";
	}

};
