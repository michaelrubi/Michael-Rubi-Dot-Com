<script lang="ts">
  import Icon from "./DarkIcon.svelte";
  import { currentTheme } from "$lib/index.svelte";

</script>


<button class:dark={currentTheme.dark} onclick={currentTheme.toggle}><Icon/></button>

<style>
    button {
      padding: 0 0 0 34px;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      flex-shrink: 0;
      border-radius: 2rem;
      border: 4px solid var(--pri-more);
      background: var(--dark-less);
      color: var(--txt-clr);
      transition: padding 0.3s ease-in-out;
    }
    
    button.dark {
      padding: 0 34px 0 0;
      background: var(--lite-less);
    }
</style>