<!-- src/routes/+page.svelte -->
<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import CaseStudies from "$lib/components/CaseStudies.svelte";
  import Projects from "$lib/components/Projects.svelte";
</script>

<Hero />
<main>
  <Projects />
  <CaseStudies />
</main>
