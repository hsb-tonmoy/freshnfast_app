<script>
	import ColumnOne from './ColumnOne.svelte';
	import ColumnTwo from './ColumnTwo.svelte';
	import ColumnThree from './ColumnThree.svelte';
</script>

<footer class="w-full px-8 md:px-0 py-20 bg-[#F9F9FA]">
	<div class="max-w-5xl mx-auto flex flex-wrap items-center gap-x-20 gap-y-12">
		<div class="w-full md:w-[35%]">
			<ColumnOne />
		</div>
		<div class="w-full md:w-[20%]">
			<ColumnTwo />
		</div>
		<div class="w-full md:w-[20%]">
			<ColumnThree />
		</div>
	</div>
</footer>
