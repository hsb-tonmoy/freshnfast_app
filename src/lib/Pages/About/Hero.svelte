<section class="hero">
	<section class="bg-overlay" />
	<div class="flex flex-col items-center z-10">
		<h1
			class="animate__animated animate__backInDown text-white text-6xl md:text-8xl lg:text-9xl font-playfair font-black"
		>
			About Us
		</h1>
	</div>
</section>

<style lang="postcss">
	.hero {
		@apply relative flex justify-center items-center h-[97vh] m-4 bg-cover bg-no-repeat bg-center bg-fixed bg-blend-darken overflow-hidden;
		background-image: url('/images/about-slide.jpg');
	}
	.bg-overlay {
		@apply absolute bg-black h-screen w-full opacity-50 z-[1];
	}
</style>
