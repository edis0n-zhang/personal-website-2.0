<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import Lightbulb from './lightbulb.svelte';

	let isDarkMode: boolean = false;

	function updateTheme(dark: boolean) {
		document.documentElement.classList.toggle('dark', dark);
		localStorage.setItem('theme', dark ? 'dark' : 'light');
	}

	let chainY = tweened(0, {
		duration: 150,
		easing: cubicOut
	});

	async function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		updateTheme(isDarkMode);
		await animateChain();
	}

	async function animateChain() {
		await chainY.set(10);
		await chainY.set(0);
	}

	onMount(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			isDarkMode = storedTheme === 'dark';
		} else {
			isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		}
		updateTheme(isDarkMode);
	});
</script>

<div class="relative flex cursor-pointer items-center" on:click={toggleDarkMode}>
	<div class="pr-2">
		<Lightbulb />
	</div>
	<div
		class="chain bg-[#1F1004] dark:bg-[#F3F1E8]"
		style="transform: translateY({$chainY}px);"
	></div>
</div>

<style>
	.chain {
		width: 2px;
		height: 60px;
		position: absolute;
		top: -20px;
		right: 0;
	}

	:global(body) {
		@apply transition-colors duration-300 ease-in-out;
	}
</style>
