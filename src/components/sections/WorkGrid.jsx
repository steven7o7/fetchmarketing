import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import Reveal from '../Reveal';

export default function WorkGrid() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <Reveal>
          <p style={{
            textTransform: 'uppercase',
            letterSpacing: '.12em',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--muted-dark)',
            marginBottom: 'var(--s-2)',
            textAlign: 'center'
          }}>
            Portfolio
          </p>
        </Reveal>
        <Reveal>
          <h2 
            id="work-title" 
            style={{ 
              textAlign: 'center', 
              marginBottom: 'var(--s-6)',
              color: 'var(--text-dark)'
            }}
          >
            Featured work
          </h2>
        </Reveal>
        <div className="grid three-col" style={{ gap: 'var(--s-5)' }}>
          {projects.map((project, index) => (
            <Reveal key={project.slug}>
              <Link 
                to={`/work/${project.slug}`} 
                className="card" 
                aria-label={`View ${project.title} case study`}
                style={{
                  textDecoration: 'none',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  padding: 0,
                  overflow: 'hidden'
                }}
              >
                <img 
                  src={project.cover} 
                  alt={`${project.title} project`} 
                  loading="lazy" 
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '240px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: 'var(--s-4)' }}>
                  <h3 style={{ 
                    marginBottom: 'var(--s-1)', 
                    color: 'var(--text-dark)',
                    fontSize: '20px'
                  }}>
                    {project.title}
                  </h3>
                  <span style={{ 
                    fontSize: '14px', 
                    color: 'var(--muted-dark)',
                    textTransform: 'uppercase',
                    letterSpacing: '.08em'
                  }}>
                    {project.category}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
