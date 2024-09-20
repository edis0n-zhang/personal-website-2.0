<script lang="ts">
	import type { PageData } from './$types';
	import type { SvelteComponentTyped } from 'svelte/internal';
	import PageHead from '$lib/components/PageHead.svelte';
	import ArticleTitle from '$lib/components/ArticleTitle.svelte';
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';
	export let data: PageData;
	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<div class="flex flex-col items-start justify-center px-6 lg:px-96">
	<div class="w-full rounded-lg border-2 border-black p-3 dark:border-white">
		<PageHead title={data.frontmatter.title} description={data.frontmatter.description} />
		<ArticleTitle title={data.frontmatter.title} />
		<ArticleMeta author={data.frontmatter.author} date={data.frontmatter.date} />
		<svelte:component this={component} />
	</div>
</div>

<style>
</style>
