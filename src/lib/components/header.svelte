<script lang="ts">
	import LightSwitch from '$lib/components/lightswitch.svelte';
	import TypedName from '$lib/components/typedname.svelte';
</script>

<header class="w-full pb-4">
	<div
		class="mx-auto flex w-full max-w-screen-sm justify-between px-3 md:max-w-[650px] lg:max-w-[750px] xl:max-w-[800px]"
	>
		<div class="z-50 flex items-start items-baseline space-x-4 pt-3 font-mono">
			<TypedName />
			<a
				href="/"
				class="text-lg decoration-yellow-300 decoration-2 hover:underline md:text-xl lg:text-xl"
				>home</a
			>
			<a
				href="/writing"
				class="text-lg decoration-yellow-300 decoration-2 hover:underline md:text-xl lg:text-xl"
				>writing</a
			>
		</div>
		<LightSwitch />
	</div>
</header>
