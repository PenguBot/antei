// Copyright 2017-2019 dirigeants - MIT License

const Piece = require("./base/Piece");

/**
 * Base class for all Antei Task pieces. See {@tutorial CreatingTasks} for more information how to use this class
 * to build custom tasks.
 * @tutorial CreatingTasks
 * @extends {Piece}
 */
class Task extends Piece {

	/**
	 * The run method to be overwritten in actual Task pieces
	 * @since 0.0.1
	 * @param {*} data The data from the ScheduledTask instance
	 * @returns {void}
	 * @abstract
	 */
	async run() {
		// Defined in extension Classes
		throw new Error(`The run method has not been implemented by ${this.type}:${this.name}.`);
	}

}

module.exports = Task;
