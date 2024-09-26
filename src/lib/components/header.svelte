<script lang="ts">
	import LightSwitch from '$lib/components/lightswitch.svelte';
	import TypedName from '$lib/components/typedname.svelte';
	import { onMount } from 'svelte';

	let header: HTMLElement;
	let lastScrollY = 0;
	let ticking = false;

	function handleScroll() {
		if (!ticking) {
			window.requestAnimationFrame(() => {
				const currentScrollY = window.scrollY;

				if (currentScrollY > lastScrollY) {
					// Scrolling down
					header.style.opacity = '0';
				} else {
					// Scrolling up
					header.style.opacity = '1';
				}

				lastScrollY = currentScrollY;
				ticking = false;
			});

			ticking = true;
		}
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header
	bind:this={header}
	class="sticky top-0 flex justify-between px-6 pb-4 duration-700 ease-in-out lg:px-96"
>
	<div class="z-50 flex items-start items-baseline space-x-4 pt-3 font-mono decoration-2">
		<TypedName />
		<a href="/" class="text-l decoration-yellow-300 hover:underline md:text-xl">home</a>
		<a href="/writing" class="text-l decoration-yellow-300 hover:underline md:text-xl">writing</a>
	</div>
	<LightSwitch />
</header>
