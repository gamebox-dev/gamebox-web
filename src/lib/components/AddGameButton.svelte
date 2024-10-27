<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
	import { IconType } from "$lib/types";

	interface Props {
		href: string;
	}

	let { href }: Props = $props();
</script>

<a {href}>
	<Icon type={IconType.Plus} />
	<span>Add Game</span>
</a>

<style>
	a {
		background: #c00;
		border-radius: 2em;
		box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
		bottom: 20px;
		color: #fff;
		cursor: pointer;
		display: block;
		font-family: inherit;
		font-size: 15pt;
		overflow: hidden;
		padding: 0.5em 0.7em;
		position: fixed;
		right: 20px;
		text-align: left;
		transition: width 0.5s;
		width: 1em;
	}

	a:hover {
		background: #d30000;
		width: 7.5em;
	}

	a:active {
		background: #b00;
	}

	span {
		margin-left: 1em;
		position: absolute;
		width: 5em;
	}
</style>
