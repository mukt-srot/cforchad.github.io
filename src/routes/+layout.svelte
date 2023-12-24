<script lang="ts">
	import '../app.postcss';
	import Navbar from '$lib/components/navbar.svelte';
	
	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import c from 'highlight.js/lib/languages/c'; // c syntax highlighting


	hljs.registerLanguage('c', c);
	storeHighlightJs.set(hljs);

</script>

<!-- Navbar -->
<Navbar />
<div class="md:mx-12 mx-4">
	<slot />
</div>

