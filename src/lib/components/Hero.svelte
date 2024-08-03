<script lang="ts">
    import heroImg from '$lib/img/home/hero.png';
</script>

<div id="hero">
    <div class="wrapper">
        <div class="spacer"></div>
        <div class="title">
            <h1 >Michael Rubi</h1>
            <h2 >Web Developer</h2>
        </div>
        <p>I'm passionate about collaborating with clients and turning their visions into reality, whether it's a simple website or a complex web app.</p>
        <img src={heroImg} alt="Michael Rubi">
    </div>
</div>


<style>
    #hero {
        min-width: 100%;
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
        margin-left: 70px;
    }
    #hero h1 {
        white-space: nowrap;
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
        margin-inline: 70px;
        background-color: var(--hero-p-bg);
        z-index: 100;
    }

    #hero img {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 100%;
        transform: translateX(10%);
    }

    @media (max-width: 768px) {

        #hero .wrapper {
            align-items: center;
            padding-block: 4rem;
            aspect-ratio: inherit;
        }
        #hero .title {
            --txt-hero-name: normal 700 clamp(2.238rem, -0.0191rem + 9.4148vw, 4.5rem)Termina, sans-serif;
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 100;
            margin: auto;
            gap: 0.5rem;
            max-width: calc(100% - 2rem);
            transform: translate(-50%, -50%);
        }

        :global(body:not(.dark) #hero .title:before) {
            position: absolute;
            top: -0.5rem;
            left: -1rem;
            content: '';
            width: 100%;
            background-color: var(--hero-p-bg);
            height: 100%;
            z-index: -2;
            padding: 0.5rem 1rem;
            transition: background-color 0.3s ease;
        }

        #hero .title h1, #hero .title h2 {
            color: var(--txt-clr);
            transition: color 0.3s ease;
        }

        #hero .title h1 {
            padding-left: clamp(3px, 0.4318rem + -0.5089vw, 5px);
        }

        :global(.dark) #hero .title h1 {
            text-shadow: var(--txt-shadow);
        }

        :global(.dark) #hero .title h2 {
            text-shadow: var(--txt-shadow);
        }
        #hero .title, #hero p {
            margin: 0;
        }

        #hero img {
            right: inherit;
            transform: translate(0);
        }
        #hero p {
            padding: 0.5rem clamp(1rem, -0.6102rem + 6.8702vw, 2.6875rem);;
            max-width: 100%;
        }
    }
</style>