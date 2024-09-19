<script lang="ts">
	import image from '$lib/assets/broken_tulip_cropped.webp';
</script>

<main class="flex flex-col items-center justify-center space-y-6 px-6 lg:px-96">
	<div class="h-full w-full rounded-lg border-2 border-black p-3">
		<h1 class="font-semibold">hi, i'm edison,</h1>
		<br />
		<p>
			i'm a software engineer and student at ucsb. i love building things, competitive games, and
			reading blogs (suggestions very welcome).
		</p>
		<br />
		<p>welcome to my little corner of the internet, i hope you enjoy your stay!</p>
	</div>
	<div class="h-full w-full rounded-lg border-2 border-black p-3">
		<h1 class="font-semibold">recent writing</h1>
		<br />
	</div>
	<img src={image} alt="a broken tulip" class="h-[40vh] w-full rounded-lg object-cover" />
</main>
