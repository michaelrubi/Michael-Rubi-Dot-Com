<!-- [Slug].svelte -->
<script lang="ts">
    import { page } from "$app/stores";
    import {caseStudies, getAdjacentStudies, type CaseStudy} from "$lib/caseStudies";
    import { currentTheme } from "$lib/index.svelte"

    const study: CaseStudy = $derived(caseStudies.find(s => s.slug === $page.params.slug));

    const { previous, next } = getAdjacentStudies($page.params.slug);
</script>

<svelte:head>
    <title>{study?.title} - {study?.subTitle}</title>
    <meta name="description" content={study?.subTitle}>
</svelte:head>

{#if study}
    <article>
        <section id="csHero">
            <h1>{study.title}</h1>
            <span>{study.subTitle}</span>
            {#if study.hero.length > 1 && !currentTheme.dark}
            <img src={study.hero[1].src} alt={study.hero[1].alt}>
            {:else}
            <img src={study.hero[0].src} alt={study.hero[0].alt}>
            {/if}
        </section>
        <section class="bgProblem">
            <div class="background">
                <h2>Background</h2>
                <p>{study.background}</p>
            </div>
            <div class="problem">
                <h2>Problem</h2>
                <p>{study.problem}</p>
            </div>
        </section>
        {#if study.process?.text}
        <section class="processes">
            <h2>Process</h2>
            <div class="process-cards">
                {#each study.process.text as process}
                <div class="process">
                    <h3>{process.title}</h3>
                    <p>{process.body}</p>
                </div>
                {/each}
            </div>
            <div class="images">
                {#each study.process.images as image}
                <img src={image.src} alt={image.alt}>
                {/each}
            </div>
        </section>
        {/if}
        {#if study.results?.text}
        <section class="results">
            <h2>Results</h2>
            <div class="results-cards">
                {#each study.results.text as result}
                <div class="result">
                    <h3>{result.title}</h3>
                    <p>{result.body}</p>
                </div>
                {/each}
            </div>
            <div class="images">
                {#each study.results.images as image}
                <img src={image.src} alt={image.alt}>
                {/each}
            </div>
        </section>
        {/if}
    </article>
    <div class="navigation">
        {#if previous}
            <a href="/case-study/{previous.slug}">Previous</a>
        {:else}
            <span>Previous</span>
        {/if}
        {#if next}
            <a href="/case-study/{next.slug}">Next</a>
        {:else}
            <span>Next</span>
        {/if}
    </div>
    {:else}
    <h1>Case Study Not Found</h1>
    {/if}