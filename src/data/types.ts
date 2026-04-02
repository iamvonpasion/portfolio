export interface Project {
  id: string;
  title: string;
  subtitle: string;
  subtitleDesktop?: string;
  description: string;
  challenge: string;
  keyDecisions: string[];
  impact: string;
  tags: string[];
  image?: string;
  diagram?: string;
}

export interface TimelineEntry {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface Principle {
  icon: string;
  title: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}
