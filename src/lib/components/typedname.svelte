<script lang="ts">
	import { onMount } from 'svelte';
	let displayText = '';
	const fullName = 'edison_zhnag';
	const lastThreeCharacters = 'ang';
	const typingSpeed = 150;
	const deletingSpeed = 150;
	const pauseDuration = 1000;

	function sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function animateTyping() {
		// Type out "edison zhnag"
		for (let i = 0; i < fullName.length; i++) {
			displayText += fullName[i];
			await sleep(typingSpeed);
		}
		await sleep(pauseDuration);
		// Delete last three characters
		for (let i = 0; i < 3; i++) {
			displayText = displayText.slice(0, -1);
			await sleep(deletingSpeed);
		}
		await sleep(pauseDuration);
		// Retype the correct ending
		for (let i = 0; i < lastThreeCharacters.length; i++) {
			displayText += lastThreeCharacters[i];
			await sleep(typingSpeed);
		}
	}

	onMount(() => {
		animateTyping();
	});
</script>

<a href="/">
	<div
		class="relative pr-2 font-mono text-lg font-semibold text-[hsl(var(--important))] lg:text-xl"
	>
		<span class="invisible">{fullName}</span>
		<span class="absolute left-0 top-0">{displayText}</span>
	</div>
</a>
