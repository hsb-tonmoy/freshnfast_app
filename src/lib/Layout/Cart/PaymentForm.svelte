<script>
	import { fly } from 'svelte/transition';
</script>

<span class="font-playfair text-2xl font-semibold">How do you want to pay?</span>
<hr class="h-[5px] w-[18%] bg-lightGreen mt-2 mb-12" />

<div class="flex flex-col gap-y-8">
	<a
		href="/order/confirmation"
		in:fly={{ x: 200, delay: 400 }}
		class="inline-flex items-center overflow-hidden text-white bg-darkGreen rounded group"
	>
		<span
			class="px-6 py-8 text-white bg-lightGreen group-hover:bg-lightGreen/70 flex items-center justify-center"
		>
			<svg
				class="w-6 h-6"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				><path d="M0 0h24v24H0V0z" fill="none" /><path
					d="M18.36 9l.6 3H5.04l.6-3h12.72M20 4H4v2h16V4zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z"
				/></svg
			>
		</span>
		<span class="pl-4 pr-5 py-2.5">Pay at the store</span>
	</a>

	<a
		href="/orderconfirmation"
		in:fly={{ x: 200, delay: 600 }}
		class="inline-flex items-center overflow-hidden text-white bg-darkGreen rounded group"
	>
		<span
			class="px-6 py-8 text-white bg-lightGreen group-hover:bg-lightGreen/70 flex items-center justify-center"
		>
			<svg
				class="w-6 h-6"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				><path d="M0 0h24v24H0V0z" fill="none" /><path
					d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"
				/></svg
			>
		</span>
		<span class="pl-4 pr-5 py-2.5">Pay in advance</span>
	</a>
</div>

<style lang="postcss">
</style>
