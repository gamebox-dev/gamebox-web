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
				<span>{game.title}</span>
			</a>
		</li>
	{/each}
</ul>

<style>
	a {
		display: block;
		color: white;
		font-size: 10pt;
		font-weight: bold;
		text-decoration: none;
	}

	a:hover span {
		opacity: 1;
	}

	img {
		display: block;
	}

	li {
		border: 1px solid var(--background-secondary);
		border-radius: 3px;
		display: inline-block;
		margin: 4px;
		overflow: hidden;
		position: relative;
		width: 133px;
	}

	span {
		align-items: center;
		background: rgba(0, 0, 0, 0.75);
		bottom: 0;
		display: flex;
		justify-content: center;
		left: 0;
		line-height: 1.5em;
		opacity: 0;
		padding: 1em;
		position: absolute;
		right: 0;
		top: 0;
		transition: opacity 0.2s;
	}

	ul {
		line-height: 0;
		list-style: none;
		margin: 0 -4px;
		padding: 0;
		text-align: center;
	}
</style>
