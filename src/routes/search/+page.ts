import type { ExternalGame } from "$lib/types";

export function load({ url }) {
	const searchQuery = url.searchParams.get("q") ?? "";
	// TODO make actual query
	const results: ExternalGame[] = [
		{
			externalID: 222341,
			platforms: [
				{
					id: 6,
					name: "PC",
				},
				{
					id: 167,
					name: "PS5",
				},
			],
			title: "Silent Hill 2",
			description:
				"Investigating a letter from his late wife, James returns to where they made so many memories - Silent Hill. What he finds is a ghost town, prowled by disturbing monsters and cloaked in deep fog. Confront the monsters, solve puzzles, and search for traces of your wife in this remake of Silent Hill 2.",
			imagePath: "//images.igdb.com/igdb/image/upload/t_cover_big/co5l7s.jpg",
		},
	];

	return {
		searchQuery,
		results,
	};
}
