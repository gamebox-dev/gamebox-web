<script lang="ts">
	import "../app.css";
	import { page } from "$app/stores";
	import Icon from "$lib/components/Icon.svelte";
	import { IconType } from "$lib/types";

	let { children } = $props();
</script>

<header>
	<h1>
		<a href="/">
			<img id="logo" src="/logo-light.png" alt="GameBox" />
		</a>
	</h1>

	<nav>
		<ul>
			<li><a href="/collection">Collection</a></li>
			<li><a href="/wishlist">Wishlist</a></li>
			<li><a href="/settings"><Icon type={IconType.Cog} /></a></li>
		</ul>
	</nav>

	<form onsubmit={(e) => e.preventDefault()}>
		<input type="search" name="q" placeholder="Search" />
		<button>
			<Icon type={IconType.MagnifyingGlass} />
		</button>
	</form>
</header>

<main>{@render children()}</main>

<footer>
	&copy; GameBox 2024 &middot; vX.X.X &middot; Powered by <a href="https://igdb.com">IGDB</a>
</footer>

<style>
	header,
	main {
		margin: 0 auto;
		max-width: 1136px;
		padding: 1em;
	}

	footer {
		background: var(--background-secondary);
		color: var(--text-footer);
		font-size: 10pt;
		padding: 1em;
		text-align: center;
	}

	footer a {
		color: white;
		text-decoration: none;
	}

	footer a:hover {
		text-decoration: underline;
	}

	header {
		align-items: center;
		display: flex;
	}

	header button {
		background: none;
		color: inherit;
		cursor: pointer;
		border: 0;
		padding: 0.5em;
		margin: 0 0 0 0.5em;
	}

	header button:hover {
		color: white;
	}

	header form {
		background: var(--background-field);
		border-radius: 3px;
		display: flex;
		flex: 0 0 12em;
		font-size: 12pt;
		padding: 0.25em 0.5em;
	}

	header h1 {
		flex: 0 0 6em;
		margin: 0;
	}

	header input {
		background: none;
		border: 0;
		color: white;
		font-size: inherit;
		padding: 0;
	}

	header input:focus {
		outline: none;
	}

	header input::placeholder {
		color: var(--field-placeholder);
		opacity: 1;
	}

	header nav {
		flex: 1;
		font-weight: bold;
		margin: 0 1em;
	}

	header nav a {
		color: inherit;
		text-decoration: none;
	}

	header nav a:hover {
		color: white;
	}

	header ul {
		list-style: none;
		margin: 0;
		padding: 0;
		text-align: right;
	}

	header li {
		display: inline-block;
		margin: 0 0.5em;
	}

	main {
		min-height: calc(100vh - 154px);
	}
</style>
