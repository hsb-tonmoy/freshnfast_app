<script>
	import { cart_items, cart_count } from '$lib/Cart/stores';
	export let item;

	const plusItem = () => {
		for (let prod of $cart_items) {
			if (prod.title === item.title) {
				prod.quantity += 1;
				$cart_items = $cart_items;
				return;
			}
		}
	};

	const minusItem = () => {
		for (let prod of $cart_items) {
			if (prod.title === item.title) {
				if (item.quantity > 1) {
					item.quantity -= 1;
					$cart_items = $cart_items;
				} else {
					$cart_items = $cart_items.filter((cartItem) => cartItem != item);
				}
				return;
			}
		}
	};
</script>

<div class="item flex shadow-md rounded">
	<div
		style={`background-image: url(${item.img_url})`}
		class="image w-1/5 bg-cover bg-center rounded"
	>
		<span />
	</div>
	<div class="details flex justify-between w-4/5 px-4 py-2">
		<div class="flex flex-col gap-y-[2px] overflow-hidden">
			<span class="font-playfair text-base font-medium">{item.title}</span>
			<span class="text-xs text-neutral-500">{item.calories} KCAL</span>
			<span class="font-playfair text-sm font-medium">${item.price}</span>
		</div>
		<div class="counter flex flex-col items-center justify-center gap-y-[2px]">
			<span class="cursor-pointer" on:click={plusItem}>
				<svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
				</svg>
			</span>
			<button class="cursor-default bg-darkGreen text-white w-4 h-5 text-xs">{item.quantity}</button
			>
			<span on:click={minusItem} class="cursor-pointer">
				<svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
				</svg>
			</span>
		</div>
	</div>
</div>
