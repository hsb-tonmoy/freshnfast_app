<script context="module">
	export async function load({ fetch }) {
		const res1 = await fetch('/bowls.json');
		const res2 = await fetch('/smoothies.json');
		const res3 = await fetch('/shots.json');
		const bowls = await res1.json();
		const smoothies = await res2.json();
		const shots = await res3.json();

		return { props: { bowls, smoothies, shots } };
	}
</script>

<script>
	import Hero from '$lib/Layout/Homepage/Hero.svelte';
	import WhiteSectionTemplate from '$lib/Layout/Homepage/WhiteSectionTemplate.svelte';
	import BackgroundSectionTemplate from '$lib/Layout/Homepage/BackgroundSectionTemplate.svelte';
	import Bowls from '$lib/Layout/Homepage/Content/Bowls.svelte';
	import Discount from '$lib/Layout/Homepage/Content/Banner/Discount.svelte';
	import Smoothies from '$lib/Layout/Homepage/Content/Smoothies.svelte';
	import Shots from '$lib/Layout/Homepage/Content/Shots.svelte';

	export let bowls;
	export let smoothies;
	export let shots;

	const bowls_description =
		'Our salad bowls are are made with fresh and healthy ingredients. They are tasty and will satisfy all your nutrition goals in a very short time.';

	const smoothies_description =
		'Our smoothies not only look and taste delicious but they are also very healthy and contain no added sugar. Nothing is more refreshing after a heavy gym session.';
	const shots_description =
		'Our elixir shots are the perfect choice of drink after a fun nightout. They are made with ingredients that are heavy on electrolytes and will get you going in no time.';
</script>

<svelte:head>
	<title>Fresh N' Fast - Making Choices Healthier</title>
</svelte:head>

<main class="flex flex-col">
	<Hero />
	<WhiteSectionTemplate anchor="menu" heading="Our Bowls" description={bowls_description}>
		<Bowls {bowls} />
	</WhiteSectionTemplate>
	<Discount />
	<div class="mt-40">
		<BackgroundSectionTemplate
			anchor="smoothies"
			heading="Our Smoothies"
			description={smoothies_description}
		>
			<Smoothies {smoothies} />
		</BackgroundSectionTemplate>
	</div>
	<div class="">
		<WhiteSectionTemplate anchor="shots" heading="Elixir Shots" description={shots_description}>
			<Shots {shots} />
		</WhiteSectionTemplate>
	</div>
</main>
