import { useState } from 'react';
import Reveal from '../Reveal';

export default function CTA() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    business: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Client-side validation
    const errors = [];
    if (!formState.name.trim()) errors.push('Name is required');
    if (!formState.email.trim()) errors.push('Email is required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.push('Valid email is required');
    }
    if (!formState.message.trim()) errors.push('Message is required');

    if (errors.length > 0) {
      setStatus({ type: 'error', message: errors.join('; ') });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });

      const data = await response.json();

      if (data.ok) {
        setStatus({ 
          type: 'success', 
          message: data.message || 'Message sent successfully!' 
        });
        setFormState({ name: '', email: '', business: '', message: '' });
      } else {
        setStatus({ 
          type: 'error', 
          message: data.error || 'Something went wrong. Please try again.' 
        });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section light" id="contact" aria-labelledby="contact-title">
      <div className="container" style={{ maxWidth: '640px', margin: '0 auto' }}>
        <Reveal>
          <p style={{
            textTransform: 'uppercase',
            letterSpacing: '.12em',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--muted)',
            marginBottom: 'var(--s-2)',
            textAlign: 'center'
          }}>
            Contact
          </p>
        </Reveal>
        <Reveal>
          <h2 
            id="contact-title" 
            style={{ 
              marginBottom: 'var(--s-3)', 
              color: 'var(--text)',
              textAlign: 'center'
            }}
          >
            Ready to grow smarter?
          </h2>
        </Reveal>
        <Reveal>
          <p style={{ 
            color: 'var(--muted)', 
            fontSize: 'var(--body-lg)', 
            marginBottom: 'var(--s-6)',
            textAlign: 'center',
            margin: '0 auto var(--s-6)'
          }}>
            Book a free strategy call or send us a message to get started.
          </p>
        </Reveal>
        
        <Reveal>
          <form className="form" onSubmit={handleSubmit} noValidate>
            <input 
              className="input"
              type="text" 
              name="name" 
              placeholder="Name" 
              value={formState.name}
              onChange={handleChange}
              required 
              aria-label="Your name"
            />
            <input 
              className="input"
              type="email" 
              name="email" 
              placeholder="Email" 
              value={formState.email}
              onChange={handleChange}
              required 
              aria-label="Your email"
            />
            <input 
              className="input"
              type="text" 
              name="business" 
              placeholder="Business type (optional)" 
              value={formState.business}
              onChange={handleChange}
              aria-label="Business type (optional)"
            />
            <textarea 
              className="textarea"
              name="message" 
              rows="5" 
              placeholder="Tell us about your project" 
              value={formState.message}
              onChange={handleChange}
              required
              aria-label="Your message"
            />
            <button 
              type="submit" 
              className="btn primary" 
              disabled={isSubmitting}
              style={{ width: '100%' }}
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
            
            {status.message && (
              <p 
                className={`form-status ${status.type}`}
                role="status"
                aria-live="polite"
                style={{
                  marginTop: 'var(--s-3)',
                  padding: 'var(--s-3)',
                  borderRadius: 'var(--radius-1)',
                  backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da',
                  color: status.type === 'success' ? '#155724' : '#721c24',
                  border: `1px solid ${status.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
                  fontSize: '15px',
                  textAlign: 'center'
                }}
              >
                {status.message}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
