<script>
	import '../app.css';
	import '../css/prism-gruvbox-dark.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';

	let cssLoaded = false;

	onMount(() => {
		// Wait for all stylesheets to load
		Promise.all(
			Array.from(document.styleSheets).map((styleSheet) => {
				if (styleSheet.href) {
					return new Promise((resolve, reject) => {
						const link = document.querySelector(`link[href="${styleSheet.href}"]`);
						if (link.sheet) {
							resolve();
						} else {
							link.onload = () => resolve();
							link.onerror = () => reject();
						}
					});
				}
				return Promise.resolve();
			})
		).then(() => {
			cssLoaded = true;
		});
	});
</script>

{#if cssLoaded}
	<Header />
	<ModeWatcher />
	<slot></slot>
	<Footer />
{:else}
	<div class="loading">Loading...</div>
{/if}

<style>
	:global(body) {
		@apply transition-colors duration-300 ease-in-out;
	}

	.loading {
		@apply fixed inset-0 flex items-center justify-center text-lg font-medium;
	}
</style>
