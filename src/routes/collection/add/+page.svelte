<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
	import IGDBLogo from "$lib/components/IGDBLogo.svelte";
	import SearchField from "$lib/components/SearchField.svelte";
	import { addGameToCollection, searchExternalGames } from "$lib/api";
	import { IconType } from "$lib/types";
	import type { ExternalGame } from "$lib/types";

	let loading: boolean = $state(false);
	let hasSearched: boolean = $state(false);
	let results: ExternalGame[] = $state([]);

	async function addGame(event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement; }) {
		const gameId = Number(event.currentTarget.game.value);
		const platformId = Number(event.currentTarget.platform.value);

		const result = await addGameToCollection(gameId, platformId);
		// TODO show result in list
	}

	async function findGames(text: string) {
		loading = true;
		results = await searchExternalGames(text);
		hasSearched = true;
		loading = false;
	}

</script>

<h1>Add Game to Collection</h1>

<form class="search-form" onsubmit={(e) => e.preventDefault()}>
	<SearchField onchange={findGames} />
	<small>
		<a href="https://www.igdb.com/">
			Powered by
			<IGDBLogo />
		</a>
	</small>
</form>

{#if loading}
	<div class="status">
		<Icon type={IconType.Ellipses} />
	</div>
{:else if hasSearched && results.length == 0}
	<div class="status">
		<Icon type={IconType.Folder} />
		No Games Found
	</div>
{/if}

<ul class="games">
{#each results as result}
	<li>
		<div class="image">
			{#if result.imagePath}
				<img src={result.imagePath} alt="" />
			{:else}
				TODO No image
			{/if}
		</div>
		<div class="body">
			<h2>{result.title}</h2>
			<p>{result.description}</p>
			<small>20XX</small>
			<form onsubmit={addGame}>
				<input type="hidden" name="game" value={result.externalID} />
				<select name="platform">
					{#each result.platforms as platform}
						<option value={platform.id}>{platform.name}</option>
					{/each}
				</select>
				<button>
					<Icon type={IconType.Plus} />
					Add
				</button>
			</form>
		</div>
	</li>
{/each}
</ul>

<style>
	h2 {
		margin: 0.25em 0;
	}

	p {
		margin: 0.25em 0;
	}

	small {
		color: #999;
		font-style: italic;
	}

	small a {
		color: inherit;
		text-decoration: none;
	}

	small a:hover {
		text-decoration: underline;
	}

	.games {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.games img {
		display: block;
		width: 100%;
	}

	.games li {
		clear: both;
		display: flex;
		margin: 2em 0;
	}

	.games .image {
		margin-right: 1em;
		width: 150px;
	}

	.games .body {
		flex: 1;
	}

	.search-form {
		margin: 2em auto;
		max-width: 300px;
		text-align: right;
	}

	.status {
		color: #999;
		font-size: 16pt;
		font-style: italic;
		margin: 4em;
		text-align: center;
	}

	.status :global(svg) {
		margin-right: 0.5em;
	}
</style>
