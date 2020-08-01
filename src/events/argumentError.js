const { Event } = require("@pengubot/antei");

module.exports = class extends Event {

	run(message, command, params, error) {
		message.sendMessage(error).catch(err => this.client.emit("wtf", err));
	}

};
