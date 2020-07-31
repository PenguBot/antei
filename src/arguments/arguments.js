// Copyright 2017-2019 dirigeants - MIT License

const { MultiArgument } = require('klasa');

module.exports = class extends MultiArgument {

	constructor(...args) {
		super(...args, { aliases: ['...argument'] });
	}

	get base() {
		return this.store.get('argument');
	}

};
