<script>
	import { LinkedinLogo, EnvelopeClosed, GithubLogo } from 'svelte-radix';
</script>

<footer class="w-full pb-6 pt-3">
	<div
		class="mx-auto flex w-full max-w-screen-sm flex-row items-start justify-between px-3 md:max-w-[650px] lg:max-w-[750px] xl:max-w-[800px]"
	>
		<div class="flex items-center font-mono text-base">made with love by edison</div>
		<div class="flex items-center space-x-4">
			<a
				href="mailto:edison.zhang.forwarding@gmail.com"
				class="transition-colors duration-300 hover:text-[hsl(var(--important))]"
			>
				<EnvelopeClosed />
			</a>

			<a
				href="https://linkedin.com/in/edison--zhang/"
				target="_blank"
				rel="noopener noreferrer"
				class="transition-colors duration-300 hover:text-[hsl(var(--important))]"
			>
				<LinkedinLogo href="https://www.linkedin.com/in/edison--zhang/" />
			</a>

			<a
				href="https://github.com/edis0n-zhang"
				target="_blank"
				rel="noopener noreferrer"
				class="transition-colors duration-300 hover:text-[hsl(var(--important))]"
			>
				<GithubLogo />
			</a>
		</div>
	</div>
</footer>
