<script>
	import { toast } from '@zerodevx/svelte-toast';
	import { cart_items } from '$lib/Cart/stores';
	import { spoon_fork, close } from '$lib/svg/home';
	export let hidden = true;
	export let item = {};

	const addToCart = (product) => {
		for (let item of $cart_items) {
			if (item.title === product.title) {
				product.quantity += 1;
				$cart_items = $cart_items;
				return;
			}
		}
		$cart_items = [...$cart_items, product];
		hidden = true;
		toast.push('Added to your order!', {
			theme: {
				'--toastBackground': '#48BB78',
				'--toastBarBackground': '#2F855A'
			}
		});
	};
</script>

<div
	on:click|self={() => (hidden = !hidden)}
	class:hidden
	id="defaultModal"
	tabindex="-1"
	aria-hidden="true"
	class="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10001] w-full md:inset-0 h-modal md:h-screen bg-white/90"
>
	<div class="content-body relative w-full max-w-2xl h-full md:h-auto bg-white rounded-md">
		<div
			on:click={() => (hidden = !hidden)}
			class="close absolute flex justify-center items-center bg-white w-11 h-11 rounded-full -top-[1.3rem] -right-[1.3rem] shadow-md z-[10002] cursor-pointer"
		>
			<span class="w-7 h-7 text-rose-700 hover:text-lightGreen font-light">{@html close}</span>
		</div>
		<div
			class="relative rounded-t-md rounded-b-none group h-[450px] lg:h-[500px] bg-cover bg-center bg-no-repeat"
			style={`background-image: url(${item.img_url})`}
		>
			<span />
			<div
				class="absolute flex flex-col items-center justify-center w-full h-full rounded-t-md rounded-b-none group-hover:opacity-0 bg-black/70 transition-all ease-in-out duration-500"
			>
				<span class="font-playfair text-white text-5xl font-medium"> {@html item.title} </span>
				<span class="text-white text-xl font-semibold mt-2"> {@html item.calories}KCAL </span>
				<span class="bg-white text-sm rounded-3xl text-darkGreen px-4 py-2 mt-4"
					>${@html item.price}</span
				>
			</div>
		</div>
		<div class="description p-4 border-b border-dashed border-gray-300">
			<span class="text-neutral-800 text-sm">{item.description}</span>
		</div>
		<div class="nutrients flex justify-start items-start p-4 gap-x-8">
			<span class="w-7 h-7 text-lightGreen"> {@html spoon_fork} </span>
			<div class="">
				<span class="font-black text-sm text-black uppercase pb-4">Nutrients</span>
				<div class="flex flex-col flex-wrap gap-y-3 max-h-[150px]">
					{#each item.nutrients as nutrient}
						<span class="text-sm text-neutral-600 pr-16">
							{nutrient.name}
							{nutrient.value}
						</span>
					{/each}
				</div>
			</div>
		</div>
		<div class="border-t border-dashed border-gray-300 py-6 text-center">
			<button
				on:click={() => addToCart(item)}
				class="px-6 py-2 bg-lightGreen hover:bg-darkGreen text-white uppercase text-sm"
				>Add to Order</button
			>
		</div>
	</div>
</div>

<style>
	:root {
		--toastContainerTop: 8rem;
	}

	.content-body {
		box-shadow: 1px 1px 20px 1px rgba(60, 60, 60, 0.15);
	}
</style>
