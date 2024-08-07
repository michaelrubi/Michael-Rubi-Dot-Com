<script lang="ts">
  import { fly } from "svelte/transition";
    type Spacer = { height: number, width: number };
    let section: HTMLElement;
    let inView = $state(false);

    type Props = {
        newClass?: string;
        newId?: string;
        placeholder?: Spacer;
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        children: () => any;
    }

    const { newId, newClass, children, placeholder = {height: 600, width: 100} }: Props = $props();

    $effect(() => {
    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                inView = true;
            }
        }
    }, { threshold: 0.2 });

    observer.observe(section);

    return () => {
        observer.disconnect();
        inView = false;
    }
});
</script>

<section id={newId} class={newClass} bind:this={section}>
    {#if inView}
    <div class="wrapper" transition:fly={{ delay: 300, duration: 500, y: 50, opacity: 0 }}>
        {@render children() }
    </div>
    {:else}
    <div class="placeholder" style="height: {placeholder.height}px; width: {placeholder.width}%"></div>
    {/if}
</section>