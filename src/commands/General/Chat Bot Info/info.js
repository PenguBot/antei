// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.

const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['details', 'what'],
			guarded: true,
			description: language => language.get('COMMAND_INFO_DESCRIPTION')
		});
	}

	async run(message) {
		return message.sendLocale('COMMAND_INFO');
	}

};
