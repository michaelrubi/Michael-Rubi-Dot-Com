<script lang="ts">

import lottie from "lottie-web";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type Props = { title: string; subTitle: string; animationData: any; url: string; };
const { title, subTitle, animationData, url }: Props = $props();
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
let anim: any;
let animationContainer: HTMLDivElement;

let isTouchDevice = $state(false);

$effect(() => {
    anim = lottie.loadAnimation({
        container: animationContainer,
        animationData,
        autoplay: false
    })

    return () => {
        if (anim) anim.destroy();
    }
});

$effect(() => {
    if (!isTouchDevice || !animationContainer) return;
    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                playAni();
            } else {
                stopAni();
            }
        }
    });

    observer.observe(animationContainer);

    return () => observer.disconnect();
});

function checkTouch(state: boolean) {
    if (isTouchDevice) return
    isTouchDevice = state;
}

function playAni() {
    if (anim) {
        anim.play()
        anim.loop = true
    }
}

function pauseAni() {
    if (anim) {
        anim.loop = false
    }
}

function stopAni() {
    if (anim) {
        anim.stop();
        anim.loop = false
    }
}

</script>

<svelte:window ontouchstart={() => checkTouch(true)} onmousedown={() => checkTouch(false)}/>

<a class="card"  href={url}>
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="animation"  onmouseenter={playAni} onmouseleave={pauseAni} bind:this={animationContainer}></div>
  <h3>{title}</h3>
    <span>{subTitle}</span>
</a>