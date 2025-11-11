import Reveal from '../Reveal';

export default function AboutSplit() {
  return (
    <section id="about" className="section light" aria-labelledby="about-title">
      <div className="container grid two-col">
        <div>
          <Reveal>
            <p style={{
              textTransform: 'uppercase',
              letterSpacing: '.12em',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--muted)',
              marginBottom: 'var(--s-2)'
            }}>
              About
            </p>
          </Reveal>
          <Reveal>
            <h2 id="about-title">AI-driven marketing for service businesses</h2>
          </Reveal>
          <Reveal>
            <p style={{ color: 'var(--muted)', fontSize: 'var(--body-lg)' }}>
              We plan, test, and optimize campaigns. You get more qualified leads with less guesswork.
            </p>
          </Reveal>
          <Reveal>
            <ul style={{
              margin: 'var(--s-4) 0',
              padding: 0,
              listStyle: 'none',
              display: 'grid',
              gap: 'var(--s-2)',
              color: 'var(--text)'
            }}>
              <li>• Campaign strategy and landing pages</li>
              <li>• SEO and local search optimization</li>
              <li>• Analytics with weekly insights</li>
            </ul>
          </Reveal>
          <Reveal>
            <div style={{ display: 'flex', gap: '12px', marginTop: 'var(--s-4)' }}>
              <a className="btn primary" href="#contact">Get a proposal</a>
              <a className="btn ghost" href="#work">See work</a>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="card">
            <img 
              src="/assets/project1.webp" 
              alt="FetchMarketing work samples" 
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 'var(--radius-2)',
                marginBottom: 'var(--s-3)'
              }}
            />
            <p style={{ 
              color: 'var(--muted)', 
              fontSize: '15px',
              margin: 0 
            }}>
              Recent results: +42% qualified leads, −28% CPL after 30 days.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
