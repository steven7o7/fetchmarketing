import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

export default function WorkGrid() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <h2 id="work-title" className="section-title">Featured work</h2>
        <div className="work-grid reveal">
          {projects.map(p => (
            <Link key={p.slug} to={`/work/${p.slug}`} className="work-card" aria-label={`View ${p.title} case study`}>
              <img src={p.cover} alt={`${p.title} project cover`} loading="lazy" decoding="async" />
              <div className="overlay">
                <h3>{p.title}</h3>
                <span style={{ fontSize:14, opacity:0.8 }}>{p.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
