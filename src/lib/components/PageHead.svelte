<script lang="ts">
	export let title: string;
	export let description: string;

	const siteTitle = 'edison zhang';
	const formattedTitle = title ? `${title} | ${siteTitle}` : siteTitle;
</script>

<svelte:head>
	<title>{formattedTitle}</title>

	<meta property="og:site_name" content={formattedTitle} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
</svelte:head>
