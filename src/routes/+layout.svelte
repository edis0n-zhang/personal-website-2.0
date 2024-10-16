<script>
	import '../app.css';
	import '../css/prism-gruvbox-dark.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { ModeWatcher } from 'mode-watcher';
</script>

<Header />
<ModeWatcher />
<slot></slot>
<Footer />

<style>
	:global(body) {
		@apply transition-colors duration-300 ease-in-out;
	}
</style>
