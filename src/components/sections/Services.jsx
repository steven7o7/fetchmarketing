import Reveal from '../Reveal';

export default function Services() {
  const services = [
    { 
      title: 'Websites', 
      desc: 'Responsive, fast and conversion-focused websites that tell your story.' 
    },
    { 
      title: 'SEO & Local', 
      desc: 'Get found when it matters with on-page and local search optimization.' 
    },
    { 
      title: 'Social Media', 
      desc: 'Grow your brand and build community across all platforms.' 
    },
    { 
      title: 'AI Automation', 
      desc: 'Automate workflows and marketing tasks using AI-powered tools.' 
    }
  ];

  return (
    <section className="section" id="services" aria-labelledby="services-title">
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
            Services
          </p>
        </Reveal>
        <Reveal>
          <h2 
            id="services-title" 
            style={{ 
              textAlign: 'center', 
              marginBottom: 'var(--s-6)',
              color: 'var(--text-dark)'
            }}
          >
            What we do
          </h2>
        </Reveal>
        <div className="grid" style={{ 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 'var(--s-4)'
        }}>
          {services.map((service, index) => (
            <Reveal key={service.title}>
              <div className="card" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                height: '100%'
              }}>
                <h3 style={{ 
                  marginBottom: 'var(--s-2)', 
                  color: 'var(--text-dark)'
                }}>
                  {service.title}
                </h3>
                <p style={{ 
                  fontSize: '15px', 
                  lineHeight: 1.6, 
                  marginBottom: 0,
                  color: 'var(--muted-dark)'
                }}>
                  {service.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
