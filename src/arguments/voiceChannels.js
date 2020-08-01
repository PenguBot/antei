// Copyright 2017-2019 dirigeants - MIT License

const { MultiArgument } = require("@pengubot/antei");

module.exports = class extends MultiArgument {

	constructor(...args) {
		super(...args, { aliases: ["...voiceChannel"] });
	}

	get base() {
		return this.store.get("voiceChannel");
	}

};
