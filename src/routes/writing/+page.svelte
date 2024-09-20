<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data);
</script>

<main class="flex flex-col items-center justify-center space-y-6 px-6 lg:px-96">
	<div class="h-full max-h-screen w-full space-y-6 rounded-lg border-2 border-black p-3">
		<div class="flex flex-col space-y-2">
			{#each data.posts as post (post.title)}
				<a href="/writing/{post.slug}">
					<div class="flex justify-between text-lg">
						<span class="font-semibold">{post.title}</span>
						<span class="font-mono text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</main>
