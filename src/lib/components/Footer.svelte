<script lang="ts">
import Logo from "$lib/components/Logo.svelte";
import Link from "$lib/components/Link.svelte";

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
      <Logo fill="gradient"/>
      <ul>
        {#each links as link}
          <Link {...link}/>
        {/each}
      </ul>
    </div>
  </div>
</footer>

<style>
  footer {
    flex-shrink: 0;
    background: var(--bg-footer);
    padding-block: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  footer .wrapper {
    width: 100%;
  }

  footer .content {
    display: flex;
    flex: auto;
    justify-content: space-between;
  }

  :global(footer .content>a svg) {
    opacity: .16;
    width: clamp(359px, 100% - 2rem, 1440px);
  }

  footer ul {
    list-style: none;
    display: flex;
    gap: 3rem;
    align-items: center;
    padding: 0;
    margin: 0;
  }
  :global(footer .stop-reg) {
  /* .stop-reg { */
    stop-color: var(--bg-clr);
  }
  :global(footer .stop-more) {
  /* .stop-more { */
    stop-color: var(--clr-more);
  }

  :global(footer a) {
    color: var(--txt-clr);
    text-decoration: none;
    font-size: .75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    gap: 4px;
  }

  :global(footer a:hover) {
    color: var(--primary);
  }

  :global(footer a:hover svg), :global(footer a:focus svg) {
    fill: var(--primary) !important;
  }
</style>
