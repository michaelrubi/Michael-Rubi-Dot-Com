<!-- src/lib/components/Projects.svelte -->
<script lang="ts">
  import PCard from "./PCard.svelte";
  import { projects } from "$lib/project";
  import TransSection from "./TransSection.svelte";
</script>

<TransSection id="projects">
  <h2>Projects</h2>
  <div class="cards">
    {#each projects as project}
      <PCard
        title={project.metadata.title}
        subTitle={project.metadata.subtitle}
        img={project.media.featuredImage.src}
        alt={project.media.featuredImage.alt}
        url={`/project/${project.metadata.slug as string}`}
      />
    {/each}
  </div>
</TransSection>
