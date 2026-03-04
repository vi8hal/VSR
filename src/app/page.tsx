import Header from '@/components/layout/header';
import ContactSection from '@/components/sections/contact';
import ExperienceSection from '@/components/sections/experience';
import Hero from '@/components/sections/hero';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';
import StatsBar from '@/components/stats-bar';

export default function Home() {
  return (
    <>
      <Header />
      <div className="py-8">
        <Hero />
      </div>
      <div className="container">
        <StatsBar />
      </div>
      <div className="py-8">
        <SkillsSection />
      </div>
      <div className="py-8">
        <ProjectsSection />
      </div>
      <div className="py-8">
        <ExperienceSection />
      </div>
      <div className="py-8">
        <ContactSection />
      </div>
    </>
  );
}
