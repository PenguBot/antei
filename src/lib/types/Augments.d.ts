import type {
	ClientEventParams as AnteiClientEventParams
} from "../structures/client/BaseClient";

declare module "discord.js" {

	interface Client {
		on<K extends keyof AnteiClientEventParams>(event: K, listener: (...args: AnteiClientEventParams[K]) => void): this;
		once<K extends keyof AnteiClientEventParams>(event: K, listener: (...args: AnteiClientEventParams[K]) => void): this;
		emit<K extends keyof AnteiClientEventParams>(event: K, ...args: AnteiClientEventParams[K]): boolean;
	}
}
