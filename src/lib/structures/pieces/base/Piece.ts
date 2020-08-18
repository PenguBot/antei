/* eslint-disable @typescript-eslint/naming-convention */
import { mergeDefault } from "@klasa/utils";
import { basename, extname, join } from "path";
import type { Store } from "./Store";
import { AnteiClient } from "../../client/Client";
import { ClientEvents } from "../../client/BaseClient";
import { PieceAtom } from "./PieceAtom";


/**
 * The common class for all pieces.
 */
export class Piece {

	/**
	 * The client this Piece was created with.
	 * @since 0.0.1
	 */
	public readonly client: AnteiClient;

	/**
	 * The store this Piece is from.
	 * @since 0.0.1
	 */
	public readonly store: Store<Piece>;

	public readonly atom: PieceAtom;

	/**
	 * The name of the Piece.
	 * @since 0.0.1
	 */
	public name: string;

	/**
	 * Whether or not the Piece is enabled.
	 * @since 0.0.1
	 */
	public enabled: boolean;

	/**
	 * @since 0.0.1
	 * @param store The store this piece is for
	 * @param directory The base directory to the pieces folder
	 * @param file The path from the pieces folder to the piece file
	 * @param options The options for this piece
	 */
	public constructor(atom: PieceAtom) {
		this.atom = atom;
		let { options } = this.atom;
		const defaults = Reflect.get(this.atom.store.client.clientOptions.pieces.defaults, this.atom.store.name) as Required<PieceOptions>;
		if (defaults) options = mergeDefault(defaults, this.atom.options);
		this.client = this.atom.store.client;
		this.store = this.atom.store as Store<this>;
		this.name = options.name ?? basename(this.atom.file[this.atom.file.length - 1], extname(this.atom.file[this.atom.file.length - 1]));
		this.enabled = options.enabled ?? true;
	}

	/**
	 * The type of piece this is
	 * @since 0.0.1
	 */
	public get type(): string {
		return this.store.name.slice(0, -1);
	}

	/**
	 * The absolute path to this piece
	 * @since 0.0.1
	 */
	public get path(): string {
		return join(this.atom.directory, ...this.atom.file);
	}

	/**
	 * Reloads this piece
	 * @since 0.0.1
	 * @returns The newly loaded piece
	 */
	public async reload(): Promise<Piece | null> {
		const piece = await this.store.load(this.atom.directory, this.atom.file);
		if (piece) {
			await piece.init();
			this.client.emit(ClientEvents.PieceReloaded, piece);
		}
		return piece;
	}

	/**
	 * Unloads this piece
	 * @since 0.0.1
	 */
	public unload(): boolean {
		this.client.emit(ClientEvents.PieceUnloaded, this);
		return this.store.remove(this);
	}

	/**
	 * Disables this piece
	 * @since 0.0.1
	 * @chainable
	 */
	public disable(): this {
		this.client.emit(ClientEvents.PieceDisabled, this);
		this.enabled = false;
		return this;
	}

	/**
	 * Enables this piece
	 * @since 0.0.1
	 * @chainable
	 */
	public enable(): this {
		this.client.emit(ClientEvents.PieceEnabled, this);
		this.enabled = true;
		return this;
	}

	/**
	 * The init method to be optionally overwritten in actual pieces
	 * @since 0.0.1
	 */
	public init(): unknown {
		// Optionally defined in extension Classes
		return null;
	}

	/**
	 * Defines toString behavior for pieces
	 * @since 0.0.1
	 * @returns This piece name
	 */
	public toString(): string {
		return this.name;
	}

	/**
	 * Defines the JSON.stringify behavior of this piece.
	 */
	public toJSON(): Record<string, unknown> {
		return {
			directory: this.atom.directory,
			file: this.atom.file,
			path: this.path,
			name: this.name,
			type: this.type,
			enabled: this.enabled
		};
	}

}

/**
 * The base piece options for all {@link Piece} instances.
 */
export interface PieceOptions {
	/**
	 * The name of the piece. Defaults to the filename without extension.
	 */
	name?: string;

	/**
	 * Whether or not this piece should be enabled. Defaults to true.
	 */
	enabled?: boolean;
}
