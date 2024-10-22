<script lang="ts">
	// Icons from: https://github.com/iconic/open-iconic

	import { IconType } from '$lib/types';

	export let type: IconType;
</script>

{#if type == IconType.Box}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
		<path
			fill="currentColor"
			d="M0 0v1h8V0zm0 2v5.91c0 .05.04.09.09.09H7.9c.05 0 .09-.04.09-.09V2H5.02v1.03H2.99V2h-3z"
		/>
	</svg>
{:else if type == IconType.Clipboard}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
		<path
			fill="currentColor"
			d="M3.5 0c-.28 0-.5.22-.5.5V1h-.75c-.14 0-.25.11-.25.25V2h3v-.75C5 1.11 4.89 1 4.75 1H4V.5c0-.28-.22-.5-.5-.5M.25 1C.11 1 0 1.11 0 1.25v6.5c0 .14.11.25.25.25h6.5c.14 0 .25-.11.25-.25v-6.5C7 1.11 6.89 1 6.75 1H6v2H1V1z"
		/>
	</svg>
{:else if type == IconType.Cog}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
		<path
			fill="currentColor"
			d="M3.5 0l-.5 1.19c-.1.03-.19.08-.28.13l-1.19-.5-.72.72.5 1.19c-.05.1-.09.18-.13.28l-1.19.5v1l1.19.5c.04.1.08.18.13.28l-.5 1.19.72.72 1.19-.5c.09.04.18.09.28.13l.5 1.19h1l.5-1.19c.09-.04.19-.08.28-.13l1.19.5.72-.72-.5-1.19c.04-.09.09-.19.13-.28l1.19-.5v-1l-1.19-.5c-.03-.09-.08-.19-.13-.28l.5-1.19-.72-.72-1.19.5c-.09-.04-.19-.09-.28-.13l-.5-1.19h-1zm.5 2.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"
		/>
	</svg>
{:else if type == IconType.Copywriting}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
		<path
			fill="currentColor"
			d="M0 0v1h8V0zm0 2v1h5V2zm0 3v1h8V5zm0 2v1h6V7zm7.5 0c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5"
		/>
	</svg>
{:else if type == IconType.Ellipses}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
		<path fill="currentColor" d="M0 3v2h2V3zm3 0v2h2V3zm3 0v2h2V3z" />
	</svg>
{:else if type == IconType.Folder}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
		<path fill="currentColor" d="M0 0v2h8V1H3V0zm0 3v4.5c0 .28.22.5.5.5h7c.28 0 .5-.22.5-.5V3z" />
	</svg>
{:else if type == IconType.ListRich}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
		<path
			fill="currentColor"
			d="M0 0v3h3V0zm4 0v1h4V0zm0 2v1h3V2zM0 4v3h3V4zm4 0v1h4V4zm0 2v1h3V6z"
		/>
	</svg>
{:else if type == IconType.MagnifyingGlass}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
		<path
			fill="currentColor"
			d="M3.5 0c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5c.59 0 1.17-.14 1.66-.41a1 1 0 0 0 .13.13l1 1a1.02 1.02 0 1 0 1.44-1.44l-1-1a1 1 0 0 0-.16-.13c.27-.49.44-1.06.44-1.66 0-1.93-1.57-3.5-3.5-3.5zm0 1c1.39 0 2.5 1.11 2.5 2.5 0 .66-.24 1.27-.66 1.72-.01.01-.02.02-.03.03a1 1 0 0 0-.13.13c-.44.4-1.04.63-1.69.63-1.39 0-2.5-1.11-2.5-2.5s1.11-2.5 2.5-2.5z"
		/>
	</svg>
{:else if type == IconType.Plus}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
		<path fill="currentColor" d="M3 0v3H0v2h3v3h2V5h3V3H5V0z" />
	</svg>
{/if}

<style>
	svg {
		height: 1em;
		position: relative;
		top: 0.15em;
	}
</style>
