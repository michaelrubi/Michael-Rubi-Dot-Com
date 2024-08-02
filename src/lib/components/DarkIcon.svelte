<script lang="ts">
import { currentTheme } from "$lib/index.svelte";
</script>

<div 
    class="mode-icon" 
    class:animating={currentTheme.animating}
    class:dark={currentTheme.dark}>
    <svg class="rays" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.9999 0H21.9999V8H17.9999V0Z"/>
        <path d="M17.9999 32H21.9999V40H17.9999V32Z"/>
        <path d="M40 18V22H32V18H40Z"/>
        <path d="M8 18V22H0L1.74846e-07 18H8Z"/>
        <path d="M32.7278 4.44357L35.5563 7.27199L29.8994 12.9288L27.071 10.1004L32.7278 4.44357Z"/>
        <path d="M10.1004 27.071L12.9288 29.8994L7.27199 35.5563L4.44356 32.7278L10.1004 27.071Z"/>
        <path d="M35.5564 32.7279L32.7279 35.5564L27.0711 29.8995L29.8995 27.0711L35.5564 32.7279Z"/>
        <path d="M12.9289 10.1005L10.1005 12.9289L4.44365 7.27208L7.27208 4.44365L12.9289 10.1005Z"/>
    </svg>
    <div class="circle"></div>
    <div class="mask"></div>
        
</div>

<style>
    .mode-icon {
        --aniDir: infinite alternate;
        --trans: 1s linear;
        --animation: var(--trans) var(--aniDir);
        width: 48px;
        aspect-ratio: 1/1;
        position: relative;
        background-color: var(--bg);
        border-radius: 50%;
        overflow: hidden;
        transition: background-color .8s linear;
    }
    
    .mode-icon:not(.animating) {
        --bg: var(--txt-neg);
    }

    @keyframes iconAnimation {
        0%, 33% {
            background-color: var(--lite);
        }
        66%, 100% {
            background-color: var(--dark);
        }
    }

    .mode-icon, .mode-icon .rays, .mode-icon .circle, .mode-icon .mask {
        animation-play-state: paused;
    }

    .mode-icon, .mode-icon.animating .rays, .mode-icon.animating .circle, .mode-icon.animating .mask {
        animation-play-state: running;
    }
    
    
    
    .rays {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: 1s linear 0s infinite alternate rayAnimation;
        fill: var(--dark);
    }

    @keyframes rayAnimation {
        0% {
        }
        25% {
            transform: translate(-50%, -50%) scale(0.5) rotate(360deg);
        }
    }

    .circle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background: var(--txt-clr);
        animation: 1s linear 0s infinite alternate circleAnimation;
    }

    @keyframes circleAnimation {
        0%, 25% {
            transform: translate(-50%, -50%) scale(2);
        }
        75%, 100% {
            transform: translate(-50%, -50%) scale(1);
        }
    }

    .mask {
        position: absolute;
        transform: translate(-100%, -100%);
        transform: translate(25%, 25%) scale(1.25);
        width: 1.5rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background: var(--txt-neg);
        animation: 1s linear 0s infinite alternate maskAnimation;
    }

    @keyframes maskAnimation {
        0%{
            transform: translate(25%, 25%) scale(1.25);
        }
        33% {
            transform: translate(-50%, -50%) scale(1.25);
        }
        100% {
            transform: translate(-100%, -100%) scale(1);
        }
    }
    
</style>