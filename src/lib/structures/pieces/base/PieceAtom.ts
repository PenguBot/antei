/* eslint-disable @typescript-eslint/naming-convention */
import { Piece, PieceOptions } from "./Piece";
import { Store } from "./Store";

export class PieceAtom {

	public readonly store!: Store<Piece>;
	public readonly directory!: string;
	public readonly file!: readonly string[];
	public readonly options!: PieceOptions;

	public constructor(store: Store<Piece>, directory: string, file: readonly string[], options: PieceOptions = {}) {
		this.store = store;
		this.directory = directory;
		this.file = file;
		this.options = options;
	}

}
