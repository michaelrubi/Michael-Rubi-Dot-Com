<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";


    type Props = { icon: string; text: string; url: string };
    const { icon, text, url }: Props = $props();
</script>


<li>
    <a href={url}><Icon icon={icon} />{text}</a>
</li>