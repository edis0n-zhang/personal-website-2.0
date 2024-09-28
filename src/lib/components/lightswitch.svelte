<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import Lightbulb from './lightbulb.svelte';

	let isDarkMode: boolean = false;

	onMount(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			isDarkMode = true;
			updateTheme();
		}
	});

	function updateTheme() {
		document.documentElement.classList.toggle('dark', isDarkMode);
	}

	let chainY = tweened(0, {
		duration: 150,
		easing: cubicOut
	});

	async function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		updateTheme();
		await animateChain();
	}

	async function animateChain() {
		await chainY.set(10);
		await chainY.set(0);
	}
</script>

<div class="relative flex cursor-pointer items-center" on:click={toggleDarkMode}>
	<div class="pr-2">
		<Lightbulb />
	</div>
	<div class="chain bg-black dark:bg-white" style="transform: translateY({$chainY}px);"></div>
</div>

<style>
	.chain {
		width: 2px;
		height: 60px;
		position: absolute;
		top: -20px;
		right: 0;
	}
</style>
