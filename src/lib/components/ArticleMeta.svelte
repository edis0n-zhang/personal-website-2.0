<script lang="ts">
	export let date: string;
	function getFormattedDate(date) {
		let year = date.getFullYear();
		let month = (1 + date.getMonth()).toString().padStart(2, '0');
		let day = date.getDate().toString().padStart(2, '0');

		return month + '-' + day + '-' + year;
	}

	const formattedDate = getFormattedDate(new Date(date));
</script>

<span class="font-mono text-gray-500 dark:text-gray-400">{new Date(date).toLocaleDateString()}</span
>
