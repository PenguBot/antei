// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.

const { MultiArgument } = require('klasa');

module.exports = class extends MultiArgument {

	constructor(...args) {
		super(...args, { aliases: ['...language'] });
	}

	get base() {
		return this.store.get('language');
	}

};
