<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Icon from '$lib/components/Icon.svelte';
	import { IconType } from '$lib/types';

	let { children } = $props();

	const links = [
		{ uri: '/collection', title: 'Collection', icon: IconType.Box },
		{ uri: '/wishlist', title: 'Wishlist', icon: IconType.Copywriting },
		{ uri: '/settings', title: 'Settings', icon: IconType.Cog }
	];
</script>

<div id="container">
	<header>
		<h1>
			<a href="/">
				<img id="logo" src="/logo-light.png" alt="GameBox" />
			</a>
		</h1>

		<nav>
			<ul>
				{#each links as link}
					<li>
						<a href={link.uri} class={$page.url.pathname.startsWith(link.uri) ? 'active' : ''}>
							<Icon type={link.icon} />
							{link.title}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</header>

	<main>{@render children()}</main>
</div>

<style>
	header {
		box-sizing: border-box;
		background: #222;
		color: #f2f2f2;
		min-height: 100%;
		padding: 20px;
	}

	h1 {
		margin: 20px 0 30px;
	}

	main {
		padding: 20px;
	}

	ul {
		font-size: 14pt;
		font-weight: bold;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	ul li {
		margin: 0.5em 0;
	}

	ul a {
		border-radius: 0.5em;
		color: inherit;
		display: block;
		padding: 0.75em 1em;
		text-decoration: none;
	}

	ul a.active,
	ul a:hover {
		background: #f2f2f2;
		color: #222;
	}

	ul a :global(svg) {
		margin-right: 0.25em;
	}

	#container {
		display: grid;
		grid-template-columns: 300px auto;
		min-height: 100vh;
	}
</style>
