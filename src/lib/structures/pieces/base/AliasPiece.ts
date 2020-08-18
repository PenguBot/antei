import { Piece, PieceOptions } from "./Piece";
import { PieceAtom } from "./PieceAtom";

/**
 * The common class for all pieces with aliases
 */
export class AliasPiece extends Piece {

	/**
	 * The aliases for this piece
	 * @since 0.0.1
	 */
	public aliases: string[];

	/**
	 * @since 0.0.1
	 * @param store The store this piece is for
	 * @param directory The base directory to the pieces folder
	 * @param file The path from the pieces folder to the piece file
	 * @param options The options for this piece
	 */
	public constructor(atom: PieceAtom<AliasPieceOptions>) {
		super(atom);
		this.aliases = atom.options.aliases?.slice() ?? [];
	}

	/**
	 * Defines the JSON.stringify behavior of this argument
	 * @since 0.0.1
	 */
	public toJSON(): Record<string, unknown> {
		return {
			...super.toJSON(),
			aliases: this.aliases.slice()
		};
	}

}

/**
 * The base piece options for all {@link AliasPiece} instances.
 */
export interface AliasPieceOptions extends PieceOptions {
	/**
	 * The aliases for this piece.
	 */
	aliases?: string[];
}
