<script lang="ts">
    import logo from '$lib/img/logo/logo.svg';
    import '$lib/styles/styles.css';
    import Nav from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { currentTheme } from '$lib/index.svelte';

    $effect(() => {
        document.body.className = currentTheme.dark ? 'dark' : 'light';
    })

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