import { useEffect } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import useScrollSpy from '../hooks/useScrollSpy';
import SEO from '../components/SEO';

import Hero from '../components/sections/Hero';
import WorkGrid from '../components/sections/WorkGrid';
import AboutSplit from '../components/sections/AboutSplit';
import Services from '../components/sections/Services';
import LogoMarquee from '../components/sections/LogoMarquee';
import Journal from '../components/sections/Journal';
import CTA from '../components/sections/CTA';

// If your particle component exists, pass it in as prop <Hero ParticleCanvas={YourParticleCanvas} />
export default function Home({ ParticleCanvas }) {
  useRevealOnScroll('.reveal');
  useScrollSpy(['work','services','about','contact']);

  useEffect(()=>{ document.title = 'FetchMarketing – AI‑Driven Marketing'; },[]);
  return (
    <>
      <SEO />
      <Hero ParticleCanvas={ParticleCanvas} />
      <WorkGrid />
      <AboutSplit />
      <Services />
      <LogoMarquee />
      <Journal />
      <CTA />
    </>
  );
}
