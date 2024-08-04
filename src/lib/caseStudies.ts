// caseStudies.ts
export type CaseStudy = {
    slug: string;
    home: {
        title: string;
        subTitle: string;
        lottie: string;
    };
    title: string;
    subTitle: string;
    hero: {
        src: string;
        alt: string;
    }[];
    background: string;
    problem: string[];
    process: {
        text: {
            title: string;
            body: string;
        }[];
        images: {
            src: string;
            alt: string;
        }[];
    },
    results: {
        text: {
            title: string;
            body: string;
        }[];
        images: {
            src: string;
            alt: string;
        }[];
    }
};

// This uses Vite's import.meta.glob feature to dynamically import all .js files in the specified directory
const caseStudyModules = import.meta.glob('$lib/case-studies/*.js', { eager: true });

// Convert the modules object into an array of case studies
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const caseStudies = Object.values(caseStudyModules).map((module: any) => module.default);

export function getCaseStudy(slug: string) {
    return caseStudies.find(study => study.slug === slug);
}

export function getAdjacentStudies(currentSlug: string) {
    const currentIndex = caseStudies.findIndex(study => study.slug === currentSlug);
    const previous = caseStudies[currentIndex - 1] || null;
    const next = caseStudies[currentIndex + 1] || null;
    return { previous, next };
}