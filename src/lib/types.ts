export interface ExternalGamePlatform {
	readonly id: string;
	readonly name: string;
}

export interface ExternalGame {
	readonly externalID: number;
	readonly title: string;
	readonly description: string;
	readonly imagePath: string;
	readonly platforms: ExternalGamePlatform[];
}

export interface Game {
	readonly title: string;
	readonly image: string;
}

export enum IconType {
	Box,
	Clipboard,
	Cog,
	Copywriting,
	Ellipses,
	Folder,
	ListRich,
	MagnifyingGlass,
	Plus,
}
