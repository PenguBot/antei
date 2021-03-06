// Copyright 2017-2019 dirigeants - MIT License

const Serializer = require("./Serializer");
const AliasStore = require("./base/AliasStore");

/**
 * Stores all the serializers usable in Antei
 * @extends AliasStore
 */
class SerializerStore extends AliasStore {

	/**
	 * Constructs our SerializerStore for use in Antei
	 * @since 0.0.1
	 * @param {AnteiClient} client The Antei Client
	 */
	constructor(client) {
		super(client, "serializers", Serializer);
	}

}

module.exports = SerializerStore;
