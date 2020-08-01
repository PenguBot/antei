// Copyright 2017-2019 dirigeants - MIT License

const { Structures } = require("discord.js");

module.exports = Structures.extend("User", User => {
	/**
	 * Antei's Extended User
	 * @extends external:User
	 */
	class AnteiUser extends User {

		/**
		 * @typedef {external:UserJSON} AnteiUserJSON
		 * @property {SettingsJSON} settings The per user settings
		 */

		/**
		 * @param {...*} args Normal D.JS User args
		 */
		constructor(...args) {
			super(...args);

			/**
			 * The user level settings for this context (user || default)
			 * @since 0.0.1
			 * @type {Settings}
			 */
			this.settings = this.client.gateways.users.get(this.id, true);
		}

		/**
		 * Returns the JSON-compatible object of this instance.
		 * @since 0.0.1
		 * @returns {AnteiUserJSON}
		 */
		toJSON() {
			return { ...super.toJSON(), settings: this.settings };
		}

	}

	return AnteiUser;
});
