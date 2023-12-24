<script lang="ts">
	import '../app.postcss';
	import Navbar from '$lib/components/navbar.svelte';
	
	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { AppShell, storeHighlightJs } from '@skeletonlabs/skeleton';
	import c from 'highlight.js/lib/languages/c'; // c syntax highlighting
  import Footer from '$lib/components/footer.svelte';


	hljs.registerLanguage('c', c);
	storeHighlightJs.set(hljs);

</script>

<!-- Navbar -->
<AppShell>
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>	
	<div class="md:mx-12 mx-4">
		<slot />
	</div>
	<svelte:fragment slot="pageFooter">
	<Footer />
	</svelte:fragment>
			
</AppShell>
