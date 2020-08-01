// Copyright 2017-2019 dirigeants - MIT License

const Command = require("./Command");
const AliasStore = require("./base/AliasStore");

/**
 * Stores all the commands usable in Antei
 * @extends AliasStore
 */
class CommandStore extends AliasStore {

	/**
	 * Constructs our CommandStore for use in Antei
	 * @since 0.0.1
	 * @param {AnteiClient} client The Antei Client
	 */
	constructor(client) {
		super(client, "commands", Command);
	}

}

module.exports = CommandStore;
