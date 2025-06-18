export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  featured?: boolean;
}

export interface ProjectFilterState {
  category: string;
  sortBy: "featured" | "alphabetical";
}
