'use client';
import SectionHeader from '@/components/section-header';
import { SKILLS } from '@/lib/data';
import type { Skill } from '@/lib/types';
import { useEffect, useRef } from 'react';

const SkillBar = ({ skill }: { skill: Skill }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (barRef.current) {
              barRef.current.style.width = `${skill.percentage}%`;
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current.parentElement!);
    }

    return () => observer.disconnect();
  }, [skill.percentage]);

  return (
    <div className="mb-2.5">
      <div className="flex justify-between mb-1 text-sm text-custom-text">
        <span>{skill.name}</span>
        <span className="text-primary">{skill.percentage}%</span>
      </div>
      <div className="h-1 bg-primary/10 overflow-hidden relative">
        <div
          ref={barRef}
          className="h-full bg-gradient-to-r from-custom-green-dim to-primary shadow-green-glow transition-all duration-1000 ease-out relative after:content-[''] after:absolute after:right-0 after:top-0 after:w-1 after:h-full after:bg-white/90"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-8 border-t border-primary/5">
      <div className="container">
        <SectionHeader num="01" tag="SKILL_MATRIX" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {SKILLS.map((category) => (
            <div
              key={category.title}
              className="border border-custom-border p-4 bg-primary/5 transition-all duration-200 relative [clip-path:polygon(0_0,calc(100%_-_12px)_0,100%_12px,100%_100%,0_100%)] before:content-[''] before:absolute before:top-[-1px] before:left-[-1px] before:w-2 before:h-2 before:border-primary before:border-t before:border-l before:transition-all before:duration-200 before:opacity-50 after:content-[''] after:absolute after:bottom-[-1px] after:right-[-1px] after:w-2 after:h-2 after:border-primary after:border-b after:border-r after:transition-all after:duration-200 after:opacity-50 hover:border-custom-border-bright hover:bg-primary/10 hover:before:opacity-100 hover:before:w-3.5 hover:before:h-3.5 hover:after:opacity-100 hover:after:w-3.5 hover:after:h-3.5"
            >
              <h3 className="text-custom-cyan text-[0.68rem] tracking-[3px] mb-3 text-shadow-cyan">
                {category.title}
              </h3>
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
