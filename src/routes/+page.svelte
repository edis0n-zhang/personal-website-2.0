<script lang="ts">
	import type { PageData } from './$types';

	import { spring } from 'svelte/motion';
	import image from '$lib/images/broken_tulip_cropped.webp';

	let hovered = false;
	const captionOpacity = spring(0, {
		stiffness: 0.1,
		damping: 0.4
	});

	$: {
		if (hovered) {
			captionOpacity.set(1);
		} else {
			captionOpacity.set(0);
		}
	}

	export let data: PageData;
</script>

<main class="flex flex-col items-center justify-center space-y-6 px-6 lg:px-96">
	<div class="h-full w-full rounded-lg border-2 border-black p-3 dark:border-white">
		<h1 class="font-semibold">hi, i'm edison,</h1>
		<br />
		<p>
			i'm a software engineer and student at ucsb. i love building things, competitive games, and
			reading blogs (suggestions very welcome).
		</p>
		<br />
		<p>i hope you enjoy your stay in my little corner of the internet!</p>
	</div>
	<div class="h-full w-full rounded-lg border-2 border-black p-3 dark:border-white">
		<div class="flex flex-col space-y-2">
			<h1 class="font-semibold">recent writing</h1>
			{#each data.posts as post (post.title)}
				<a href="/writing/{post.slug}">
					<div class="flex justify-between">
						<span class="font-medium">{post.title}</span>
						<span class="font-mono text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
	<div
		class="relative w-full"
		on:mouseenter={() => (hovered = true)}
		on:mouseleave={() => (hovered = false)}
	>
		<img src={image} alt="a broken tulip" class="h-[40vh] w-full rounded-lg object-cover" />
		<div
			class="absolute bottom-2 right-2 max-w-full rounded-lg bg-black bg-opacity-75 p-2 text-white transition-opacity duration-500 ease-in-out"
			style="opacity: {$captionOpacity};"
		>
			a broken tulip; my favorite flower
		</div>
	</div>
</main>
