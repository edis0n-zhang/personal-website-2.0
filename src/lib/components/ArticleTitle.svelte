<script lang="ts">
	export let slug = '';
	export let title: string;

	const id = title
		.toLowerCase()
		.replace(/[^a-zA-Z ]/g, '')
		.replace(/\s/g, '-');

	const href = slug ? `/posts/${slug}` : '#' + id;
</script>

{#if slug}
	<h3 class="text-2xl font-semibold" class:large={!slug} {id}>
		<a {href}>
			{title}
		</a>
	</h3>
{:else}
	<h2 class="text-2xl font-semibold" class:large={!slug} {id}>
		<a {href}>
			{title}
		</a>
	</h2>
{/if}
