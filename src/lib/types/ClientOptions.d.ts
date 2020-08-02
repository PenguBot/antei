import { ClientOptions as DiscordJSClientOptions } from "discord.js";

export interface BaseClientOptions extends DiscordJSClientOptions {

}

export interface ClientOptions extends BaseClientOptions {
    /**
	 * The command handler options
	 * @default {}
	 */
    commands?: CommandHandlerOptions;

    /**
	 * Config options to pass to console events
	 */
    consoleEvents?: ConsoleEvents;

    /**
	 * The discord user id for the users the bot should respect as the owner (gotten from Discord api if not provided)
	 */
    owners?: string[];

    /**
	 * Whether the bot should handle unhandled promise rejections automatically (handles when false)
	 * (also can be configured with process.env.NODE_ENV)
	 */
    production?: boolean;
}

export interface CommandHandlerOptions {
    /**
	 * Whether the bot should update responses if the command is edited
	 * @default false
	 */
	editing?: boolean;

	/**
	 * Whether the bot should log command usage
	 * @default false
	 */
	logging?: boolean;

	/**
	 * The threshold for how old command messages can be before sweeping since the last edit in seconds
	 * @default 1800
	 */
	messageLifetime?: number;

	/**
	 * Whether the bot should allow prefixless messages in DMs
	 * @default false
	 */
	noPrefixDM?: boolean;

	/**
	 * The default prefix the bot should respond to
	 * @default null
	 */
	prefix?: string | string[] | null;

	/**
	 * Amount of time in ms before the bot will respond to a users command since the last command that user has run
	 * @default 0
	 */
	slowmode?: number;

	/**
	 * If the slowmode time should reset if a user spams commands faster than the slowmode allows for
	 * @default false
	 */
	slowmodeAggressive?: boolean;

	/**
	 * Whether the bot should type while processing commands
	 * @default false
	 */
	typing?: boolean;

	/**
	 * Whether the bot should respond to case insensitive prefix or not
	 * @default false
	 */
	prefixCaseInsensitive?: boolean;
}

export interface ConsoleEvents {
	/**
	 * If the debug event should be enabled by default
	 * @default false
	 */
	debug?: boolean;

	/**
	 * If the error event should be enabled by default
	 * @default true
	 */
	error?: boolean;
	/**
	 * If the log event should be enabled by default
	 * @default true
	 */
	log?: boolean;

	/**
	 * If the verbose event should be enabled by default
	 * @default false
	 */
	verbose?: boolean;

	/**
	 * If the warn event should be enabled by default
	 * @default true
	 */
	warn?: boolean;

	/**
	 * If the warn event should be enabled by default
	 * @default true
	 */
	wtf?: boolean;
}
