// 1breath-work.ts
import { Project } from "$lib/project/projectClass";

import breathScreen from "$lib/img/project/breath/breath-screen.jpg";
import breathFeature from "$lib/img/project/breath/breath-feature.jpg";

const breathWork = new Project(
  {
    title: "Breath Work",
    subtitle: "A place for mindful breathing and mindfulness practice",
    slug: "breath-work",
    description:
      "I created this project to help with breath control, specifically Box Breathing.Box breathing is a deep breathing technique that involves inhaling, holding, exhaling, and holding your breath for equal durations, creating a rhythmic pattern similar to a square. It is often used to reduce stress, improve focus, and calm the nervous system.",
  },
  {
    featuredImage: {
      src: breathFeature,
      alt: "Breath Work",
    },
    images: [
      {
        src: breathScreen,
        alt: "Breath Work",
      },
    ],
  },
  {
    technologies: ["SvelteKit", "TypeScript"],
    githubUrl: "https://github.com/michaelrubi/breathe",
    liveDemoUrl: "https://breath-control.deno.dev/",
  },
  {
    dateStarted: "Dec 2024",
  },
  {
    challenges: [
      {
        title: "Asynchronous Operations",
        description:
          'Coordinating asynchronous operations (like timers and user interactions) was a key challenge. Ensuring that the breathing exercises ran smoothly and that the "Stop" button effectively halted all timers required careful state management and synchronization.',
      },
      {
        title: "User Experience",
        description:
          "Achieving a smooth and responsive user experience with animations and interactions required careful consideration of timing and transitions. Creating a user-friendly interface that was both visually appealing and easy to navigate required careful consideration of user needs and expectations.",
      },
      {
        title: "Maintaining State",
        description:
          "Managing the application state (e.g., current phase, timer, round number) effectively was crucial for a seamless user experience.",
      },
      {
        title: "Design",
        description:
          "Designing a user-friendly interface that was both visually appealing and easy to navigate required careful consideration of user needs and expectations.",
      },
    ],
    lessons: [
      {
        title: "State Management",
        description:
          "Effective state management is crucial for building complex applications. Tools like Svelte's $state and derived stores can be very helpful in managing and tracking the application's state.",
      },
      {
        title: "Testing",
        description:
          "Thorough testing throughout the development process is essential to identify and address potential issues early on. Iterative development, gathering user feedback, and making adjustments based on that feedback are key to creating a successful application.",
      },
      {
        title: "Accessibility",
        description:
          "Accessibility should be considered from the beginning of the development process. This includes ensuring sufficient color contrast, providing alternative text for images (if applicable), and making the interface usable by users with disabilities.",
      },
    ],
  }
);

export default breathWork;
