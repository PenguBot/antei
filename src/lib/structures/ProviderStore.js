// Copyright 2017-2019 dirigeants - MIT License

const Provider = require("./Provider");
const Store = require("./base/Store");

/**
 * Stores all providers for use in Antei
 * @extends Store
 */
class ProviderStore extends Store {

	/**
	 * Constructs our ProviderStore for use in Antei
	 * @since 0.0.1
	 * @param {AnteiClient} client The Antei client
	 */
	constructor(client) {
		super(client, "providers", Provider);
	}

	/**
	 * The default provider set in {@link AnteiClientOptions.providers}
	 * @since 0.0.1
	 * @type {?Provider}
	 * @readonly
	 */
	get default() {
		return this.get(this.client.options.providers.default) || null;
	}

	/**
	 * Clears the providers from the store and waits for them to shutdown.
	 * @since 0.0.1
	 */
	clear() {
		for (const provider of this.values()) this.delete(provider);
	}

	/**
	 * Deletes a provider from the store
	 * @since 0.0.1
	 * @param {Provider|string} name The provider object or a string representing the structure this store caches
	 * @returns {boolean} whether or not the delete was successful.
	 */
	delete(name) {
		const pro = this.resolve(name);
		if (!pro) return false;
		pro.shutdown();
		return super.delete(pro);
	}

}

module.exports = ProviderStore;
