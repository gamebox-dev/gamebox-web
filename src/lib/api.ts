import type { ExternalGame, Game } from "$lib/types";

const API_ROOT = "http://localhost:5049";

export async function addGameToCollection(
	gameId: number,
	platformId: number,
): Promise<Game | null> {
	console.warn("TODO");
	return null;
}

export async function searchExternalGames(q: string): Promise<ExternalGame[]> {
	const response = await fetch(`${API_ROOT}/games/search?q=${q}`);
	if (response.status == 204) {
		return []; // TODO change this when the API no longer returns empty responses
	}

	const data = await response.json();
	return [data]; // TODO change this when the API returns more than one entry
}
