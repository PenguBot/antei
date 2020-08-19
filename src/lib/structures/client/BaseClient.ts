/* eslint-disable @typescript-eslint/naming-convention */

import {
	Channel,
	Client,
	CloseEvent,
	Guild,
	GuildEmoji,
	GuildMember,
	Invite,
	Message as DjSMessage,
	MessageReaction,
	PartialDMChannel,
	PartialGuildMember,
	PartialMessage,
	PartialUser,
	Presence,
	RateLimitData,
	Role,
	Snowflake,
	Speaking,
	TextChannel,
	User,
	VoiceState
} from "discord.js";
import { Cache } from "@klasa/cache";
import { dirname } from "path";
import { BaseClientOptions } from "../../types/ClientOptions";
import { Piece } from "../pieces/base/Piece";
import { LanguageHandler } from "../LanguageHandler";
import { Event } from "../pieces/Event";

export class BaseClient extends Client {

	/**
	 * The directory where the user files are at.
	 */
	public userBaseDirectory = dirname((require.main as NodeJS.Module).filename);
	public language!: LanguageHandler;

	public readonly baseOptions!: BaseClientOptions;

	public constructor(options: BaseClientOptions) {
		super(options);

		this.baseOptions = options;
		this.language = new LanguageHandler(this);
	}

}

export const enum ClientEvents {
    ChannelCreate = "channelCreate",
	ChannelDelete = "channelDelete",
    ChannelPinsUpdate = "channelPinsUpdate",
    ChannelUpdate = "channelUpdate",
    Debug = "debug",
    Warn = "warn",
    Disconnect = "disconnect",
    EmojiCreate = "emojiCreate",
    EmojiDelete = "emojiDelete",
    EmojiUpdate = "emojiUpdate",
    Error = "error",
    GuildBanAdd = "guildBanAdd",
    GuildBanRemove = "guildBanRemove",
    GuildCreate = "guildCreate",
    GuildDelete = "guildDelete",
    GuildUnavailable = "guildUnavailable",
    GuildIntegrationsUpdate = "guildIntegrationsUpdate",
    GuildMemberAdd = "guildMemberAdd",
    GuildMemberAvailable = "guildMemberAvailable",
    GuildMemberRemove = "guildMemberRemove",
    GuildMembersChunk = "guildMembersChunk",
    GuildMemberSpeaking = "guildMemberSpeaking",
    GuildMemberUpdate = "guildMemberUpdate",
    GuildUpdate = "guildUpdate",
    InviteCreate = "inviteCreate",
    InviteDelete = "inviteDelete",
    Message = "message",
    MessageDelete = "messageDelete",
    MessageReactionRemoveAll = "messageReactionRemoveAll",
    MessageReactionRemoveEmoji = "messageReactionRemoveEmoji",
    MessageDeleteBulk = "messageDeleteBulk",
    MessageReactionAdd = "messageReactionAdd",
    MessageReactionRemove = "messageReactionRemove",
    MessageUpdate = "messageUpdate",
    PresenceUpdate = "presenceUpdate",
    RateLimit = "rateLimit",
    Ready = "ready",
    Invalidated = "invalidated",
    RoleCreate = "roleCreate",
    RoleDelete = "roleDelete",
    RoleUpdate = "roleUpdate",
    TypingsStart = "typingStart",
    UserUpdate = "userUpdate",
    VoiceStateUpdate = "voiceStateUpdate",
    WebhookUpdate = "webhookUpdate",
    ShardDisconnect = "shardDisconnect",
    ShardError = "shardError",
    SharedReady = "shardReady",
    ShardReconnecting = "shardReconnecting",
	ShardResume = "shardResume",

	PieceReloaded = "pieceReloaded",
	PieceUnloaded = "pieceUnloaded",
	PieceDisabled = "pieceDisabled",
	PieceEnabled = "pieceEnabled",
	PieceLoaded = "pieceLoaded",

	WTF = "wtf",

	EventError = "eventError"
}

export interface ClientEventParams {
    [ClientEvents.ChannelCreate]: [Channel];
    [ClientEvents.ChannelDelete]: [Channel | PartialDMChannel];
    [ClientEvents.ChannelPinsUpdate]: [Channel | PartialDMChannel, Date];
    [ClientEvents.ChannelUpdate]: [Channel, Channel];
    [ClientEvents.Debug]: [string];
    [ClientEvents.Warn]: [string];
    [ClientEvents.Disconnect]: [unknown, number];
    [ClientEvents.EmojiCreate]: [GuildEmoji];
    [ClientEvents.EmojiDelete]: [GuildEmoji];
    [ClientEvents.EmojiUpdate]: [GuildEmoji, GuildEmoji];
    [ClientEvents.Error]: [Error | string];
    [ClientEvents.GuildBanAdd]: [Guild, User | PartialUser];
    [ClientEvents.GuildBanRemove]: [Guild, User | PartialUser];
    [ClientEvents.GuildCreate]: [Guild];
    [ClientEvents.GuildDelete]: [Guild];
    [ClientEvents.GuildUnavailable]: [Guild];
    [ClientEvents.GuildIntegrationsUpdate]: [Guild];
    [ClientEvents.GuildMemberAdd]: [GuildMember | PartialGuildMember];
    [ClientEvents.GuildMemberAvailable]: [GuildMember | PartialGuildMember];
    [ClientEvents.GuildMemberRemove]: [GuildMember | PartialGuildMember];
    [ClientEvents.GuildMembersChunk]: [Cache<Snowflake, GuildMember | PartialGuildMember>, Guild];
    [ClientEvents.GuildMemberSpeaking]: [GuildMember | PartialGuildMember, Readonly<Speaking>];
    [ClientEvents.GuildMemberUpdate]: [GuildMember | PartialGuildMember, GuildMember | PartialGuildMember];
    [ClientEvents.GuildUpdate]: [Guild, Guild];
    [ClientEvents.InviteCreate]: [Invite];
    [ClientEvents.InviteDelete]: [Invite];
    [ClientEvents.Message]: [DjSMessage];
    [ClientEvents.MessageDelete]: [DjSMessage | PartialMessage];
    [ClientEvents.MessageReactionRemoveAll]: [DjSMessage | PartialMessage];
    [ClientEvents.MessageReactionRemoveEmoji]: [MessageReaction];
    [ClientEvents.MessageDeleteBulk]: [Cache<Snowflake, DjSMessage | PartialMessage>];
    [ClientEvents.MessageReactionAdd]: [MessageReaction, User | PartialUser];
    [ClientEvents.MessageReactionRemove]: [MessageReaction, User | PartialUser];
    [ClientEvents.MessageUpdate]: [DjSMessage | PartialMessage, DjSMessage | PartialMessage];
    [ClientEvents.PresenceUpdate]: [Presence | undefined, Presence];
    [ClientEvents.RateLimit]: [RateLimitData];
    [ClientEvents.Ready]: [];
    [ClientEvents.Invalidated]: [];
    [ClientEvents.RoleCreate]: [Role];
    [ClientEvents.RoleDelete]: [Role];
    [ClientEvents.RoleUpdate]: [Role, Role];
    [ClientEvents.TypingsStart]: [Channel | PartialDMChannel, User | PartialUser];
    [ClientEvents.UserUpdate]: [User | PartialUser, User | PartialUser];
    [ClientEvents.VoiceStateUpdate]: [VoiceState, VoiceState];
    [ClientEvents.WebhookUpdate]: [TextChannel];
    [ClientEvents.ShardDisconnect]: [CloseEvent, number];
    [ClientEvents.ShardError]: [Error, number];
    [ClientEvents.SharedReady]: [number];
    [ClientEvents.ShardReconnecting]: [number];
	[ClientEvents.ShardResume]: [number, number];

	[ClientEvents.PieceReloaded]: [Piece];
	[ClientEvents.PieceUnloaded]: [Piece];
	[ClientEvents.PieceDisabled]: [Piece];
	[ClientEvents.PieceEnabled]: [Piece];
	[ClientEvents.PieceLoaded]: [Piece];

	[ClientEvents.WTF]: [Error | string];

	[ClientEvents.EventError]: [Event, Parameters<Event["run"]>, unknown];
}
