<script>
  import '../app.css';
  import '../css/prism-gruvbox-dark.css';
  import Header from '$lib/components/header.svelte';
  import Footer from '$lib/components/footer.svelte';
  import { ModeWatcher } from 'mode-watcher';
  import { afterNavigate } from '$app/navigation';
  import { citationsMap } from '$lib/citations';

  afterNavigate(() => {
    // Clear citations on each navigation so they are scoped to the current page
    citationsMap.clear();
  });
</script>

<Header />
<ModeWatcher defaultMode={'light'} />
<slot></slot>
<Footer />
