<script lang="ts">
	import GameGrid from "$lib/components/GameGrid.svelte";
	import SearchField from "$lib/components/SearchField.svelte";
	import { collection } from "$lib/store";
	import type { Game } from "$lib/types";

	let games = $collection.slice();

	function filterGames(event: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		if (event == null || event.currentTarget == null) {
			return;
		}

		const text = event.currentTarget.value;
		games = [];
		for (const game of $collection) {
			if (text == "" || game.title.toLowerCase().indexOf(text) != -1) {
				games.push(game);
			}
		}
	}
</script>

<form onsubmit={(e) => e.preventDefault()}>
	<input type="search" placeholder="Filter..." oninput={filterGames} />
</form>

<GameGrid {games} />

<style>
	form {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 0.25em;
	}

	input {
		background: none;
		border: 1px solid var(--background-secondary);
		color: inherit;
		padding: 0.25em;
	}

	input:focus {
		outline: none;
	}
</style>
