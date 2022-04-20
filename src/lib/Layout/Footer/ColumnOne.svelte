<script>
	import { phone } from '$lib/svg/footer';
</script>

<div class="flex flex-col gap-y-8">
	<div id="logo" class="">
		<a href="/">
			<img
				class={`transition-all ease-in-out duration-500 w-16 h-16 md:w-24 md:h-24 lg:w-36 lg:h-36`}
				src="/images/logo.png"
				alt="FreshNFast"
			/>
		</a>
	</div>
	<div class="description leading-loose text-neutral-600 text-sm">
		Fresh 'N Fast Inc. is a new health-conscious restaurant on the corner of Howard St. and W.
		Michigan Ave. Fresh 'N Fast is serving healthy meals quickly to capture the young and active
		demographic in the area.
	</div>
	<div class="call flex gap-x-2 items-center text-neutral-800 font-bold">
		<span class="w-6 h-6">{@html phone}</span>
		<span class="text-lg">+1 269 270 1880</span>
	</div>
</div>
