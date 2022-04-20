<script>
	import { fly } from 'svelte/transition';
	import PaymentForm from './PaymentForm.svelte';

	let isPaying = false;

	const handleClick = () => {
		isPaying = true;
	};
</script>

<div class="py-12">
	{#if !isPaying}
		<span class="font-playfair text-2xl font-semibold">How do you want your order?</span>
		<hr class="h-[5px] w-[18%] bg-lightGreen mt-2 mb-12" />

		<div class="flex flex-col gap-y-8">
			<button
				on:click={handleClick}
				in:fly={{ x: 200, delay: 400 }}
				class="inline-flex items-center overflow-hidden text-white bg-darkGreen rounded group"
			>
				<span
					class="px-6 py-8 text-white bg-lightGreen group-hover:bg-lightGreen/70 flex items-center justify-center"
				>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
						/>
					</svg>
				</span>
				<span class="pl-4 pr-5 py-2.5">Carryout</span>
			</button>

			<button
				on:click={handleClick}
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
							d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"
						/><circle cx="7.5" cy="14.5" r="1.5" /><circle cx="16.5" cy="14.5" r="1.5" /></svg
					>
				</span>
				<span class="pl-4 pr-5 py-2.5">Curbside Pickup</span>
			</button>

			<button
				on:click={handleClick}
				in:fly={{ x: 200, delay: 800 }}
				class="inline-flex items-center overflow-hidden text-white bg-darkGreen rounded group"
			>
				<span
					class="px-6 py-8 text-white bg-lightGreen group-hover:bg-lightGreen/70 flex items-center justify-center"
				>
					<svg
						class="w-6 h-6"
						xmlns="http://www.w3.org/2000/svg"
						enable-background="new 0 0 24 24"
						viewBox="0 0 24 24"
						fill="currentColor"
						><g><rect fill="none" height="24" width="24" /></g><g
							><g
								><path
									d="M7.82,16H15v-1c0-2.21,1.79-4,4-4h0.74l-1.9-8.44C17.63,1.65,16.82,1,15.89,1H12v2h3.89l1.4,6.25c0,0-0.01,0-0.01,0 c-2.16,0.65-3.81,2.48-4.19,4.75H7.82c-0.48-1.34-1.86-2.24-3.42-1.94c-1.18,0.23-2.13,1.2-2.35,2.38C1.7,16.34,3.16,18,5,18 C6.3,18,7.4,17.16,7.82,16z M5,16c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S5.55,16,5,16z"
								/><path
									d="M19,12c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S20.66,12,19,12z M19,16c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1 S19.55,16,19,16z"
								/><polygon points="11,20 7,20 13,23 13,21 17,21 11,18" /></g
							></g
						></svg
					>
				</span>
				<span class="pl-4 pr-5 py-2.5">Delivery</span>
			</button>
		</div>
	{:else}
		<PaymentForm />
	{/if}
</div>

<style lang="postcss">
</style>
