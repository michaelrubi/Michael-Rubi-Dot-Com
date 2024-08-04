<!-- CaseStudies.svelte -->
<script lang="ts">
import CSCard from "./CSCard.svelte";
import { caseStudies, type CaseStudy} from "$lib/caseStudies";
const studies: CaseStudy[] = caseStudies
</script>


<section id="projects">
    <div class="wrapper">
        <h2>Case Studies</h2>
        <div class="cards">
            {#each studies as study}
                <CSCard title={study.home.title} subTitle={study.home.subTitle} animationData={study.home.lottie} url={`/case-study/${study.slug as string}`}/>
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
