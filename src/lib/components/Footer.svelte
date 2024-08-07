<script lang="ts">
import Logo from "$lib/components/Logo.svelte";
import Link from "$lib/components/Link.svelte";

import { page } from "$app/stores";

function linkRoute(link: string) {
  return $page.url.pathname === '/' ? `${link}` : `/${link}`;
}

const links = [
	{
		icon: "email",
		text: "rubi.webdeb@gmail.com",
		url: "mailto:rubi.webdeb@gmail.com",
	},
	{
		icon: "linkedin",
		text: "michaelrubi",
		url: "https://www.linkedin.com/in/michaelrubi/",
	},
	{
		icon: "github",
		text: "michaelrubi",
		url: "https://github.com/michaelrubi",
	},
];
</script>


<footer>
  <div class="wrapper">
    <div class="content">
      <a href={linkRoute('#')}><Logo fill="gradient" /></a>
      <span><a href={linkRoute('#projects')}>Case Studies</a></span>
      <ul>
        {#each links as link}
          <Link {...link}/>
        {/each}
      </ul>
    </div>
  </div>
</footer>