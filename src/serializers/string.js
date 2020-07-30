// Copyright (c) 2017-2019 dirigeants - MIT License

const { Serializer } = require("klasa");

module.exports = class extends Serializer {

	async validate(data, { entry, language }) {
		const string = String(data);
		return this.constructor.minOrMax(string.length, entry, language) && string;
	}

};
