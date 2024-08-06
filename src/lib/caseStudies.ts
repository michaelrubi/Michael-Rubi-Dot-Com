// caseStudies.ts
export type Icons =
	"palette"
	| "ticketCart"
	| "barGraph"
	| "dice"
	| "controller"
	| "shirt"
    | "coins";
export type CaseStudy = {
	slug: string;
	home: {
		title: string;
		subTitle: string;
		lottie: object;
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
			icon?: Icons;
			title: string;
			body: string;
		}[];
		images: {
			src: string;
			alt: string;
		}[];
	};
	results: {
		text: {
			icon?: Icons;
			title: string;
			body: string;
		}[];
		images: {
			src: string;
			alt: string;
		}[];
	};
};

// This uses Vite's import.meta.glob feature to dynamically import all .js files in the specified directory
const caseStudyModules = import.meta.glob<{ default: CaseStudy }>(
	"$lib/case-studies/*.ts",
	{ eager: true },
);

// Convert the modules object into an array of case studies
export const caseStudies: CaseStudy[] = Object.values(caseStudyModules).map(
	(module) => module.default,
);

/**
 * Retrieves a case study by its slug.
 *
 * @param {string} slug - The slug of the case study to retrieve.
 * @return {CaseStudy | undefined} The case study with the matching slug, or undefined if no match is found.
 */
export function getCaseStudy(slug: string) {
	return caseStudies.find((study) => study.slug === slug);
}

/**
 * Finds the previous and next case studies based on the provided currentSlug.
 *
 * @param {string} currentSlug - The current case study slug to determine adjacent studies.
 * @return {object} An object containing the previous and next case studies.
 */
export function getAdjacentStudies(currentSlug: string) {
	const currentIndex = caseStudies.findIndex(
		(study) => study.slug === currentSlug,
	);
	const previous = caseStudies[currentIndex - 1] || null;
	const next = caseStudies[currentIndex + 1] || null;
	return { previous, next };
}
