// Copyright 2017-2019 dirigeants - MIT License

const { Argument } = require("@pengubot/antei");

module.exports = class extends Argument {

	run(arg, possible, message) {
		for (const store of this.client.pieceStores.values()) {
			const piece = store.get(arg);
			if (piece) return piece;
		}
		throw message.language.get("RESOLVER_INVALID_PIECE", possible.name, "piece");
	}

};
