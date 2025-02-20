<script>
	import '../app.css';
	import '../css/prism-gruvbox-dark.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { ModeWatcher } from 'mode-watcher';
</script>

<svelte:head>
	<style>
		/* This ensures Tailwind styles are loaded before content */
		:root {
			display: none;
		}
		:root:has(body) {
			display: block;
		}
	</style>
</svelte:head>

<Header />
<ModeWatcher defaultMode={'light'} />
<slot></slot>
<Footer />
