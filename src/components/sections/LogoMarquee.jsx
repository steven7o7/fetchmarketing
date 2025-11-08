export default function LogoMarquee() {
  return (
    <section className="logo-strip reveal" aria-label="Client logos">
      <div className="container">
        <div className="logo-row">
          <img src="/assets/logo1.webp" alt="" aria-hidden="true" />
          <img src="/assets/logo2.webp" alt="" aria-hidden="true" />
          <img src="/assets/logo3.webp" alt="" aria-hidden="true" />
          <img src="/assets/logo4.webp" alt="" aria-hidden="true" />
          {/* duplicate for seamless loop */}
          <img src="/assets/logo1.webp" alt="" aria-hidden="true" />
          <img src="/assets/logo2.webp" alt="" aria-hidden="true" />
          <img src="/assets/logo3.webp" alt="" aria-hidden="true" />
          <img src="/assets/logo4.webp" alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
