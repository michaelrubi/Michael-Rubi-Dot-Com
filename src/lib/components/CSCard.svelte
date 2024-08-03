<script lang="ts">

import lottie from "lottie-web";

type idType = "michelangelo" | "strokes" | "grandCanyon";
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type Props = { title: string; subTitle: string; id: idType; animationData: any; url: string; };
const { title = "Test", subTitle = "Test", id, animationData, url }: Props = $props();
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
let anim: any;
let animationContainer: HTMLDivElement;
let width: number = $state(0);

$effect(() => {
    anim = lottie.loadAnimation({
        container: animationContainer,
        animationData,
        autoplay: false
    })
});

function enterCard() {
    if (anim) {
        anim.play()
        anim.loop = true
    }
}

function leaveCard() {
    if (anim) {
        anim.loop = false
    }
}

function checkWindowWidth() {
    width = window.innerWidth;
}

</script>

<svelte:window on:load={checkWindowWidth} on:resize={checkWindowWidth} />
<!-- Write a script to auto play animation when in viewport for smaller screens -->

<a class="card"  href={url}>
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="animation" id={id} onmouseenter={enterCard} onmouseleave={leaveCard} bind:this={animationContainer}></div>
  <h3>{title}</h3>
    <span>{subTitle}</span>
</a>

<style>
    .card {
        cursor: pointer;
        text-decoration: none;
        color: var(--txt-clr);
        display: grid;
    }
    .animation {
        width: 100%;
        aspect-ratio: 1/1;
    }

</style>