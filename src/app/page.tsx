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
      <Hero />
      <div className="container">
        <StatsBar />
      </div>
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
