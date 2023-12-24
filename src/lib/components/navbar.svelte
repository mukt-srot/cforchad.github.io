<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton';

    let contentSpace = "flex flex-row md:space-x-12";
	let menudecor = "btn bg-secondary-500  bg-opacity-10 hover:bg-secondary-600 hover:bg-opacity-40 py-1 px-2 max-sm:text-xs mx-1";
	let logodecor = "btn btn-sm vatiant-filled max-sm:text-sm text-lg font-bold md:ml-6";
	let btndecor = "btn btn-sm vatiant-filled bg-primary-500 bg-opacity-80 hover:bg-opacity-90 hover:bg-primary-600 md:mr-6";
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		<button type="button" class={logodecor}><a href="/">Cforchad🗿</a></button>
	</svelte:fragment>
	<svelte:fragment slot="default">
		<div class={contentSpace}>
			<a href="#practice" class={menudecor}>Practice</a>
			<a href="/blog" class={menudecor}>Blog</a>
			<a href="/about" class={menudecor}>About</a>
		</div>	
	</svelte:fragment>
	<svelte:fragment slot="trail"><a href="/" type="button" class={btndecor}>Github</a></svelte:fragment>
</AppBar>