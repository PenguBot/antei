/* eslint-disable @typescript-eslint/naming-convention */
import { BaseClient } from "./BaseClient";
import { ClientOptions } from "../../types/ClientOptions";

export class AnteiClient extends BaseClient {

	// TODO: Make private once used
	public readonly clientOptions!: ClientOptions;

	public constructor(options: ClientOptions) {
		super(options);

		this.clientOptions = options;
	}
}
