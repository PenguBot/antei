// Copyright 2017-2019 dirigeants - MIT License

const Language = require("./Language");
const Store = require("./base/Store");

/**
 * Stores all languages for use in Antei
 * @extends Store
 */
class LanguageStore extends Store {

	/**
	 * Constructs our LanguageStore for use in Antei
	 * @since 0.0.1
	 * @param {AnteiClient} client The Antei client
	 */
	constructor(client) {
		super(client, "languages", Language);
	}

	/**
	 * The default language set in {@link AnteiClientOptions.language}
	 * @since 0.0.1
	 * @type {?Language}
	 * @readonly
	 */
	get default() {
		return this.get(this.client.options.language) || null;
	}

}

module.exports = LanguageStore;
