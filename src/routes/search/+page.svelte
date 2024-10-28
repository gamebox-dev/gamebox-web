<script lang="ts">
	import type { PageData } from "./$types";
	import type { ExternalGame } from "$lib/types";

	let { data }: { data: PageData } = $props();

	const s = data.results.length != 1 ? "s" : "";
	let selectedGame: ExternalGame | null = $state(null);

	function deselectGame(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		event.preventDefault();
		selectedGame = null;
	}
</script>

<h2>
	{#if data.searchQuery == ""}
		nothing to search for...
	{:else if data.results.length == 0}
		no results for <strong>{data.searchQuery}</strong>
	{:else}
		{data.results.length} result{s} for <strong>{data.searchQuery}</strong>
	{/if}
</h2>

<ul class="games">
	{#each data.results as game}
		<li class="game">
			<div class="image">
				<a href="/game/{game.externalID}"><img src={game.imagePath} alt="" /></a>
			</div>
			<div class="meta">
				<h3>
					<a href="/game/{game.externalID}">{game.title}</a>
					20XX
				</h3>
				<p>{game.description}</p>
				<ul class="platforms">
					{#each game.platforms as platform}
						<li>{platform.name}</li>
					{/each}
				</ul>
			</div>
			<div class="controls">
				<button
					onclick={() => {
						selectedGame = game;
					}}>Add to Collection</button
				>
				<button>Add to Wishlist</button>
			</div>
		</li>
	{/each}
</ul>

{#if selectedGame != null}
	<div class="overlay">
		<form class="add-collection" method="POST" action="/collection/add">
			<input type="hidden" name="game" value={selectedGame.externalID} />
			<h2>add <strong>{selectedGame.title}</strong> to your collection</h2>
			<label for="platform">
				<span>Platform</span>
				<select id="platform" name="platform">
					{#each selectedGame.platforms as platform}
						<option value={platform.id}>{platform.name}</option>
					{/each}
				</select>
			</label>
			<div class="controls">
				<button>Add to Collection</button>
				or
				<button class="cancel" onclick={deselectGame}>Cancel</button>
			</div>
		</form>
	</div>
{/if}

<style>
	h2 {
		color: var(--text-secondary);
		font-size: 18pt;
		font-weight: normal;
		margin: 0.5em 0;
		text-align: center;
	}

	h2 strong {
		color: var(--text);
	}

	h3 {
		color: var(--text-secondary);
		font-size: 14pt;
		margin: 0 0 0.5em;
	}

	h3 a {
		color: white;
		font-size: 18pt;
		text-decoration: none;
	}

	h3 a:hover {
		color: var(--text-secondary);
	}

	img {
		border-radius: 3px;
	}

	p {
		margin: 0.5em 0;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.add-collection {
		background: var(--background-secondary);
		border-radius: 1em;
		max-width: 32em;
		padding: 2em;
	}

	.add-collection .controls {
		color: var(--text-secondary);
		text-align: center;
	}

	.add-collection .controls .cancel {
		background: none;
		color: inherit;
		font-size: inherit;
		padding: 0;
	}

	.add-collection .controls .cancel:hover {
		text-decoration: underline;
	}

	.add-collection label {
		display: flex;
		margin: 2em 0;
	}

	.add-collection label span {
		flex: 0 0 40%;
		margin: 0 5%;
		text-align: right;
	}

	.add-collection h2 {
		margin-top: 0;
	}

	.game {
		border-bottom: 1px solid var(--background-secondary);
		display: flex;
		padding: 0.5em 0;
	}

	.game .controls {
		flex: 0 0 10em;
		padding-top: 44px;
	}

	.game .controls button {
		display: block;
		margin-bottom: 0.5em;
		padding: 0.5em 1em;
		width: 100%;
	}

	.image {
		flex: 0 0 133px;
	}

	.meta {
		flex: 1;
		margin: 0 1em;
	}

	.platforms li {
		background: var(--background-secondary);
		border-radius: 0.25em;
		font-size: 9pt;
		display: inline;
		margin-right: 0.5em;
		padding: 0.25em 0.5em;
	}
</style>
