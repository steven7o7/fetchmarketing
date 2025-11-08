import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { projects } from '../data/projects';

export default function WorkDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const idx = projects.findIndex(p => p.slug === slug);
  const project = projects[idx];

  useEffect(() => {
    if (!project) navigate('/404', { replace:true });
    else document.title = `${project.title} – FetchMarketing`;
  }, [project, navigate]);

  if (!project) return null;

  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <section className="case-hero" aria-label={`${project.title} cover`}>
        <img src={project.cover} alt={`${project.title} case study cover`} />
        <div className="case-overlay">
          <div className="container">
            <h1 style={{ color:'#fff', fontSize:'clamp(32px,6vw,72px)', margin:0 }}>{project.title}</h1>
          </div>
        </div>
      </section>

      <section className="section" style={{ color:'#fff' }}>
        <div className="container case-meta">
          <div className="meta-tags" aria-label="case meta">
            <span className="meta-tag">{project.category}</span>
            <span className="meta-tag">{project.year}</span>
          </div>
          <p style={{ fontSize:20, lineHeight:1.6, maxWidth:800, marginTop:16 }}>{project.summary}</p>
        </div>
      </section>

      <section className="section" style={{ background:'#fff', color:'#0B0F19' }}>
        <div className="container">
          <div className="case-grid" style={{ marginBottom:'48px' }}>
            <img src="/assets/project1.webp" alt="Design process" loading="lazy" decoding="async" />
            <div>
              <h3>Challenge</h3>
              <p>The client needed a modern web presence that clearly conveyed complex ideas while remaining intuitive, and automated lead capture and qualification.</p>
            </div>
          </div>
          <div className="case-grid" style={{ marginBottom:'48px' }}>
            <img src="/assets/project2.webp" alt="Solution" loading="lazy" decoding="async" />
            <div>
              <h3>Solution</h3>
              <p>We designed and built a bespoke website with intelligent automations and motion, balancing speed, clarity and delight.</p>
            </div>
          </div>
          <div className="case-grid">
            <img src="/assets/project3.webp" alt="Outcome" loading="lazy" decoding="async" />
            <div>
              <h3>Outcome</h3>
              <p>A high‑end digital experience that doubled lead conversion, reduced manual follow‑up and showcased the brand through elegant motion.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ color:'#fff', borderTop:'1px solid rgba(255,255,255,.1)' }}>
        <div className="container case-nav">
          <Link to={`/work/${prev.slug}`} className="btn secondary" aria-label={`Previous: ${prev.title}`}>← Previous</Link>
          <Link to={`/work/${next.slug}`} className="btn secondary" aria-label={`Next: ${next.title}`}>Next →</Link>
        </div>
      </section>

      {/* sticky CTA */}
      <a href="/#contact" className="btn primary" style={{
        position:'fixed', right:'24px', bottom:'24px', zIndex:1000
      }}>Start a project</a>
    </>
  );
}
