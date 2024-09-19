<script lang="ts">
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
	class="sticky top-0 z-50 flex items-start items-baseline space-x-4 px-6 pb-4 pt-3 duration-700 ease-in-out lg:px-96"
>
	<h1 class="pr-2 text-xl font-semibold text-black">edison_zhang</h1>
	<a href="/" class="text-xl hover:underline">home</a>
	<a href="/writing" class="text-xl hover:underline">writing</a>
</header>
