<script>
    import heroImg from '$lib/img/home/hero.png';
</script>

<div id="hero">
    <div class="wrapper">
        <div class="spacer"></div>
        <div class="title">
            <h1>Michael Rubi</h1>
            <h2>Web Developer</h2>
        </div>
        <p>I'm passionate about collaborating with clients and turning their visions into reality, whether it's a simple website or a complex web application.</p>
        <img src={heroImg} alt="Michael Rubi">
    </div>
</div>


<style>
    #hero {
        width: 100%;
    }
    
    #hero .wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: clamp(2.5rem, -6.8902rem + 18.2114vw, 9.5rem);
        align-self: stretch;
        position: relative;
        height: 100%;
        aspect-ratio: 90/59;
    }

    #hero .spacer {
        height: 120px;
        width: 100%;
    }

    #hero .title {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-left: 70px;
    }
    #hero h1 {
        font: var(--txt-hero-name);
        transform: translateX(-.5rem);
        line-height: .575;
    }

    #hero h2 {
        font: var(--txt-hero-job);
    }

    #hero p {
        font: var(--txt-hero-txt);
        max-width: 39%;
        padding-left: 70px;
    }

    #hero img {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 100%;
        transform: translateX(10%);
    }
</style>