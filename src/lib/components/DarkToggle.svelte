<script lang="ts">
  import Icon from "./DarkIcon.svelte";
  import { currentTheme } from "$lib/index.svelte";

</script>


<button onclick={currentTheme.toggle}><Icon/></button>

<style>
    button {
        height: 3.5rem;
        padding-left: 0.5rem;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        flex-shrink: 0;
        padding-inline: 0.5rem;
        border-radius: 2rem;
        border: 4px solid var(--pri-more);
        background: var(--dark-Less);
        color: var(--txt-clr);
    }
</style>