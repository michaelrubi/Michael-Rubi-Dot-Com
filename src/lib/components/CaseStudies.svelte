<script lang="ts">
import CSCard from "./CSCard.svelte";
import Creation from "$lib/lottie/creation.json";
import Record from "$lib/lottie/record.json";
import Weather from "$lib/lottie/weather.json";

type idType = "michelangelo" | "strokes" | "grandCanyon";
const ids: idType[] = ["michelangelo", "strokes", "grandCanyon"];

const projects = [
    {
        id: ids[0],
        title: 'Immersive Renaissance Experience',
        subTitle: 'Through the works of Michelangelo',
        src: Creation,
        url: '#'
        // src: '/lottie/creation.lottie'
    },
    {
        id: ids[1],
        title: "A Band Website You've Been Waiting For",
        subTitle: "And It's About Time",
        src: Record,
        url: '#'
        // src: '/lottie/record.lottie'
    },
    {
        id: ids[2],
        title: "Your Next Adventure Starts Here",
        subTitle: "No Hiking Boots Required",
        src: Weather,
        url: '#'
        // src: '/lottie/weather.lottie'
    }

]
</script>


<section id="projects">
    <div class="wrapper">
        <h2>Case Studies</h2>
        <div class="cards">
            {#each projects as project}
                <CSCard title={project.title} subTitle={project.subTitle} id={project.id} animationData={project.src} url={project.url}/>
            {/each}
        </div>
    </div>
</section>


<style>
    #projects .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
        gap: 2rem;
    }

</style>
