<script lang="ts">
	import ExternalGame from "$lib/components/ExternalGame.svelte";
	import Icon from "$lib/components/Icon.svelte";
	import IGDBLogo from "$lib/components/IGDBLogo.svelte";
	import SearchField from "$lib/components/SearchField.svelte";
	import { addGameToCollection, searchExternalGames } from "$lib/api";
	import { IconType, type ExternalGame as TExternalGame } from "$lib/types";

	let loading: boolean = $state(false);
	let hasSearched: boolean = $state(false);
	let results: ExternalGame[] = $state([]);

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
			<ExternalGame game={result} />
		</li>
	{/each}
</ul>

<style>
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

	.games li {
		margin: 2em 0;
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
