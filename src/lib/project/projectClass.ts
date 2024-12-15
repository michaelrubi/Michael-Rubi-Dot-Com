// projectClass.ts
export class Project {
  metadata: {
    title: string;
    subtitle: string;
    slug: string;
    description: string;
  };
  media: {
    featuredImage: string;
    featuredImageAlt: string;
  };
  tech: {
    technologies: string[];
    githubUrl?: string;
    liveDemoUrl?: string;
  };
  details?: {
    dateStarted?: string;
    dateCompleted?: string;
    clientName?: string;
    role?: string;
  };
  reflections?: {
    challenges?: string;
    lessonsLearned?: string;
  };

  constructor(
    metadata: {
      title: string;
      subtitle: string;
      slug: string;
      description: string;
    },
    media: {
      featuredImage: string;
      featuredImageAlt: string;
    },
    tech: {
      technologies: string[];
      githubUrl?: string;
      liveDemoUrl?: string;
    },
    details?: {
      dateStarted?: string;
      dateCompleted?: string;
      clientName?: string;
      role?: string;
    },
    reflections?: {
      challenges?: string;
      lessonsLearned?: string;
    }
  ) {
    this.metadata = metadata;
    this.media = media;
    this.tech = tech;
    this.details = details;
    this.reflections = reflections;
  }
}
