// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.

const { Serializer } = require("klasa");

module.exports = class extends Serializer {

	async validate(data, { entry, language }) {
		const string = String(data);
		return this.constructor.minOrMax(string.length, entry, language) && string;
	}

};
