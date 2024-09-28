<script>
	import { LinkedinLogo, EnvelopeClosed, GithubLogo } from 'svelte-radix';
</script>

<footer class="flex flex-row items-start justify-between px-6 pb-6 pt-6 lg:px-96">
	<div class="flex items-center font-mono text-sm lg:text-base">made with love by edison</div>
	<div class="flex items-center space-x-4">
		<a
			href="mailto:edison.zhang.forwarding@gmail.com"
			class="transition-colors duration-300 hover:text-gray-700"
		>
			<EnvelopeClosed />
		</a>

		<a
			href="https://linkedin.com/in/edison--zhang/"
			target="_blank"
			rel="noopener noreferrer"
			class="transition-colors duration-300 hover:text-gray-700"
		>
			<LinkedinLogo href="https://www.linkedin.com/in/edison--zhang/" />
		</a>

		<a
			href="https://github.com/edis0n-zhang"
			target="_blank"
			rel="noopener noreferrer"
			class="transition-colors duration-300 hover:text-gray-700"
		>
			<GithubLogo />
		</a>
	</div>
</footer>
