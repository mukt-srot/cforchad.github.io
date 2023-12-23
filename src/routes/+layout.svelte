<script lang="ts">
	import '../app.postcss';
	import { AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import c from 'highlight.js/lib/languages/c'; // c syntax highlighting

	hljs.registerLanguage('c', c);
	storeHighlightJs.set(hljs);
</script>

<!-- Navbar -->
<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead"><button type="button" class="btn btn-sm vatiant-filled">C for chad</button></svelte:fragment>
	<svelte:fragment slot="default">Practice</svelte:fragment>
	<svelte:fragment slot="trail"><a href="/" type="button" class="btn btn-sm vatiant-filled bg-secondary-600 bg-opacity-20 hover:bg-opacity-45">Github</a></svelte:fragment>
</AppBar>
<div class="mx-12">
	<slot />
</div>

