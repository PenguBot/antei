const { promises: fsp } = require("fs");
const path = require("path");
const { default: i18Next } = require("i18next");
const i18NextNodeBackend = require("i18next-node-fs-backend");
const { Cache } = require("@klasa/cache");

class LanguageHandler {

	constructor(client) {
		/**
		 * @since 0.0.1
		 * @name LanguageHandler#client
		 * @type {AnteiClient}
		 */
		this.client = client;

		this.directory = path.resolve(this.client.userBaseDirectory, "languages");

		this.options = {
			jsonIndent: 2,
			loadPath: path.resolve(this.directory, path.sep, "{{lng}}/{{ns}}.json")
		};
	}

	async init() {
		const { namespaces, languages } = await this.walkLanguageDirectory(this.directory);

		i18Next.use(i18NextNodeBackend);

		await i18Next.init({
			backend: this.options,
			debug: false,
			fallbackLng: this.client.options.language || "en-US",
			load: "all",
			ns: namespaces,
			preload: languages
		});

		// Cache<string, TFunction>
		this.languages = new Cache(languages.map(item => [item, i18Next.getFixedT(item)]));
	}

	/**
	 * @param {string} dir TODO
	 * @param {string} namespaces TODO
	 * @param {string[]} folderName TODO
	 * @since 0.0.1
	 * @copyright 2020 TypicalBot LLC, Nicholas Sylke and the TypicalBot contributors
	 * @license Apache-2.0
	 */
	async walkLanguageDirectory(dir, namespaces, folderName) {
		const files = await fsp.readdir(dir);

		const languages = [];
		for (const file of files) {
			const stat = await fsp.stat(path.join(dir, file));
			if (stat.isDirectory()) {
				const isLanguage = file.includes("-");
				if (isLanguage) languages.push(file);

				const folder = await this.walkLanguageDirectory(path.join(dir, file), namespaces, isLanguage ? "" : `${file}/`);

				// eslint-disable-next-line prefer-destructuring
				namespaces = folder.namespaces;
			} else {
				namespaces.push(`${folderName}${file.substr(0, file.length - 5)}`);
			}
		}

		return { namespaces: [...new Set(namespaces)], languages };
	}

}

module.exports = LanguageHandler;
