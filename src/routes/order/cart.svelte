<script context="module">
	export async function load({ fetch }) {
		const res1 = await fetch('/bowls.json');
		const res2 = await fetch('/smoothies.json');
		const res3 = await fetch('/shots.json');
		let bowls = await res1.json();
		let smoothies = await res2.json();
		let shots = await res3.json();

		bowls = bowls.slice(-4);
		smoothies = smoothies.slice(-4);
		shots = shots.slice(-2);

		return { props: { bowls, smoothies, shots } };
	}
</script>

<script>
	import CartHeader from '$lib/Layout/Cart/CartHeader.svelte';
	import CartBody from '$lib/Layout/Cart/CartBody.svelte';
	import YourOrder from '$lib/Layout/Cart/YourOrder.svelte';

	export let bowls;
	export let smoothies;
	export let shots;

	let items = [...bowls, ...smoothies, ...shots];
</script>

<svelte:head>
	<title>Fresh 'N Fast - Cart</title>
</svelte:head>

<main class="flex flex-wrap gap-y-16">
	<div class="content-body w-full lg:w-[75%] px-12 lg:px-40">
		<CartHeader />
		<div class="main mt-8 md:mt-20">
			<CartBody {items} />
		</div>
	</div>
	<div class="sidebar w-full lg:w-[25%]">
		<YourOrder />
	</div>
</main>
