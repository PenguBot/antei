// Copyright 2017-2019 dirigeants - MIT License

const Task = require("./Task");
const Store = require("./base/Store");

/**
 * Stores all task pieces for use in Antei
 * @extends Store
 */
class TaskStore extends Store {

	/**
	 * Constructs our TaskStore for use in Antei
	 * @since 0.0.1
	 * @param {AnteiClient} client The Antei client
	 */
	constructor(client) {
		super(client, "tasks", Task);
	}

}

module.exports = TaskStore;
