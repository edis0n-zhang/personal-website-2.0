<script>
	import '../app.css';
	import '../css/prism-gruvbox-dark.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<Header />
<slot></slot>
<Footer />
