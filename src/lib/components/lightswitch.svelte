<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import Lightbulb from './lightbulb.svelte';
	import { toggleMode } from 'mode-watcher';

	let chainY = tweened(0, {
		duration: 150,
		easing: cubicOut
	});

	async function animateChain() {
		await chainY.set(10);
		await chainY.set(0);
	}

	function toggleDarkMode() {
		animateChain();
		toggleMode();
	}
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
</style>
