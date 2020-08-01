// Copyright 2017-2019 dirigeants - MIT License

const Argument = require("./Argument");
const AliasStore = require("./base/AliasStore");

/**
 * Stores all the arguments usable in Antei
 * @extends AliasStore
 */
class ArgumentStore extends AliasStore {

	/**
	 * Constructs our ArgumentStore for use in Antei
	 * @since 0.0.1
	 * @param {AnteiClient} client The Antei Client
	 */
	constructor(client) {
		super(client, "arguments", Argument);
	}

}

module.exports = ArgumentStore;
