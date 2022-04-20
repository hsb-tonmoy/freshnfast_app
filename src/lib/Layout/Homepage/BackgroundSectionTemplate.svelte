<script>
	export let section_bg = '/images/bg-drinks.jpg';
	export let bg_overlay = 'bg-white';
	export let bg_overlay_opacity = 'opacity-90';
	export let small_heading = 'Tasty and Healthy';
	export let heading = '';
	export let description =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.';
	export let anchor = '';
</script>

<section
	id={anchor}
	class="flex flex-col relative items-center justify-center pt-24 pb-20 bg-cover bg-no-repeat bg-center bg-fixed bg-blend-darken"
	style={`background-image: url(${section_bg})`}
>
	<section
		class={`absolute ${bg_overlay} h-full w-full top-0 right-0 ${bg_overlay_opacity} z-[1]`}
	/>
	<div class="content text-center max-w-7xl px-6 md:px-0 z-10">
		<h6 class="text-sm uppercase mb-3 tracking-wide text-lightGreen">{small_heading}</h6>
		<h3 class="text-5xl md:text-6xl font-playfair font-bold mb-6">{heading}</h3>
		<div class="description max-w-2xl mb-20">
			<p class="text-base font-light font-sans leading-relaxed text-[#555]">{description}</p>
		</div>
	</div>
	<div class="z-10">
		<slot />
	</div>
</section>
