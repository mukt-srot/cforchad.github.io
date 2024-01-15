<script lang="ts">
    import { onMount } from "svelte";
	import { Problems } from "$lib/problems";
	import { Accordion, AccordionItem, CodeBlock } from '@skeletonlabs/skeleton';
    
    let currentPage = 1;
    const ProblemsPerPage = 7;

    let displayedProblems: any[] = [];

    onMount(() => {
    updateDisplayedProblems();
    });

    function updateDisplayedProblems(){
        const start = (currentPage - 1) * ProblemsPerPage;
        const end = start + ProblemsPerPage;
        displayedProblems = Problems.slice(start, end);
    }

    function nextPage(){
        currentPage++;
        updateDisplayedProblems();
    }

    function previousPage(){
        currentPage--;
        updateDisplayedProblems();
    }

    let showSol = Problems.map(() => false);
    let btnText = Problems.map(() => "Show Solution");

    function toggleSolution(index: number){
        showSol[index] = !showSol[index];
        btnText[index] = showSol[index] ? "Hide Solution" : "Show Solution";
    }
</script>

<div id="practice">
	{#each displayedProblems as problem, index(problem.id)}
    <Accordion>
        <AccordionItem close class="hover:bg-tertiary-600 hover:backdrop-blur-xl hover:bg-opacity-20">
            <svelte:fragment slot="lead">
                <h1 class="text-lg font-bold">{problem.id}</h1>
            </svelte:fragment>
            <svelte:fragment slot="summary">
            <div class="flex row justfy-between">
                <div class="mr-auto">{problem.title}</div>
                <a href={problem.source.url} class="anchor bg-primary-400 bg-opacity-25 max-md:h-1/2 rounded-lg px-1">{problem.source.name} </a>  
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

    <!--Page Change buttons-->
    <div class="flex flex-row space-x-4 items-center justify-center mt-2">  
        <button class="btn variant-ghost-tertiary" on:click={previousPage} disabled={currentPage == 1}>Previous</button>
        <button class="btn variant-ghost-tertiary" on:click={nextPage} disabled={currentPage * ProblemsPerPage >= Problems.length}>Next</button>
    </div>
</div>