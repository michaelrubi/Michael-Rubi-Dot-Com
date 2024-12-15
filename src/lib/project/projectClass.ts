// projectClass.ts
export class Project {
  metadata: {
    title: string;
    subtitle: string;
    slug: string;
    description: string;
  };
  media: {
    featuredImage: {
      src: string;
      alt: string;
    };
    images: {
      src: string;
      alt: string;
    }[];
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
    challenges?: {
      title: string;
      description: string;
    }[];
    lessons?: {
      title: string;
      description: string;
    }[];
  };

  constructor(
    metadata: {
      title: string;
      subtitle: string;
      slug: string;
      description: string;
    },
    media: {
      featuredImage: {
        src: string;
        alt: string;
      };
      images: {
        src: string;
        alt: string;
      }[];
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
      challenges?: {
        title: string;
        description: string;
      }[];
      lessons?: {
        title: string;
        description: string;
      }[];
    }
  ) {
    this.metadata = metadata;
    this.media = media;
    this.tech = tech;
    this.details = details;
    this.reflections = reflections;
  }
}
