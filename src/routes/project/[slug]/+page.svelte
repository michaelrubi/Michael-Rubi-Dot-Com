<!-- src/routes/project/[slug]/+page.svelte -->
<script lang="ts">
  import { page } from "$app/stores";
  import TransSection from "$lib/components/TransSection.svelte";
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
    <section id="projectHero">
      <div class="wrapper">
        <div class="text" style:--bg-hero="var(--p-bg-dark)">
          <h1>{project.metadata.title}</h1>
          <span>{project.metadata.subtitle}</span>
        </div>
        <img
          src={project.media.images[0].src}
          alt={project.media.images[0].alt}
        />
      </div>
    </section>
    {#key project.metadata.slug}
      <TransSection newClass="projectDetails">
        <div class="details">
          <h2>Project Details</h2>
          <ul>
            <li>{project.metadata.description}</li>
            {#if project.details?.dateStarted}
              <li>
                <strong>Start Date</strong>: {project.details.dateStarted}
              </li>
            {/if}
            {#if project.details?.dateCompleted}
              <li>
                <strong>Completion Date</strong>: {project.details
                  .dateCompleted}
              </li>
            {/if}
            {#if project.tech.liveDemoUrl}
              <li>
                <a href={project.tech.liveDemoUrl} target="_blank">Live Demo</a>
              </li>
            {/if}
            {#if project.tech.githubUrl}
              <li>
                <a href={project.tech.githubUrl} target="_blank">GitHub</a>
              </li>
            {/if}
          </ul>
        </div>
        <div class="tech">
          <h2>Technologies</h2>
          <ul>
            {#each project.tech.technologies as tech}
              <li>{tech}</li>
            {/each}
          </ul>
        </div>
      </TransSection>
    {/key}
    {#key project.metadata.slug}
      {#if project.reflections?.challenges}
        <TransSection newClass="challenges">
          <h2>Challenge</h2>
          <div class="challenge-cards">
            {#each project.reflections.challenges as challenge}
              <div class="challenge">
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
              </div>
            {/each}
          </div>
        </TransSection>
      {/if}
    {/key}
    {#key project.metadata.slug}
      {#if project.reflections?.lessons}
        <TransSection newClass="lessons-learned">
          <h2>Lessons Learned</h2>
          <div class="lesson-cards">
            {#each project.reflections.lessons as lesson}
              <div class="lesson">
                <h3>{lesson.title}</h3>
                <p>{lesson.description}</p>
              </div>
            {/each}
          </div>
        </TransSection>
      {/if}
    {/key}
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
