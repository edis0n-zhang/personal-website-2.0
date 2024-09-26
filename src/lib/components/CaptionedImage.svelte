<script lang="ts">
	import { spring } from 'svelte/motion';

	export let image: string;

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

<div class="" on:mouseenter={() => (hovered = true)} on:mouseleave={() => (hovered = false)}>
	<img src={image} alt="a broken tulip" class="h-[40vh] w-full rounded-lg object-cover" />
	<div
		class="absolute bottom-2 right-2 max-w-full rounded-lg bg-black bg-opacity-75 p-2 text-white transition-opacity duration-500 ease-in-out"
		style="opacity: {$captionOpacity};"
	>
		a broken tulip; my favorite flower
	</div>
</div>
