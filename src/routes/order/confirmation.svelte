<script lang="ts">
	import { GoogleMap } from '@beyonk/svelte-googlemaps';
	import { cart_items } from '$lib/Cart/stores';

	const freshnfast = { lat: 42.28160343514766, lng: -85.62355345906587 };
	const options = { position: freshnfast };

	let zoom_level = 15;

	$: price = $cart_items.reduce((sum, item) => sum + item.price * item.quantity, 0);
	$: tax = price * 0.06;
	$: total = price + tax;
</script>

<svelte:head>
	<title>Fresh 'N Fast - Order Confirmed!</title>
</svelte:head>

<main class="flex flex-wrap h-screen">
	<div class="sidebar flex flex-col w-full lg:w-[20%] px-12 overflow-y-auto py-6">
		<div id="logo" class="self-center">
			<a href="/">
				<img
					class={`transition-all ease-in-out duration-500 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mt-8`}
					src="/images/logo.png"
					alt="FreshNFast"
				/>
			</a>
		</div>
		<div class="flex flex-col mt-14">
			<span class="font-semibold text-2xl text-lightGreen">Thank you for your order!</span>
			<span class="text-base text-neutral-500 mt-2"
				>Your order is being prepared. It may take anywhere from 5-15 minutes. We will notify you
				via email once your order is ready for pickup</span
			>
		</div>
		<div class="receipt flex flex-col mt-14">
			<h3 class="text-darkGreen text-2xl font-medium">Order Receipt</h3>
			<hr class="h-[5px] w-[18%] bg-lightGreen mt-2 mb-6" />
			<div class="inline-flex text-sm gap-x-2">
				<span class="font-semibold text-darkGreen">Order No.:</span> # 0000-5128-8
			</div>
			<div class="inline-flex text-sm gap-x-2 mt-4">
				<span class="font-semibold text-darkGreen">Customer Name:</span> Trent Boult
			</div>
			<div class="inline-flex text-sm gap-x-2">
				<span class="font-semibold text-darkGreen">Customer Phone:</span> (269) 270 1841
			</div>
			<div class="inline-flex text-sm gap-x-2 mt-2">
				<span class="font-semibold text-darkGreen">Order Type:</span> Carryout
			</div>
			<div class="inline-flex text-sm gap-x-2">
				<span class="font-semibold text-darkGreen">Payment Method:</span> At Store
			</div>
			<span class="font-semibold text-darkGreen mt-8">Items:</span>
			<div class="flex flex-col gap-y-8 mt-4">
				{#each $cart_items as item}
					<div class="item flex justify-between items-center">
						<div class="flex gap-x-4">
							<img
								src={item.img_url}
								alt={item.title}
								class="object-cover w-12 h-12 rounded-full"
							/>
							<div class="flex flex-col">
								<span class="font-medium text-base">{item.title}</span>
								<span class="text-netural-500 text-sm">${item.price}</span>
							</div>
						</div>
						<div class="quantity">
							<span class="font-semibold text-sm">{item.quantity}</span>
						</div>
					</div>
				{/each}
			</div>
			<div class="mt-16">
				<div class="flex justify-between items-center">
					<span class="uppercase font-bold text-darkGreen">Price</span><span
						class="text-black font-medium">${price}</span
					>
				</div>
				<div class="flex justify-between items-center">
					<span class="uppercase font-bold text-darkGreen">Tax</span><span
						class="text-black font-medium">${Math.round(tax * 100) / 100}</span
					>
				</div>
				<div class="flex justify-between items-center">
					<span class="uppercase font-bold text-darkGreen">Total</span><span
						class="text-black font-medium">${Math.round(total * 100) / 100}</span
					>
				</div>
			</div>
		</div>
	</div>

	<div id="map" class="map w-full lg:w-[80%]">
		<GoogleMap
			center={freshnfast}
			bind:zoom={zoom_level}
			{options}
			apiKey="AIzaSyBatL5dWUxr4XMFqPUyEkoMWxa-rOVV5Qs"
		/>
	</div>
</main>

<style>
	.sidebar {
		box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
	}
</style>
