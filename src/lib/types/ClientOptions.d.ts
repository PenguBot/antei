import { ClientOptions as DiscordJSClientOptions } from "discord.js";

export interface BaseClientOptions extends DiscordJSClientOptions {
	language?: string;
}

export interface ClientOptions extends BaseClientOptions {

    commands?: CommandHandlerOptions;

    consoleEvents?: ConsoleEvents;

    owners?: string[];

	production?: boolean;

	pieces: ClientPieceOptions;

}

export interface ClientPieceOptions {

	defaults: PieceDefaults;
	createFolders: boolean;
	disabledCoreTypes: string[];

}

export interface PieceDefaults { }

export interface CommandHandlerOptions {

	editing?: boolean;

	logging?: boolean;

	messageLifetime?: number;

	noPrefixDM?: boolean;

	prefix?: string | string[] | null;

	slowmode?: number;

	slowmodeAggressive?: boolean;

	typing?: boolean;

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
