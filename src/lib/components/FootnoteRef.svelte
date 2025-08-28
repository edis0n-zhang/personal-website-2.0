<script lang="ts">
  import { onMount } from 'svelte';
  import { citationsMap } from '$lib/citations';

  export let text: string;
  // Optional group override if needed; defaults to current pathname
  export let group: string | undefined = undefined;

  let index: number | null = null;
  let pathname = '';

  onMount(() => {
    pathname = group ?? window.location.pathname;
    index = citationsMap.register(pathname, text);
  });
</script>

{#if index}
  <sup>
    <a
      href={`#footnote-${index}`}
      aria-label={`Footnote ${index}`}
      class="font-mono no-underline hover:no-underline text-inherit"
      style="text-decoration: none;"
      >[{index}]</a
    >
  </sup>
{/if}
