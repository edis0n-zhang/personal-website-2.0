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

<main class="flex flex-col items-center justify-center space-y-6 px-3 lg:px-96">
	<div class="h-full max-h-screen w-full space-y-6 rounded-lg border-2 p-3">
		<div class="flex flex-col space-y-2">
			{#each data.posts as post (post.title)}
				<a href="/writing/{post.slug}">
					<div class="flex justify-between text-lg">
						<span class="font-semibold">{post.title}</span>
						<span class="font-mono text-gray-500 dark:text-gray-400"
							>{new Date(post.date).toLocaleDateString()}</span
						>
					</div>
				</a>
			{/each}
		</div>
	</div>
</main>
