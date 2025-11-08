export default function AboutSplit() {
  const items = [
    { img:'/assets/project1.webp', text:'We craft responsive websites that tell your story and drive results.' },
    { img:'/assets/project2.webp', text:'Our SEO strategies put you in front of the right audience at the right time.' },
    { img:'/assets/project3.webp', text:'We create social campaigns that engage and grow your community.' }
  ];

  return (
    <section className="section reveal" id="about" aria-labelledby="about-title" style={{ background:'var(--bg-light)' }}>
      <div className="container about">
        <div className="about-sticky">
          <h2 id="about-title">About us</h2>
          <p>
            FetchMarketing is a creative studio specialising in AI‑driven
            marketing for service businesses. We build experiences that
            connect, convert and delight.
          </p>
        </div>
        <div className="about-list">
          {items.map((item, i) => (
            <div key={i} className="about-item">
              <img src={item.img} alt="" loading="lazy" decoding="async" />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
