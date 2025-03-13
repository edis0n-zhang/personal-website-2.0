<script lang="ts">
	export let slug = '';
	export let title: string;

	const id = title
		.toLowerCase()
		.replace(/[^a-zA-Z ]/g, '')
		.replace(/\s/g, '-');

	const href = slug ? `/posts/${slug}` : '#' + id;
</script>

<h3 class="text-3xl font-semibold" class:large={!slug} {id}>
	<a {href}>
		{title}
	</a>
</h3>

<style lang="postcss">
	.large {
		color: hsl(var(--important) / 1.1);
	}
</style>
