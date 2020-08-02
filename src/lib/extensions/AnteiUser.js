// Copyright 2017-2019 dirigeants - MIT License

const { Structures } = require("discord.js");

module.exports = Structures.extend("User", User => {
	/**
	 * Antei's Extended User
	 * @extends external:User
	 */
	class AnteiUser extends User {

		/**
		 * Returns the JSON-compatible object of this instance.
		 * @since 0.0.1
		 * @returns {AnteiUserJSON}
		 */
		toJSON() {
			return { ...super.toJSON() };
		}

	}

	return AnteiUser;
});
