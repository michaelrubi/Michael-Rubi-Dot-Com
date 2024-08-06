<script lang="ts">
import { page } from "$app/stores";
import { caseStudies, getAdjacentStudies } from "$lib/caseStudies";
import { currentTheme } from "$lib/index.svelte";
import CSicon from "$lib/img/CSicon.svelte";

let processes: HTMLDivElement;
let processHeight: number = $state(0);

const study = $derived(caseStudies.find((s) => s.slug === $page.params.slug));
const {previous, next} = $derived(getAdjacentStudies($page.params.slug));
// const next = $derived(getAdjacentStudies($page.params.slug).next);

function processImageHeight() {
    const process = study?.process;
    const images = process?.images;
    if (!images || images.length === 0) return;

    const containerWidth = processes.offsetWidth;
    const gap = (images.length - 1) * 16; // 16px gap between images
    const availableWidth = containerWidth - gap;

    let totalAspectRatio = 0;
    const imagePromises = images.map(image => {
        return new Promise<number>((resolve) => {
            const img = new Image();
            img.onload = () => {
                const aspectRatio = img.width / img.height;
                totalAspectRatio += aspectRatio;
                resolve(aspectRatio);
            };
            img.src = image.src;
        });
    });

    Promise.all(imagePromises).then(aspectRatios => {
        const height = availableWidth / totalAspectRatio;
        processHeight = Math.min(height, 382); // Cap the height at 382px
        console.log('Calculated processHeight:', processHeight);
    });
}
</script>

<svelte:window onload={processImageHeight} onresize={processImageHeight}/>

<svelte:head>
    <title>{study?.title} - {study?.subTitle}</title>
    <meta name="description" content={study?.subTitle}>
</svelte:head>

{#if study}
    <article>
        <section id="csHero">
            <div class="wrapper">
                <div class="text">
                    <h1>{study.title}</h1>
                    <span>{study.subTitle}</span>
                </div>
                {#if study.hero.length > 1 && !currentTheme.dark}
                <img src={study.hero[1].src} alt={study.hero[1].alt}>
                {:else}
                <img src={study.hero[0].src} alt={study.hero[0].alt}>
                {/if}
            </div>
        </section>
        <section class="bgProblem">
            <div class="wrapper">
                <div class="background">
                    <h2>Background</h2>
                    <p>{study.background}</p>
                </div>
                <div class="problem">
                    <h2>Problem</h2>
                    {#each study.problem as problem}
                        <p>{problem}</p>
                    {/each}
                </div>
            </div>
        </section>
        {#if study.process?.text}
        <section class="processes" >
            <div class="wrapper">
                <h2>Process</h2>
                <div class="process-cards" bind:this={processes} style="--img-height: {processHeight}px">
                    {#each study.process.text as process}
                    <div class="process">
                        <h3>{#if process.icon}<CSicon icon={process.icon} />{/if}{process.title}</h3>
                        <p>{process.body}</p>
                    </div>
                    {/each}
                </div>
                <div class="images">
                    {#each study.process.images as image}
                    <img src={image.src} alt={image.alt}>
                    {/each}
                </div>
            </div>
        </section>
        {/if}
        {#if study.results?.text}
        <section class="results">
            <div class="wrapper">
                <h2>Results</h2>
                <div class="results-cards">
                    {#each study.results.text as result}
                        <div class="result">
                            <h3>{#if result.icon}<CSicon icon={result.icon} />{/if}{result.title}</h3>
                            <p>{result.body}</p>
                        </div>
                    {/each}
                </div>
                <div class="images">
                    {#each study.results.images as image}
                        <div>
                            <img src={image.src} alt={image.alt}>
                        </div>
                    {/each}
                </div>
            </div>
        </section>
        {/if}
    </article>
    <section class="navigation">
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
    </section>
    {:else}
    <h1>Case Study Not Found</h1>
    {/if}

<style>
    #csHero {
        position: relative;
    }
    #csHero .text{
        position: absolute;
        top: 2rem;
        left: 7.06rem;
    }
    #csHero h1 {
        transform: translateX(-2px);
        line-height: .8;
    }
    #csHero span {
        font: var( --txt-cs-span);
    }
    #csHero img {
        width: clamp(288px, 100%, 1440px);
        height: 100%;
    }

    @media (max-width: 768px) {
        #csHero .text {
            position: static;
            padding-inline: clamp(0.5rem, -0.0282rem + 2.2535vw, 1rem);
        }
    }
    article h2 {
        display: flex;
        gap: .5rem;
    }
    article section:not(#csHero) {
        padding-block: 1rem;
    }
    h2::after {
        content: "";
        display: block;
        flex: 1 0 0;
        align-self: stretch;
        background: var(--pri-more);
    }
    .bgProblem .wrapper, .process-cards, .results-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
        gap: 2rem;
    }
    .process, .result {
        margin-block: 1rem;
    }

    .processes .wrapper {
        container-type: inline-size;
        container-name: processes;
    }

    article h3 {
        display: flex;
        align-items: center;
    }

    .processes .images {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        height: var(--img-height, 382px);
        overflow: hidden;
    }

    .processes img {
        height: 100%;
        object-fit: cover;
        object-position: top;
        flex: 1;
    }

    @container processes (max-width: 600px) {
        .processes .images {
            flex-direction: column;
            gap: 0.5rem;
            height: auto;
        }

        .processes img {
            width: 100%;
            height: auto;
        }
    }
    article p {
        font: var(--txt-p);
        line-height: 1.6;
    }

    .results .wrapper {
        container-type: inline-size;
        container-name: results;
    }
    .results .images {
        width: calc(100% - 2rem);
        display: grid;
        grid-template-columns: repeat(4, minmax(228px, 1fr));
        grid-template-rows: auto;
        gap: 1rem;
    }

    .results .images div:first-child {
        grid-column: span 2;
        grid-row: span 2;
    }
    
    @container results (max-width: 960px) {
        .results .images {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(4, 1fr);
        }
    }
    
    @container results (max-width: 782px) {
        .bgProblem .wrapper, .process-cards, .results-cards {
            grid-template-columns: repeat(auto-fit, minmax(50ch, 1fr));
        }
        .results .images {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
        }
        .results .images div:first-child {
            grid-column: inherit;
            grid-row: inherit;
        }
    }

    .results .images div {
        place-self: center;
        aspect-ratio: 1/1;
        align-content: center;
        justify-content: center;
    }
    
    .results img {
        width: 100%;
    }

    .navigation {
        display: flex;
        justify-content: center;
        gap: 2rem;
        padding-block: 2rem;
    }

    .navigation a, .navigation span {
        font: var(--txt-p);
        color: var(--txt-clr);
    }

    .navigation a:hover, .navigation a:focus {
        color: var(--primary);
    }

    .navigation span {
        opacity: .25;
    }

</style>