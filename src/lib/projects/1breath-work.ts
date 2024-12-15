// 1breath-work.ts
import { Project } from "$lib/project/projectClass";

import breathScreen from "$lib/img/project/breath/breath-screen.jpg";

const breathWork = new Project(
  {
    title: "Breath Work",
    subtitle: "Breathe Right",
    slug: "breath-work",
    description: "A place for mindful breathing and mindfulness practice",
  },
  {
    featuredImage: breathScreen,
    featuredImageAlt: "Breath Work",
  },
  {
    technologies: ["SvelteKit", "TypeScript"],
    githubUrl: "https://github.com/michaelrubi/breathe",
    liveDemoUrl: "https://breath-control.deno.dev/",
  }
);

export default breathWork;
