<script>
	import Card from './Cards/Card.svelte';

	export let shots = [];
</script>

<div class="w-full flex flex-wrap justify-center gap-x-8 gap-y-8 lg:gap-y-0 px-4 lg:px-12">
	{#each shots as shot}
		<Card item={shot} />
	{/each}
</div>
