<script lang="ts">
	import LightSwitch from '$lib/components/lightswitch.svelte';
	import TypedName from '$lib/components/typedname.svelte';
</script>

<header class="flex justify-between px-6 pb-4 lg:px-96">
	<div class="z-50 flex items-start items-baseline space-x-4 pt-3 font-mono">
		<TypedName />
		<a href="/" class="text-l decoration-yellow-300 decoration-2 hover:underline md:text-xl">home</a
		>
		<a href="/writing" class="text-l decoration-yellow-300 decoration-2 hover:underline md:text-xl"
			>writing</a
		>
	</div>
	<LightSwitch />
</header>
