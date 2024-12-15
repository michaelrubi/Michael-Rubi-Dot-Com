<!-- src/lib/components/CaseStudies.svelte -->
<script lang="ts">
  import CSCard from "./CSCard.svelte";
  import { caseStudies, type CaseStudy } from "$lib/caseStudies";
  import TransSection from "./TransSection.svelte";
  const studies: CaseStudy[] = caseStudies;
</script>

<TransSection newId="studies">
  <h2>Case Studies</h2>
  <div class="cards">
    {#each studies as study}
      <CSCard
        title={study.home.title}
        subTitle={study.home.subTitle}
        animationData={study.home.lottie}
        url={`/case-study/${study.slug as string}`}
      />
    {/each}
  </div>
</TransSection>
