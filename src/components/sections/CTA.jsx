export default function CTA() {
  return (
    <section className="section reveal" id="contact" aria-labelledby="contact-title">
      <div className="container cta">
        <h2 id="contact-title" className="section-title">Ready to grow smarter?</h2>
        <p>Book a free strategy call or send us a message to get started.</p>
        {/* Replace with a Calendly embed if you prefer */}
        <form className="form" onSubmit={(e)=>e.preventDefault()}>
          <input className="input" type="text" name="name" placeholder="Name" required />
          <input className="input" type="email" name="email" placeholder="Email" required />
          <input className="input" type="text" name="business" placeholder="Business type" />
          <textarea className="input" name="message" rows="4" placeholder="Tell us about your project" />
          <button type="submit" className="btn primary">Submit</button>
        </form>
      </div>
    </section>
  );
}
