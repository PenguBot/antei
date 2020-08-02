// Copyright 2017-2019 dirigeants - MIT License


const { Language } = require("@pengubot/antei");

module.exports = class extends Language {

	constructor(...args) {
		super(...args);
		this.language = {
			DEFAULT: key => `${key} has not been localized for en-US yet.`,
			DEFAULT_LANGUAGE: "Default Language",
			PREFIX_REMINDER: (prefix = `@${this.client.user.tag}`) => `The prefix${Array.isArray(prefix) ?
				`es for this guild are: ${prefix.map(pre => `\`${pre}\``).join(", ")}` :
				` in this guild is set to: \`${prefix}\``
			}`,
			RESOLVER_MULTI_TOO_FEW: (name, min = 1) => `Provided too few ${name}s. At least ${min} ${min === 1 ? "is" : "are"} required.`,
			RESOLVER_INVALID_BOOL: name => `${name} must be true or false.`,
			RESOLVER_INVALID_CHANNEL: name => `${name} must be a channel tag or valid channel id.`,
			RESOLVER_INVALID_CUSTOM: (name, type) => `${name} must be a valid ${type}.`,
			RESOLVER_INVALID_DATE: name => `${name} must be a valid date.`,
			RESOLVER_INVALID_DURATION: name => `${name} must be a valid duration string.`,
			RESOLVER_INVALID_EMOJI: name => `${name} must be a custom emoji tag or valid emoji id.`,
			RESOLVER_INVALID_FLOAT: name => `${name} must be a valid number.`,
			RESOLVER_INVALID_GUILD: name => `${name} must be a valid guild id.`,
			RESOLVER_INVALID_INT: name => `${name} must be an integer.`,
			RESOLVER_INVALID_LITERAL: name => `Your option did not match the only possibility: ${name}`,
			RESOLVER_INVALID_MEMBER: name => `${name} must be a mention or valid user id.`,
			RESOLVER_INVALID_MESSAGE: name => `${name} must be a valid message id.`,
			RESOLVER_INVALID_PIECE: (name, piece) => `${name} must be a valid ${piece} name.`,
			RESOLVER_INVALID_REGEX_MATCH: (name, pattern) => `${name} must follow this regex pattern \`${pattern}\`.`,
			RESOLVER_INVALID_ROLE: name => `${name} must be a role mention or role id.`,
			RESOLVER_INVALID_STRING: name => `${name} must be a valid string.`,
			RESOLVER_INVALID_TIME: name => `${name} must be a valid duration or date string.`,
			RESOLVER_INVALID_URL: name => `${name} must be a valid url.`,
			RESOLVER_INVALID_USER: name => `${name} must be a mention or valid user id.`,
			RESOLVER_STRING_SUFFIX: " characters",
			RESOLVER_MINMAX_EXACTLY: (name, min, suffix) => `${name} must be exactly ${min}${suffix}.`,
			RESOLVER_MINMAX_BOTH: (name, min, max, suffix) => `${name} must be between ${min} and ${max}${suffix}.`,
			RESOLVER_MINMAX_MIN: (name, min, suffix) => `${name} must be greater than ${min}${suffix}.`,
			RESOLVER_MINMAX_MAX: (name, max, suffix) => `${name} must be less than ${max}${suffix}.`,
			REACTIONHANDLER_PROMPT: "Which page would you like to jump to?",
			COMMANDMESSAGE_MISSING: "Missing one or more required arguments after end of input.",
			COMMANDMESSAGE_MISSING_REQUIRED: name => `${name} is a required argument.`,
			COMMANDMESSAGE_MISSING_OPTIONALS: possibles => `Missing a required option: (${possibles})`,
			COMMANDMESSAGE_NOMATCH: possibles => `Your option didn't match any of the possibilities: (${possibles})`,
			// eslint-disable-next-line max-len
			MONITOR_COMMAND_HANDLER_REPROMPT: (tag, error, time, abortOptions) => `${tag} | **${error}** | You have **${time}** seconds to respond to this prompt with a valid argument. Type **${abortOptions.join("**, **")}** to abort this prompt.`,
			// eslint-disable-next-line max-len
			MONITOR_COMMAND_HANDLER_REPEATING_REPROMPT: (tag, name, time, cancelOptions) => `${tag} | **${name}** is a repeating argument | You have **${time}** seconds to respond to this prompt with additional valid arguments. Type **${cancelOptions.join("**, **")}** to cancel this prompt.`,
			MONITOR_COMMAND_HANDLER_ABORTED: "Aborted",
			INHIBITOR_COOLDOWN: remaining => `You have just used this command. You can use this command again in ${remaining} second${remaining === 1 ? "" : "s"}.`,
			INHIBITOR_DISABLED_GUILD: "This command has been disabled by an admin in this guild.",
			INHIBITOR_DISABLED_GLOBAL: "This command has been globally disabled by the bot owner.",
			INHIBITOR_MISSING_BOT_PERMS: missing => `Insufficient permissions, missing: **${missing}**`,
			INHIBITOR_NSFW: "You can only use NSFW commands in NSFW channels.",
			INHIBITOR_PERMISSIONS: "You do not have permission to use this command.",
			INHIBITOR_RUNIN: types => `This command is only available in ${types} channels.`,
			INHIBITOR_RUNIN_NONE: name => `The ${name} command is not configured to run in any channel.`,
			MESSAGE_PROMPT_TIMEOUT: "The prompt has timed out.",
			TEXT_PROMPT_ABORT_OPTIONS: ["abort", "stop", "cancel"]
		};
	}

	async init() {
		await super.init();
	}

};
