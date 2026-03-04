import SectionHeader from '@/components/section-header';
import { EXPERIENCE } from '@/lib/data';
import type { Experience } from '@/lib/types';

const TimelineItem = ({ item }: { item: Experience }) => (
  <div className="pl-5 mb-6 relative before:content-['◆'] before:absolute before:left-[-7px] before:text-primary before:text-xs before:text-shadow-sm">
    <div className="text-[0.62rem] text-custom-text-dim tracking-[2px] mb-1">
      {item.date}
    </div>
    <h3 className="font-headline text-[0.8rem] text-primary mb-0.5">
      {item.role}
    </h3>
    <p className="text-custom-cyan text-[0.72rem] mb-2 text-shadow-cyan">
      // {item.company}
    </p>
    <ul className="list-none space-y-1">
      {item.tasks.map((task, i) => (
        <li
          key={i}
          className="text-custom-text-dim text-[0.7rem] leading-relaxed pl-3.5 relative before:content-['>'] before:text-primary before:absolute before:left-0"
        >
          {task}
        </li>
      ))}
    </ul>
  </div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-6 border-t border-primary/5">
      <div className="container">
        <SectionHeader num="03" tag="WORK_HISTORY" />
        <div className="relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-primary before:to-primary/20 before:shadow-green-glow">
          {EXPERIENCE.map((item) => (
            <TimelineItem key={item.role + item.company} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
