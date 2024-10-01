<script lang="ts">
	import { spring } from 'svelte/motion';

	export let image: string;
	export let caption: string = '';
	export let alt: string = 'Image';
	export let long_image: boolean = false; // New parameter with default value false

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
</script>

<div
	class="relative flex justify-center"
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
>
	<img
		src={image}
		{alt}
		class={`rounded-lg object-contain ${long_image ? 'w-2/3' : 'w-full'} mx-auto`}
	/>
	<div
		class="absolute bottom-0 m-2 hyphens-auto whitespace-normal break-words rounded-lg bg-black bg-opacity-75 p-2 text-white transition-opacity duration-500 ease-in-out"
		style="opacity: {$captionOpacity};"
	>
		{caption}
	</div>
</div>
