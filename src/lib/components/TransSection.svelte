<script lang="ts">
  import { fly } from "svelte/transition";

    let section: HTMLElement;
    let inView = $state(false);

    type Props = {
        newClass?: string;
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        children: () => any;
    }

    const { newClass, children }: Props = $props();

    $effect(() => {
    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                inView = true;
            }
        }
    });

    observer.observe(section);

    return () => observer.disconnect();
});
</script>

<section class={newClass} bind:this={section}>
    {#if inView}
    <div class="wrapper" transition:fly={{ delay: 250, duration: 300, y: 50, opacity: 0 }}>
        {@render children() }
    </div>
    {/if}
</section>