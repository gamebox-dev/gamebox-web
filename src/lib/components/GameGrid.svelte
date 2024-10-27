<script lang="ts">
	import type { Game } from "$lib/types";

	interface Props {
		games: Game[];
	}

	let { games }: Props = $props();
</script>

<ul>
	{#each games as game}
		<li>
			<a href="/game/123">
				<img src={game.image} alt={game.title} title={game.title} />
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		column-gap: 10px;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		list-style: none;
		margin: 0;
		padding: 0;
		row-gap: 10px;
	}

	ul a {
		border: 3px solid transparent;
		border-radius: 3px;
		display: block;
		padding: 1px;
	}

	ul a:hover {
		border-color: #c00;
	}

	ul img {
		border-radius: 3px;
		display: block;
		width: 100%;
	}
</style>
