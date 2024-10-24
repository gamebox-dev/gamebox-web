<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
	import { addGameToCollection } from "$lib/api";
	import { IconType } from "$lib/types";
	import type { ExternalGame } from "$lib/types";

	interface Props {
		game: ExternalGame;
	}

	let { game }: Props = $props();

	async function addGame(event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }) {
		event.preventDefault();

		const gameId = Number(event.currentTarget.game.value);
		const platformId = Number(event.currentTarget.platform.value);

		const result = await addGameToCollection(gameId, platformId);
		// TODO show result in list
	}
</script>

<div class="game">
	<div class="image">
		{#if game.imagePath}
			<img src={game.imagePath} alt="" />
		{:else}
			TODO No image
		{/if}
	</div>
	<div class="body">
		<h2>{game.title}</h2>
		<p>{game.description}</p>
		<small>20XX</small>
		<form onsubmit={addGame}>
			<input type="hidden" name="game" value={game.externalID} />
			<select name="platform">
				{#each game.platforms as platform}
					<option value={platform.id}>{platform.name}</option>
				{/each}
			</select>
			<button>
				<Icon type={IconType.Plus} />
				Add
			</button>
		</form>
	</div>
</div>

<style>
	h2 {
		margin: 0.25em 0;
	}

	p {
		margin: 0.25em 0;
	}

	img {
		display: block;
		width: 100%;
	}

	.game {
		background: #fff;
		border-radius: 0.25em;
		box-shadow:
			rgba(0, 0, 0, 0.1) 0px 2px 1px -1px,
			rgba(0, 0, 0, 0.05) 0px 1px 1px 0px,
			rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
		display: flex;
		padding: 1em;
	}

	.image {
		margin-right: 1em;
		width: 150px;
	}

	.body {
		flex: 1;
	}
</style>
