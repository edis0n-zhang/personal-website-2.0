<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data);
</script>

<svelte:head>
	<title>edison zhang</title>
	<meta name="description" content="edison's little corner of the internet" />
	<meta property="og:title" content="edison zhang" />
</svelte:head>

<main class="flex w-full flex-col items-center justify-center space-y-6">
	<div
		class="mx-auto w-full max-w-screen-sm px-3 md:max-w-[650px] lg:max-w-[750px] xl:max-w-[800px]"
	>
		<div
			class="h-full max-h-screen w-full space-y-6 rounded-lg border-2 border-[hsl(var(--important))] p-3"
		>
			<div class="flex flex-col space-y-2">
				{#each data.posts as post (post.title)}
					<a href="/writing/{post.slug}">
						<div class="flex justify-between text-lg">
							<span class="font-semibold">{post.title}</span>
							<span class="font-mono text-[hsl(var(--midground))]"
								>{new Date(post.date).toLocaleDateString()}</span
							>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</main>
