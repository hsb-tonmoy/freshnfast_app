<script>
	import { arrow_down, highlight_abstract } from '$lib/svg/shapes';
	let promotion_image = '/images/10-discount.png';
</script>

<section class="pt-20 md:mt-20 md:mx-20">
	<div
		class="flex flex-col lg:flex-row justify-center lg:justify-start relative bg-[#f7f5e2] h-[500px] lg:h-[350px] rounded-xl px-6 md:px-0"
	>
		<span class="absolute text-gray-200 block w-20 h-20 top-[30%] left-1"
			>{@html highlight_abstract}</span
		>
		<div class="w-full lg:w-2/5">
			<img
				class="lg:absolute left-10 lg:-top-40 h-[300px] md:h-[500px] lg:h-[600px] -mt-[120px] md:-mt-[200px] lg:mt-0"
				src={promotion_image}
				alt="10% Discount"
			/>
		</div>
		<div class="w-full lg:w-3/5 h-full">
			<div class="flex flex-col w-full md:h-5/6 justify-center px-4 md:px-12 lg:px-40 pt-6 md:py-0">
				<h2
					class="text-2xl md:text-3xl lg:text-5xl font-bold font-sans tracking-tight text-gray-900"
				>
					Get 10% Discount <span class="font-semibold italic">On Every Order</span>
				</h2>
				<p class="text-sm md:text-base lg:text-lg mt-2 lg:mt-4 font-normal text-gray-700">
					With Your Gym Membership Card
				</p>
				<button class="relative self-start mt-12 lg:mt-6 px-6 py-3 ml-2 font-bold text-white group">
					<span
						class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-lightGreen group-hover:translate-x-0 group-hover:translate-y-0"
					/>
					<span class="absolute inset-0 w-full h-full border-4 border-darkGreen" />
					<span class="relative">Order Now!</span>
				</button>
			</div>
			<div class="flex justify-end items-end h-1/6 mr-2 mb-2">
				<p class="text-xs text-black/70">*Partnered with OrangeTheory and Planet Fitness</p>
			</div>
		</div>
		<span class="absolute text-[#E27676] block w-14 h-14 top-0 right-4">{@html arrow_down}</span>
	</div>
</section>
