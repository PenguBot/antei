// Copyright 2017-2019 dirigeants - MIT License

const { Structures } = require("discord.js");

module.exports = Structures.extend("Guild", Guild => {
	/**
	 * Antei's Extended Guild
	 * @extends external:Guild
	 */
	class AnteiGuild extends Guild {


		/**
		 * Returns the JSON-compatible object of this instance.
		 * @since 0.0.1
		 * @returns {AnteiGuildJSON}
		 */
		toJSON() {
			return { ...super.toJSON() };
		}

	}

	return AnteiGuild;
});
