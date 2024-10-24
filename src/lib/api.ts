import type { ExternalGame, Game } from "$lib/types";

const API_ROOT = "http://localhost:5049";

export async function addGameToCollection(gameId: number, platformId: number): Promise<Game> {
	// TODO get the resulting game from the API
	return {
		title: "Silent Hill 2",
		image: "https://images.igdb.com/igdb/image/upload/t_thumb/co5l7s.jpg",
	};
}

export async function searchExternalGames(q: string): Promise<ExternalGame[]> {
	const response = await fetch(`${API_ROOT}/games/search?q=${q}`);
	if (response.status == 204) {
		return []; // TODO change this when the API no longer returns empty responses
	}

	const data = await response.json();
	return [data]; // TODO change this when the API returns more than one entry
}
