<script lang="ts">
    import type { LayoutData } from './$types';

    export let data: LayoutData;
    import logo from '$lib/img/logo.svg';
    import '$lib/styles.css';
    import Nav from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
    <title>Michael Rubi</title>
    <meta name="author" content="Michael Rubi">
    <meta name="description" content="Michael Rubi is a web developer available for hire!">
    <link rel="icon" type="image/svg+xml" href={logo} />
</svelte:head>

<Nav />
<slot />
<Footer />