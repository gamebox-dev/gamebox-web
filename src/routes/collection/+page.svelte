<script lang="ts">
	import GameGrid from "$lib/components/GameGrid.svelte";
	import type { Game } from "$lib/types";

	const games: Game[] = [
		{
			title: "A Vampyre Story",
			image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3diy.webp",
		},
		{
			title: "American McGee Presents: Scrapland",
			image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2gb2.webp",
		},
		{
			title: "Age of Empires III",
			image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1xy6.webp",
		},
		{
			title: "Discworld Noir",
			image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3h5y.webp",
		},
		{
			title: "Gunman Chronicles",
			image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co730v.webp",
		},
		{
			title: "Halo: Combat Evolved",
			image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2r2r.webp",
		},
		{
			title: "Heavy Metal: F.A.K.K. 2",
			image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co23hs.webp",
		},
		{
			title: "Indiana Jones and the Infernal Machine",
			image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co294n.webp",
		},
		{
			title: "Kiss: Psycho Circus - The Nightmare Child",
			image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co40po.webp",
		},
		{ title: "Oni", image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lcb.webp" },
		{
			title: "Vampire: The Masquerade - Bloodlines",
			image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2n14.webp",
		},
		{
			title: "Warhammer 40,000: Space Marine",
			image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tx9.webp",
		},
	];
</script>

<GameGrid {games} />
