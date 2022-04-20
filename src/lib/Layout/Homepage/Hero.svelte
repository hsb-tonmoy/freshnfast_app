<section class="hero">
	<section class="bg-overlay" />
	<div class="flex flex-col items-center z-10">
		<h1
			class="animate__animated animate__backInDown text-white text-6xl md:text-8xl lg:text-9xl font-playfair font-black text-center"
		>
			Fresh N' Fast
		</h1>
		<h3
			class="animate__animated animate__slideInUp text-xl md:text-3xl text-center font-playfair font-medium text-white/90 mt-4"
		>
			Making Choices Healthier
		</h3>
		<a
			href="#menu"
			class="animate__animated animate__slideInUp px-6 py-4 mt-12 overflow-hidden relative group cursor-pointer border-2 font-medium bg-white text-darkGreen"
		>
			<span
				class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-darkGreen top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease-in-out"
			/>
			<span
				class="relative uppercase text-darkGreen transition duration-300 group-hover:text-white ease"
				>View Our Menu</span
			>
		</a>
	</div>
</section>

<style lang="postcss">
	.hero {
		@apply relative flex justify-center items-center h-[97vh] m-4 bg-cover bg-no-repeat bg-center bg-fixed bg-blend-darken overflow-hidden;
		background-image: url('/images/bg-slider.jpg');
	}
	.bg-overlay {
		@apply absolute bg-black h-screen w-full opacity-50 z-[1];
	}
</style>
