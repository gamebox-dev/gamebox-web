<script lang="ts">
	import GameGrid from "$lib/components/GameGrid.svelte";
	import SearchField from "$lib/components/SearchField.svelte";
	import { collection } from "$lib/store";
	import type { Game } from "$lib/types";

	let games = $collection.slice();

	function filterGames(text: string) {
		games = [];
		for (const game of $collection) {
			if (text == "" || game.title.toLowerCase().indexOf(text) != -1) {
				games.push(game);
			}
		}
	}
</script>

<form
	on:submit={(e) => {
		e.preventDefault();
	}}
>
	<SearchField onchange={filterGames} />
</form>

<GameGrid {games} />

<style>
	form {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 20px;
	}
</style>
