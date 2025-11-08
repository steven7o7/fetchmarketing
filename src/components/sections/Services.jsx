export default function Services() {
  const services = [
    { title:'Websites', desc:'Responsive, fast and conversion‑focused websites.' },
    { title:'SEO & Local', desc:'Get found when it matters with on‑page and local SEO.' },
    { title:'Social Media', desc:'Grow your brand and build community across platforms.' },
    { title:'AI Automation', desc:'Automate workflows and marketing tasks using AI.' }
  ];

  return (
    <section className="section reveal" id="services" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title" className="section-title">Capabilities</h2>
        <div className="services">
          {services.map(s => (
            <div key={s.title} className="service-card">
              <h3 style={{ marginBottom:'var(--s1)', fontSize:22 }}>{s.title}</h3>
              <p style={{ fontSize:16, lineHeight:1.4, marginBottom:0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
