import SectionHeader from '@/components/section-header';
import { PROJECTS } from '@/lib/data';
import type { Project } from '@/lib/types';
import Link from 'next/link';

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="border border-custom-border p-4 bg-black/70 transition-all duration-200 relative overflow-hidden [clip-path:polygon(0_0,calc(100%_-_14px)_0,100%_14px,100%_100%,14px_100%,0_calc(100%_-_14px))] before:content-[''] before:absolute before:top-0 before:right-[14px] before:w-[14px] before:h-px before:bg-primary before:shadow-green-glow before:opacity-0 before:transition-opacity after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,65,0.06)_0%,transparent_60%)] after:opacity-0 after:transition-opacity after:pointer-events-none hover:border-custom-border-bright hover:shadow-[0_0_20px_rgba(0,255,65,0.08),_inset_0_0_20px_rgba(0,255,65,0.02)] hover:before:opacity-100 hover:after:opacity-100">
    <div className="flex justify-between items-start mb-2 gap-2">
      <h3 className="font-headline text-sm font-bold text-primary text-shadow-green-glow leading-snug">
        {project.name}
      </h3>
      <span className="text-xs text-background bg-primary py-0.5 px-2 tracking-wider whitespace-nowrap flex-shrink-0 font-bold">
        {project.badge}
      </span>
    </div>
    <p className="text-custom-text-dim text-[0.72rem] leading-relaxed mb-2.5">
      {project.description}
    </p>
    <div className="flex gap-2.5 mb-2.5 py-1.5 px-2 bg-primary/5 border border-primary/10 flex-wrap">
      {project.metrics.map((metric) => (
        <div key={metric.label} className="text-[0.65rem] text-custom-text-dim">
          {metric.label}: <span className="text-custom-cyan">{metric.value}</span>
        </div>
      ))}
    </div>
    <div className="flex flex-wrap gap-1 mb-2.5">
      {project.tech.map((tag) => (
        <span
          key={tag}
          className="border border-primary/40 py-0.5 px-2 text-[0.6rem] text-primary bg-primary/10"
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="flex gap-3">
      {project.links.map((link) => (
        <Link
          key={link.type}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-custom-text-dim no-underline text-[0.65rem] tracking-[1px] transition-colors duration-150 hover:text-primary hover:text-shadow-green-glow"
        >
          ◈ {link.type === 'github' ? 'GitHub' : 'Live Demo'}
        </Link>
      ))}
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-6 border-t border-primary/5">
      <div className="container">
        <SectionHeader num="02" tag="PROJECT_ARCHIVES" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
