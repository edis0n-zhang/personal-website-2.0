<script>
	import '../app.css';
	import '../css/prism-gruvbox-dark.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { ModeWatcher } from 'mode-watcher';
</script>

<svelte:head>
	<link rel="preload" href={import.meta.resolve('../app.css')} as="style" />
	<link rel="preload" href={import.meta.resolve('../css/prism-gruvbox-dark.css')} as="style" />
</svelte:head>

<Header />
<ModeWatcher defaultMode={'light'} />
<slot></slot>
<Footer />
