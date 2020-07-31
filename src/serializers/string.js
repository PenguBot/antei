// Copyright 2017-2019 dirigeants - MIT License

const { Serializer } = require("klasa");

module.exports = class extends Serializer {

	deserialize(data) {
		return String(data);
	}

};
