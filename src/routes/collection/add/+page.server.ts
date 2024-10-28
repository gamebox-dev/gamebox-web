import { redirect } from "@sveltejs/kit";
import { addGameToCollection } from "$lib/api";

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const gameId = Number(data.get("game"));
		const platformId = Number(data.get("platform"));
		const result = await addGameToCollection(gameId, platformId);

		redirect(303, "/collection");
	},
};
