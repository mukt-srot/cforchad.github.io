<script lang="ts">
	import { Problems } from "$lib/problems";
	import { Accordion, AccordionItem, CodeBlock } from '@skeletonlabs/skeleton';

    let showSol = Problems.map(() => false);
    let btnText = Problems.map(() => "Show Solution");

    function toggleSolution(index: number){
        showSol[index] = !showSol[index];
        btnText[index] = showSol[index] ? "Hide Solution" : "Show Solution";
    }
</script>

<div id="practice">
	{#each Problems as problem, index}
    <Accordion>
        <AccordionItem open class="variant-filled-primary-400">
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
                <div class="flex flex-col space-y-4">
                    <p>
                       {problem.description.text}
                    </p>
                    {#if problem.description.input != null}
                    <p>
                        Input:
                    </p>
                    <CodeBlock language="c" code = {problem.description.input}/>
                    {/if}

                    <p>
                        Output:
                    </p>
                    <CodeBlock language="c" code = {problem.description.output}/>

                   <button class="btn variant-ghost" on:click={() => toggleSolution(index)}>{btnText[index]}</button>
                   <div>
                    {#if showSol[index]}
                    <CodeBlock language="c" code = {problem.solution.code}/> 
                   {/if}
                   </div>

                </div>
            </svelte:fragment>
        </AccordionItem>
    </Accordion>
	{/each}
</div>