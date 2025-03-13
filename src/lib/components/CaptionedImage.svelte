<script lang="ts">
	export let image: string;
	export let caption: string = '';
	export let alt: string = 'Image';
	export let long_image: boolean = false; // New parameter with default value false
</script>

<div class="flex flex-col items-center">
	<img
		src={image}
		{alt}
		class={`rounded-lg object-contain ${long_image ? 'w-2/3' : 'w-full'} mx-auto`}
	/>
	{#if caption}
		<div class="mt-2 text-left text-sm font-medium italic text-[hsl(var(--midground))]">
			{caption}
		</div>
	{/if}
</div>
