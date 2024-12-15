<!-- src/routes/case-study/[slug]/+page.svelte -->
<script lang="ts">
  import { page } from "$app/stores";
  import { caseStudies, getAdjacentStudies } from "$lib/caseStudies";
  import { currentTheme } from "$lib/index.svelte";
  import CSicon from "$lib/img/CSicon.svelte";
  import TransSection from "$lib/components/TransSection.svelte";

  // biome-ignore lint/style/useConst: <explanation>
  let processes: HTMLDivElement | undefined = $state(undefined);
  let processHeight: number = $state(0);

  const study = $derived(caseStudies.find((s) => s.slug === $page.params.slug));
  const { previous, next } = $derived(getAdjacentStudies($page.params.slug));

  function processImageHeight() {
    const process = study?.process;
    const images = process?.images;
    if (!images || images.length === 0) return;

    if (!processes) return;
    const containerWidth = processes.offsetWidth;
    const gap = (images.length - 1) * 16;
    const availableWidth = containerWidth - gap;

    let totalAspectRatio = 0;
    const imagePromises = images.map((image) => {
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

    Promise.all(imagePromises).then((aspectRatios) => {
      const height = availableWidth / totalAspectRatio;
      processHeight = Math.min(height, 382);
      console.log("Calculated processHeight:", processHeight);
    });
  }
</script>

<svelte:window onload={processImageHeight} onresize={processImageHeight} />

<svelte:head>
  <title>{study?.title} - {study?.subTitle}</title>
  <meta name="description" content={study?.subTitle} />
</svelte:head>

{#if study}
  <article>
    <section id="csHero">
      <div class="wrapper">
        <div
          class="text"
          class:alt-color={study.home.color}
          style:--bg-hero={study.home.bg}
          style:--txt-hero={study.home.color}
        >
          <h1>{study.title}</h1>
          <span>{study.subTitle}</span>
        </div>
        {#if study.hero.length > 1 && !currentTheme.dark}
          <img src={study.hero[1].src} alt={study.hero[1].alt} />
        {:else}
          <img src={study.hero[0].src} alt={study.hero[0].alt} />
        {/if}
      </div>
    </section>
    {#key study.slug}
      <TransSection newClass="bgProblem">
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
      </TransSection>
    {/key}
    {#if study.process?.text}
      {#key study.slug}
        <TransSection newClass="processes">
          <h2>Process</h2>
          <div
            class="process-cards"
            bind:this={processes}
            style:--img-height={processHeight + "px"}
          >
            {#each study.process.text as process}
              <div class="process">
                <h3>
                  {#if process.icon}
                    {#if process.dimensions}
                      <CSicon
                        icon={process.icon}
                        dimensions={process.dimensions}
                      />
                    {:else}
                      <CSicon icon={process.icon} />
                    {/if}
                  {/if}
                  {process.title}
                </h3>
                <p>{process.body}</p>
              </div>
            {/each}
          </div>
          <div class="images">
            {#each study.process.images as image}
              <img src={image.src} alt={image.alt} />
            {/each}
          </div>
        </TransSection>
      {/key}
    {/if}
    {#if study.results?.text}
      {#key study.slug}
        <TransSection newClass="results">
          <h2>Results</h2>
          <div class="results-cards">
            {#each study.results.text as result}
              <div class="result">
                <h3>
                  {#if result.icon}
                    {#if result.dimensions}
                      <CSicon
                        icon={result.icon}
                        dimensions={result.dimensions}
                      />
                    {:else}
                      <CSicon icon={result.icon} />
                    {/if}
                  {/if}
                  {result.title}
                </h3>
                <p>{result.body}</p>
              </div>
            {/each}
          </div>
          <div class="images">
            {#each study.results.images as image}
              <div style:grid-column={image.span}>
                <img src={image.src} alt={image.alt} />
              </div>
            {/each}
          </div>
        </TransSection>
      {/key}
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
