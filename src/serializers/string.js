// Copyright 2017-2019 dirigeants - MIT License

const { Serializer } = require("@pengubot/antei");

module.exports = class extends Serializer {

	deserialize(data) {
		return String(data);
	}

};
