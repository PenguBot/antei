// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.

const { Event } = require('klasa');

module.exports = class extends Event {

	run(event, args, error) {
		this.client.emit('wtf', `[EVENT] ${event.path}\n${error ?
			error.stack ? error.stack : error : 'Unknown error'}`);
	}

};
