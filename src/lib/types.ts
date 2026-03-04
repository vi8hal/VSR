export type NavLink = {
  href: string;
  label: string;
};

export type Stat = {
  value: number;
  label: string;
  suffix?: string;
};

export type Skill = {
  name: string;
  percentage: number;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type Project = {
  name: string;
  badge: string;
  description: string;
  metrics: { label: string; value: string }[];
  tech: string[];
  links: { type: 'github' | 'live'; href: string }[];
};

export type Experience = {
  date: string;
  role: string;
  company: string;
  tasks: string[];
};

export type ContactInfo = {
  icon: string;
  label: string;
  value: string;
  sub?: string;
  href?: string;
};
