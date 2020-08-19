/* eslint-disable @typescript-eslint/naming-convention */
import { EventEmitter } from "events";
import { AnteiClient } from "../client/AnteiClient";
import { ClientEvents } from "../client/BaseClient";
import { AliasPiece, AliasPieceOptions } from "./base/AliasPiece";
import { PieceAtom } from "./base/PieceAtom";

export abstract class Event extends AliasPiece {

	declare public readonly atom: PieceAtom<EventOptions>;

	public readonly once: boolean;
	public readonly emitter: EventEmitter;
	public readonly event: string;
	// @ts-expect-error 6133
	// TODO: Fix me
	// eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
	readonly #listener: Event["run"];

	// eslint-disable-next-line no-useless-constructor
	public constructor(atom: PieceAtom<EventOptions, AliasPiece>) {
		super(atom);

		const { options } = this.atom;

		this.once = options.once ?? false;
		this.emitter = (typeof options.emitter === "string" ? this.client[options.emitter] as EventEmitter : options.emitter) ?? this.client;
		this.event = options.event ?? this.name;
		this.#listener = this.once ? this._runOnce.bind(this) : this._run.bind(this);
	}

	public abstract run(...args: readonly unknown[]): unknown;

	private async _run(...args: Parameters<Event["run"]>): Promise<void> {
		try {
			await this.run(...args);
		} catch (err) {
			this.client.emit(ClientEvents.EventError, this, args, err);
		}
	}

	private async _runOnce(...args: Parameters<Event["run"]>): Promise<void> {
		await this._run(...args);
		// TODO: Fix me
		// @ts-expect-error 2339
		this.store._onceEvents.add(this.atom.file[this.atom.file.length - 1]);
		this.unload();
	}

}

export interface EventOptions extends AliasPieceOptions {
	once?: boolean;
	emitter?: EventEmitter | keyof AnteiClient;
	event?: string;
}
