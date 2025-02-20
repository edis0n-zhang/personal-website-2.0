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

<div class="flex flex-col items-start justify-center px-3 lg:px-96">
	<div class="w-full rounded-lg border-2 p-3">
		<div class="flex flex-col items-start space-y-4">
			<div class="flex flex-col items-start space-y-2">
				<PageHead title={data.frontmatter.title} description={data.frontmatter.description} />
				<ArticleTitle title={data.frontmatter.title} />
				<ArticleMeta author={data.frontmatter.author} date={data.frontmatter.date} />
			</div>
			<div class="markdown-content min-w-full max-w-full">
				<svelte:component this={component} />
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.markdown-content :global(h1) {
		@apply mb-4 mt-8 text-3xl font-bold;
	}

	.markdown-content :global(h2) {
		@apply mb-3 mt-6 text-2xl font-semibold;
	}

	.markdown-content :global(h3) {
		@apply mb-2 mt-4 text-xl font-medium;
	}

	.markdown-content :global(p) {
		@apply mb-4 leading-relaxed;
	}

	.markdown-content :global(a) {
		@apply text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200;
	}

	.markdown-content :global(ul),
	.markdown-content :global(ol) {
		@apply mb-4 pl-6;
	}

	.markdown-content :global(li) {
		@apply mb-2 list-disc;
	}

	.markdown-content :global(blockquote) {
		@apply my-4 border-l-4 border-gray-300 pl-4 italic dark:border-gray-600;
	}

	.markdown-content :global(code) {
		@apply rounded px-1 py-0.5 text-xs lg:text-base;
	}

	.markdown-content :global(pre) {
		@apply max-h-96 overflow-x-auto overflow-y-scroll rounded p-4;
	}
</style>
