// Copyright 2017-2019 dirigeants - MIT License

const { Structures } = require("discord.js");

module.exports = Structures.extend("Guild", Guild => {
	/**
	 * Antei's Extended Guild
	 * @extends external:Guild
	 */
	class AnteiGuild extends Guild {

		/**
		 * @typedef {external:GuildJSON} AnteiGuildJSON
		 * @property {SettingsJSON} settings The per guild settings
		 */

		/**
		 * @param {...*} args Normal D.JS Guild args
		 */
		constructor(...args) {
			super(...args);

			/**
			 * The guild level settings for this context (guild || default)
			 * @since 0.0.1
			 * @type {Settings}
			 */
			this.settings = this.client.gateways.guilds.get(this.id, true);
		}

		/**
		 * The language configured for this guild
		 * @type {?Language}
		 */
		get language() {
			return this.client.languages.get(this.settings.language) || null;
		}

		/**
		 * Returns the JSON-compatible object of this instance.
		 * @since 0.0.1
		 * @returns {AnteiGuildJSON}
		 */
		toJSON() {
			return { ...super.toJSON(), settings: this.settings.toJSON() };
		}

	}

	return AnteiGuild;
});
