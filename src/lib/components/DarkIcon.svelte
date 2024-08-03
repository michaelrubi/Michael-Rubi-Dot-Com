<script lang="ts">
import { currentTheme } from "$lib/index.svelte";
import { fade } from "svelte/transition";
</script>

<div class="mode-icon">
    {#if !currentTheme.dark}
        <svg in:fade={{ duration: currentTheme.timeout }} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" fill="#1E1B1A"/>
            <path d="M36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24Z" fill="#E9F0EE"/>
            <path d="M28 20C28 26.6274 22.6274 32 16 32C9.37258 32 4 26.6274 4 20C4 13.3726 9.37258 8 16 8C22.6274 8 28 13.3726 28 20Z" fill="#1E1B1A"/>
        </svg>
        
    {:else}
    <svg in:fade={{ duration: currentTheme.timeout }} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" fill="#E9F0EE"/>
        <path d="M21.9999 4H25.9999V12H21.9999V4Z" fill="#1E1B1A"/>
        <path d="M21.9999 36H25.9999V44H21.9999V36Z" fill="#1E1B1A"/>
        <path d="M44 22V26H36V22H44Z" fill="#1E1B1A"/>
        <path d="M12 22V26H4V22H12Z" fill="#1E1B1A"/>
        <path d="M36.7278 8.44357L39.5563 11.272L33.8994 16.9288L31.071 14.1004L36.7278 8.44357Z" fill="#1E1B1A"/>
        <path d="M14.1004 31.071L16.9288 33.8994L11.272 39.5563L8.44356 36.7278L14.1004 31.071Z" fill="#1E1B1A"/>
        <path d="M39.5564 36.7279L36.7279 39.5564L31.0711 33.8995L33.8995 31.0711L39.5564 36.7279Z" fill="#1E1B1A"/>
        <path d="M16.9289 14.1005L14.1005 16.9289L8.44365 11.2721L11.2721 8.44365L16.9289 14.1005Z" fill="#1E1B1A"/>
        <path d="M31.9999 24C31.9999 28.4183 28.4182 32 23.9999 32C19.5816 32 15.9999 28.4183 15.9999 24C15.9999 19.5817 19.5816 16 23.9999 16C28.4182 16 31.9999 19.5817 31.9999 24Z" fill="#1E1B1A"/>
    </svg>
    {/if}
</div>

<style>
    .mode-icon {
        width: 48px;
        aspect-ratio: 1/1;
        position: relative;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--bg);
        color: var(--txt-clr);
    }
</style>