<script lang="ts">
	import { onMount } from 'svelte';
	import { tick } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import LightbulbLight from './lightbulb_light.svelte';
	import LightbulbDark from './lightbulb_dark.svelte';

	let isDarkMode: boolean = false; // Initial mode

	// Check user's preferred color scheme on component mount
	onMount(() => {
		if (window.matchMedia('(prefers-color-scheme: light)').matches) {
			isDarkMode = true;
			updateTheme();
		}
	});

	// Update the theme by adding/removing the 'dark' class on the root element
	function updateTheme() {
		const root = document.documentElement;
		if (isDarkMode) {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
	}

	// Tweened value for chain position
	let chainY = tweened(0, {
		duration: 150,
		easing: cubicOut
	});

	// Toggle dark mode and animate chain
	async function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		updateTheme();
		await animateChain();
	}

	// Animate the chain moving down and up
	async function animateChain() {
		await chainY.set(20); // Move chain down
		await chainY.set(0); // Move chain back up
	}
</script>

<div class="flex items-start">
	<div class="pr-2">
		<LightbulbLight />
	</div>
	<div
		class="chain right-6 bg-black dark:bg-white md:right-96"
		on:click={toggleDarkMode}
		style="transform: translateY({$chainY}px);"
	></div>
</div>

<style global>
	/* Style for the chain */
	.chain {
		width: 2px;
		height: 70px;
		cursor: pointer;
		position: fixed;
		top: -30px;
	}
</style>
