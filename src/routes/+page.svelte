<script lang="ts">
	import type { PageData } from './$types';

	import { spring } from 'svelte/motion';
	import broken_tulip from '$lib/images/broken_tulip_cropped.webp';

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

	import CaptionedImage from '$lib/components/CaptionedImage.svelte';

	export let data: PageData;
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
		<div class="h-full w-full rounded-lg border-2 border-[hsl(var(--important))] p-3">
			<h1 class="font-semibold text-[hsl(var(--important))]">hi, i'm edison,</h1>
			<br />
			<p>
				I'm a software engineer and student at UCSB. I love building things, competitive games, and
				reading blogs (suggestions very welcome).
			</p>
			<br />
			<p>I hope you enjoy your stay in my little corner of the internet!</p>
		</div>
		<div
			class="text-body mt-6 h-full w-full rounded-lg border-2 border-[hsl(var(--important))] p-3"
		>
			<div class="flex flex-col space-y-2">
				<h1 class="font-semibold text-[hsl(var(--important))]">recent writing</h1>
				{#each data.posts as post (post.title)}
					<a href="/writing/{post.slug}">
						<div class="flex justify-between">
							<span class="truncate pr-4 font-medium text-[hsl(var(--important))]"
								>{post.title}</span
							>
							<span class="font-mono text-[hsl(var(--midground))]"
								>{new Date(post.date).toLocaleDateString()}</span
							>
						</div>
					</a>
				{/each}
			</div>
		</div>

		<div class="mt-6">
			<CaptionedImage
				image={broken_tulip}
				caption="Broken tulip by Henriette Antoinette Vincent, 1820"
			/>
		</div>
	</div>
</main>
