// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.

const { Argument } = require('klasa');

module.exports = class extends Argument {

	run(arg, possible, message) {
		const store = this.client.pieceStores.get(arg);
		if (store) return store;
		throw message.language.get('RESOLVER_INVALID_PIECE', possible.name, 'store');
	}

};
