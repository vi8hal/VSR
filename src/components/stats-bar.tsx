'use client';

import { STATS } from '@/lib/data';
import type { Stat } from '@/lib/types';
import { countUp } from '@/lib/utils';
import { useEffect, useRef } from 'react';

const StatItem = ({ stat }: { stat: Stat }) => {
  const numRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={numRef}
      className="bg-background p-3 text-center transition-colors duration-200 relative overflow-hidden before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-primary before:scale-x-0 before:transition-transform before:duration-300 hover:bg-primary/5 hover:before:scale-x-100"
    >
      <div
        ref={numRef}
        className="font-headline text-[1.6rem] font-bold text-primary text-shadow-sm"
        data-target={stat.value}
        data-suffix={stat.suffix || ''}
      >
        0
      </div>
      <div className="text-xs text-custom-text-dim tracking-[2px] mt-0.5">
        {stat.label}
      </div>
    </div>
  );
};

const StatsBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statElements =
              containerRef.current?.querySelectorAll<HTMLElement>('.stat-num');
            statElements?.forEach((el) => {
              const target = parseInt(el.dataset.target || '0', 10);
              countUp(el, target);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 md:grid-cols-4 gap-px bg-custom-border border border-custom-border my-3"
    >
      {STATS.map((stat, index) => (
         <div key={index} className="bg-background p-3 text-center transition-colors duration-200 relative overflow-hidden before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-primary before:scale-x-0 before:transition-transform before:duration-300 hover:bg-primary/5 hover:before:scale-x-100">
            <div
                className="stat-num font-headline text-[1.6rem] font-bold text-primary text-shadow-sm"
                data-target={stat.value}
                data-suffix={stat.suffix || ''}
            >0</div>
            <div className="text-xs text-custom-text-dim tracking-[2px] mt-0.5">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;
