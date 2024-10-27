<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
	import { IconType } from "$lib/types";

	interface Props {
		onchange: (text: string) => any;
	}

	let { onchange = () => {} }: Props = $props();

	function handleOnInput(event: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		if (event == null || event.currentTarget == null) {
			return;
		}

		onchange(event.currentTarget.value);
	}
</script>

<div class="search-field">
	<input type="search" name="q" placeholder="Search..." oninput={handleOnInput} />
	<button>
		<Icon type={IconType.MagnifyingGlass} />
	</button>
</div>

<style>
	button {
		background: none;
		border: 0;
	}

	input {
		border: 0;
		background: none;
		font-family: inherit;
		font-size: 11pt;
	}

	.search-field {
		background: white;
		border-radius: 1em;
		display: flex;
		flex: 1;
		padding: 0.5em 1em;
		max-width: 300px;
	}

	.search-field input {
		flex: 1;
	}

	.search-field :global(svg) {
		color: #ddd;
	}
</style>
