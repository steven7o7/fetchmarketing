import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

export default function Hero({ ParticleCanvas }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="hero" id="home" aria-label="Hero section">
      {/* Particle canvas (if provided) or video fallback */}
      {ParticleCanvas && !prefersReducedMotion ? (
        <ParticleCanvas />
      ) : (
        <video
          src="/assets/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }}
          aria-hidden="true"
        />
      )}
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <h1>AI‑driven marketing.</h1>
        <p className="subline">
          Websites, SEO, and automations for service businesses.
        </p>
        <div style={{ display:'flex', gap:'var(--s3)', justifyContent:'center', flexWrap:'wrap' }}>
          <a href="#contact" className="btn primary">Book a strategy call</a>
          <a href="#work" className="btn secondary">Our work</a>
        </div>
      </div>
    </section>
  );
}
