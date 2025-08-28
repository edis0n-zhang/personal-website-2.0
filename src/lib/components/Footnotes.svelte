<script lang="ts">
  import { onMount } from 'svelte';
  import { citationsMap } from '$lib/citations';

  let pathname = '';
  let items = [] as { text: string }[];

  function refresh() {
    if (!pathname) return;
    items = citationsMap.getList(pathname);
  }

  onMount(() => {
    pathname = window.location.pathname;
    refresh();
  });
</script>

{#if items.length}
  <div class="mx-auto mt-4 w-full max-w-screen-sm px-3 md:max-w-[650px] lg:max-w-[750px] xl:max-w-[800px]">
    <ol class="list-decimal pl-6 font-mono text-xs text-[hsl(var(--foreground)/0.85)]">
      {#each items as c, i}
        <li id={`footnote-${i + 1}`} class="mb-2">
          {c.text}
        </li>
      {/each}
    </ol>
  </div>
{/if}
