<!-- src/lib/components/PCard.svelte -->
<script lang="ts">
  type Props = {
    title: string;
    subTitle: string;
    img: string;
    alt: string;
    url: string;
  };
  const { title, subTitle, img, alt, url }: Props = $props();
</script>

<a class="card" href={url} aria-label={`Project ${title}`} role="button">
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <img src={img} {alt} />
  <h3>{title}</h3>
  <span>{subTitle}</span>
  <span class="btn">view project</span>
</a>
