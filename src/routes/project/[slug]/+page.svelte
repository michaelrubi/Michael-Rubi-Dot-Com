<!-- src/routes/project/[slug]/+page.svelte -->
<script lang="ts">
  import { page } from "$app/stores";
  import { getProject, getAdjacentProjects } from "$lib/project";
  const slug = $page.params.slug;
  const project = $derived(getProject(slug));
  const { previous, next } = $derived(getAdjacentProjects(project!));
</script>

<svelte:head>
  <title>{project?.metadata.title}</title>
  <meta name="description" content={project?.metadata.description} />
</svelte:head>

{#if project}
  <article>
    <h1>{project.metadata.title}</h1>
    <h2>{project.metadata.subtitle}</h2>
    <img
      src={project.media.featuredImage}
      alt={project.media.featuredImageAlt}
    />
    <p>{project.metadata.description}</p>
  </article>

  <section class="navigation">
    {#if previous}
      <a href={`/project/${previous}`}>Previous</a>
    {:else}
      <span>Previous</span>
    {/if}
    {#if next}
      <a href={`/project/${next}`}>Next</a>
    {:else}
      <span>Next</span>
    {/if}
  </section>
{:else}
  <h1>Project Not Found</h1>
{/if}
