export default function Journal() {
  const posts = [
    {img:'/assets/project2.webp', title:'5 SEO tips for local businesses'},
    {img:'/assets/project1.webp', title:'Designing conversion‑focused websites'},
    {img:'/assets/project3.webp', title:'Automate your marketing with AI'},
  ];
  return (
    <section className="section reveal" aria-labelledby="journal-title">
      <div className="container">
        <h2 id="journal-title" className="section-title">From the journal</h2>
        <div className="journal">
          {posts.map(p=>(
            <article key={p.title} className="journal-card">
              <img src={p.img} alt="" loading="lazy" decoding="async" />
              <div style={{ padding:'16px 16px 24px' }}>
                <h3 style={{ marginBottom:8 }}>{p.title}</h3>
                <a href="#" className="btn secondary" aria-label={`Read more: ${p.title}`}>Read more</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
