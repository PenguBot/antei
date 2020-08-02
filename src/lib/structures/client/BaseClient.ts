/* eslint-disable @typescript-eslint/naming-convention */

import { Client } from "discord.js";
import { dirname } from "path";
import { BaseClientOptions } from "../../types/ClientOptions";

export class BaseClient extends Client {

	/**
	 * The directory where the user files are at.
	 */
	public userBaseDirectory = dirname((require.main as NodeJS.Module).filename);

	// TODO: Make private once used
	public readonly baseOptions!: BaseClientOptions;

	public constructor(options: BaseClientOptions) {
		super(options);

		this.baseOptions = options;
	}

}
