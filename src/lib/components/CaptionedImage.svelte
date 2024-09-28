<script lang="ts">
	import { spring } from 'svelte/motion';

	export let image: string;
	export let caption: string = 'Default caption'; // New exported prop with a default value
	export let alt: string = 'Image'; // Added alt text prop for accessibility

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
	class="relative"
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
>
	<img src={image} {alt} class="w-full rounded-lg object-scale-down" />
	<div
		class="absolute bottom-0 right-0 m-2 max-w-full rounded-lg bg-black bg-opacity-75 p-2 text-white transition-opacity duration-500 ease-in-out"
		style="opacity: {$captionOpacity};"
	>
		{caption}
	</div>
</div>
