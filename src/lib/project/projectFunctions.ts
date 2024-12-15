// projectFunctions.ts
import { Project } from "./projectClass";

const projectModules = import.meta.glob<{ default: Project }>(
  "$lib/projects/*.ts",
  { eager: true }
);

export const projects: Project[] = Object.values(projectModules).map(
  (module) => module.default
);

export function getProject(slug: string) {
  return projects.find((project) => project.metadata.slug === slug);
}

export function getAdjacentProjects(thisProject: Project) {
  const currentIndex = projects.findIndex((project) => project === thisProject);
  const previous = projects[currentIndex - 1] || null;
  const next = projects[currentIndex + 1] || null;
  return { previous, next };
}
