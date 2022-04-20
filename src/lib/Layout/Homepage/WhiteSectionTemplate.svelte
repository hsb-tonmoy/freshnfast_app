<script>
	export let small_heading = 'Tasty and Healthy';
	export let heading = '';
	export let anchor = '';
	export let description =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.';
</script>

<section id={anchor} class="flex flex-wrap justify-center pt-24 pb-20">
	<div class="content text-center max-w-7xl px-6 md:px-0">
		<h6 class="text-sm uppercase mb-3 tracking-wide text-lightGreen">{small_heading}</h6>
		<h3 class="text-5xl md:text-6xl font-playfair font-bold mb-6">{heading}</h3>
		<div class="description max-w-2xl mb-20">
			<p class="text-base font-light font-sans leading-relaxed text-[#555]">{description}</p>
		</div>
	</div>
	<slot />
</section>
