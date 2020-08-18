import { EventEmitter } from "events";
import { AnteiClient } from "../client/AnteiClient";
import { AliasPiece, AliasPieceOptions } from "./base/AliasPiece";
import { PieceAtom } from "./base/PieceAtom";

export class Event extends AliasPiece {

	// eslint-disable-next-line no-useless-constructor
	public constructor(atom: PieceAtom<EventOptions>) {
		super(atom);
	}

}

export interface EventOptions extends AliasPieceOptions {
	once?: boolean;
	emitter?: EventEmitter | keyof AnteiClient;
	event?: string;
}
