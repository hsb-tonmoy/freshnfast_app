<script>
	import Card from './Cards/Card.svelte';

	export let smoothies = [];
</script>

<div class="w-full flex flex-wrap justify-center gap-8 px-4 lg:px-12">
	{#each smoothies as smoothie}
		<Card item={smoothie} />
	{/each}
</div>
