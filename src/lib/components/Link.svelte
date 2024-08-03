<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";

    let width: number = $state(0);

    function checkWindowWidth() {
          width = window.innerWidth;
    }

    type Props = { icon: string; text: string; url: string };
    const { icon, text, url }: Props = $props();
</script>

<svelte:window on:load={checkWindowWidth} on:resize={checkWindowWidth} />


<li>
    <a href={url} target="_blank">
      {#if icon !== "none"}
      <Icon icon={icon} />
      {/if}
      {#if width > 730}
      {text}
      {/if}
    </a>
</li>