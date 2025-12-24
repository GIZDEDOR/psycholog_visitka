import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Pricing from '@/components/Pricing';
import Contacts from '@/components/Contacts';
import AnimatedSection from '@/components/AnimatedSection';
import WorkAreas from '@/components/WorkAreas';

export default function Home() {
  return (
    <main className="min-h-screen py-8 max-w-4xl mx-auto px-4">
      <Hero />
      <AnimatedSection id="education">
        <Education />
      </AnimatedSection>
      <AnimatedSection id="workareas">
        <WorkAreas />
      </AnimatedSection>
      <AnimatedSection id="pricing">
        <Pricing />
      </AnimatedSection>
      <AnimatedSection id="contacts">
        <Contacts />
      </AnimatedSection>
    </main>
  );
}