<script lang="ts">
import Logo from "$lib/components/Logo.svelte";
import DarkToggle from "./DarkToggle.svelte";
import { page } from "$app/stores";

function linkRoute(link: string) {
  return $page.url.pathname === '/' ? `${link}` : `/${link}`;
}

let menuOpen = $state(false);

function toggleMenu() {
  menuOpen = !menuOpen;
}
</script>

<header>
  <div class="wrapper">
    <a href={linkRoute('#')}><Logo fill='solid'/></a>
    <button class="menu-toggle" class:open={menuOpen} onclick={toggleMenu} aria-label="Toggle menu">
      <span></span>
    </button>
    <nav class:open={menuOpen}>
      <ul>
        <li><a href={linkRoute('#projects')} onclick={toggleMenu}>Case Studies</a></li>
        <li><DarkToggle/></li>
      </ul>
    </nav>
  </div>
</header>