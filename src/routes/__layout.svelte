<script>
	import '../app.css';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import SiteHeader from '$lib/Layout/Header/SiteHeader.svelte';
	import SiteFooter from '$lib/Layout/Footer/SiteFooter.svelte';
</script>

<SiteHeader />
<slot />
<SiteFooter />

<SvelteToast />
