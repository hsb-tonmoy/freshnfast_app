<script>
	import { cart_items } from '$lib/Cart/stores';

	const addToCart = (product) => {
		for (let item of $cart_items) {
			if (item.title === product.title) {
				product.quantity += 1;
				$cart_items = $cart_items;
				return;
			}
		}
		$cart_items = [...$cart_items, product];
	};

	export let items = [];

	$: items = items.slice(0, 6);
</script>

<span class="font-playfair text-3xl lg:text-5xl font-semibold">You Might Also Like</span>
<hr class="h-[5px] w-[20%] md:w-[15%] lg:w-[5%] bg-lightGreen mt-2 mb-12" />

<div class="w-full flex flex-wrap gap-x-8 gap-y-8 lg:gap-y-6">
	{#each items as item}
		<div class="item flex flex-col">
			<div class="image">
				<img
					src={item.img_url}
					alt={item.title}
					class="object-cover w-28 h-16 md:w-40 md:h-28 lg:w-80 lg:h-52 rounded-3xl"
				/>
			</div>
			<div class="details flex items-center justify-between mt-4 px-2">
				<div class="flex flex-col">
					<span class="title font-semibold font-playfair text-sm md:text-lg">{item.title}</span>
					<span class="price text-neutral-500 text-xs md:text-sm">${item.price}</span>
				</div>
				<span
					on:click={() => {
						addToCart(item);
					}}
					class="block w-4 h-4 md:w-7 md:h-7 text-lightGreen cursor-pointer"
					><svg viewBox="0 0 24 24" fill="currentColor"
						><path d="M0 0h24v24H0V0z" fill="none" /><path
							d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"
						/></svg
					></span
				>
			</div>
		</div>
	{/each}
</div>
