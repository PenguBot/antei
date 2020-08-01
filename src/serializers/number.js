// Copyright 2017-2019 dirigeants - MIT License

const { Serializer } = require("@pengubot/antei");

module.exports = class extends Serializer {

	constructor(...args) {
		super(...args, { aliases: ["integer", "float"] });
	}

	deserialize(data, piece, language) {
		let number;
		switch (piece.type) {
			case "integer":
				number = parseInt(data, 10);
				if (Number.isInteger(number)) return number;
				throw language.get("RESOLVER_INVALID_INT", piece.key);
			case "number":
			case "float":
				number = parseFloat(data);
				if (!isNaN(number)) return number;
				throw language.get("RESOLVER_INVALID_FLOAT", piece.key);
		}
		// noop
		return null;
	}

};
