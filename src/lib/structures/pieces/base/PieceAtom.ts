/* eslint-disable @typescript-eslint/naming-convention */
import { Piece, PieceOptions } from "./Piece";
import { Store } from "./Store";

export class PieceAtom<O extends PieceOptions = PieceOptions> {

	public readonly store!: Store<Piece>;
	public readonly directory!: string;
	public readonly file!: readonly string[];
	public readonly options!: O;

	public constructor(store: Store<Piece>, directory: string, file: readonly string[], options?: O) {
		this.store = store;
		this.directory = directory;
		this.file = file;
		this.options = options || { } as O;
	}

	public reconstructOptions(options: O): PieceAtom<O> {
		return new PieceAtom<O>(this.store, this.directory, this.file, options);
	}

}
