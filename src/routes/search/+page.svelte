<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;

	const s = data.results.length != 1 ? "s" : "";
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
				<button>Add to Collection</button>
				<button>Add to Wishlist</button>
			</div>
		</li>
	{/each}
</ul>

<style>
	button {
		border: 0;
		border-radius: 3px;
		cursor: pointer;
		display: block;
		margin-bottom: 0.5em;
		padding: 0.5em;
		width: 100%;
	}

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

	.controls {
		flex: 0 0 10em;
		padding-top: 44px;
	}

	.game {
		border-bottom: 1px solid var(--background-secondary);
		display: flex;
		padding: 0.5em 0;
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
