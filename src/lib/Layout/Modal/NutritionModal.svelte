<script>
	import { toast } from '@zerodevx/svelte-toast';
	import { cart_items } from '$lib/Cart/stores';
	import { spoon_fork, close } from '$lib/svg/home';
	export let hidden = true;
	export let items = [];
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
