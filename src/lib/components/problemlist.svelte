<script lang="ts">
	import { Problems } from "$lib/problems";
	import { Accordion, AccordionItem, CodeBlock } from '@skeletonlabs/skeleton';
</script>

<div>
	{#each Problems as problem}
    <Accordion>
        <AccordionItem close class="variant-filled-primary-400">
            <svelte:fragment slot="lead">
                <h1 class="text-lg font-bold">{problem.id}</h1>
            </svelte:fragment>
            <svelte:fragment slot="summary">
            <div class="flex row justfy-between">
                <div class="mr-auto">{problem.title}</div>
                <a href={problem.source.url} class="anchor bg-primary-400 bg-opacity-25 rounded-lg px-1">{problem.source.name} </a>  
            </div>    
            </svelte:fragment>
            <svelte:fragment slot="content">
                <div>
                   {problem.description.text}
                   <CodeBlock language="c" code = {problem.description.input}/>
                   <CodeBlock language="c" code = {problem.description.output}/>
                </div>
            </svelte:fragment>
        </AccordionItem>
    </Accordion>
	{/each}
</div>