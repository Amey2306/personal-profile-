export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
