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

<div class="flex w-full flex-col items-center justify-center">
	<div
		class="mx-auto w-full max-w-screen-sm px-3 md:max-w-[650px] lg:max-w-[750px] xl:max-w-[800px]"
	>
		<div class="w-full rounded-lg border-2 border-[hsl(var(--important))] p-3">
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
</div>

<style lang="postcss">
	.markdown-content :global(h1) {
		@apply mb-4 mt-8 text-3xl font-bold;
		color: hsl(var(--important));
	}

	.markdown-content :global(h2) {
		@apply mb-3 mt-6 text-2xl font-semibold;
		color: hsl(var(--important));
	}

	.markdown-content :global(h3) {
		@apply mb-2 mt-4 text-xl font-medium;
		color: hsl(var(--important));
	}

	.markdown-content :global(p) {
		@apply mb-4 leading-relaxed;
		color: hsl(var(--foreground));
	}

	.markdown-content :global(strong) {
		@apply font-bold;
		color: hsl(var(--important));
	}

	.markdown-content :global(a) {
		@apply text-[hsl(var(--important))] hover:text-blue-700 dark:hover:text-blue-200;
		text-decoration-line: underline;
	}

	.markdown-content :global(ul),
	.markdown-content :global(ol) {
		@apply mb-4 pl-6;
	}

	.markdown-content :global(li) {
		@apply mb-2 list-disc;
		color: hsl(var(--foreground) / 0.9);
	}

	.markdown-content :global(blockquote) {
		@apply my-4 border-l-4 border-[hsl(var(--important))] pl-4 italic;
	}

	.markdown-content :global(code) {
		@apply rounded px-1 py-0.5 text-xs lg:text-base;
	}

	.markdown-content :global(pre) {
		@apply max-h-96 overflow-x-auto overflow-y-scroll rounded p-4;
	}
</style>
