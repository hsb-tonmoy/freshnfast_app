<script>
	import ItemModal from '$lib/Layout/Modal/ItemModal.svelte';

	export let item;

	let modalHidden = true;

	function handleClick() {
		modalHidden = !modalHidden;
	}
</script>

{#if !modalHidden}
	<ItemModal {item} bind:hidden={modalHidden} />
{/if}

<div class="card group max-w-xs lg:max-w-sm bg-white rounded-xl">
	<div
		class="relative rounded-xl h-[450px] lg:h-[500px] bg-cover bg-center bg-no-repeat"
		style={`background-image: url(${item.img_url})`}
	>
		<span />
		<div
			class="absolute flex items-center justify-center w-full h-full rounded-xl opacity-0 group-hover:opacity-100 bg-black/50 transition-all ease-in-out duration-200"
		>
			<button
				on:click={handleClick}
				class="bg-white/90 hover:bg-white text-darkGreen uppercase text-sm px-6 py-4 shadow"
				>View Details</button
			>
		</div>
	</div>
	<div class="p-5">
		<a href="#">
			<h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 ">{item.title}</h5>
		</a>
		<p class="mb-3 font-normal text-sm text-gray-700 ">
			{item.description}
		</p>
	</div>
</div>

<style>
	.card {
		box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
	}
</style>
