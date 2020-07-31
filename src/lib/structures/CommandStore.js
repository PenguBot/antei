// Copyright (c) 2017-2019 dirigeants - MIT License

const Command = require("./Command");
const AliasStore = require("./base/AliasStore");

/**
 * Stores all the commands usable in Klasa
 * @extends AliasStore
 */
class CommandStore extends AliasStore {

	/**
	 * Constructs our CommandStore for use in Klasa
	 * @since 0.0.1
	 * @param {AnteiClient} client The Klasa Client
	 */
	constructor(client) {
		super(client, "commands", Command);
	}

}

module.exports = CommandStore;
