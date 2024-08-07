<script lang="ts">
  import Icon from "./DarkIcon.svelte";
  import { currentTheme } from "$lib/index.svelte";
</script>

<button class:dark={currentTheme.dark} onclick={currentTheme.toggle}><Icon/></button>