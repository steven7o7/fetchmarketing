/**
 * Serverless contact form handler
 * Compatible with Vercel and Netlify
 * Validates input and returns success/error responses
 */
export default async function handler(req, res) {
  // Enable CORS for development
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      ok: false, 
      error: 'Method not allowed. Use POST.' 
    });
  }

  try {
    // Parse body (handle both string and object)
    const body = typeof req.body === 'string' 
      ? JSON.parse(req.body || '{}') 
      : (req.body || {});

    // Validate required fields
    const { name, email, message } = body;
    const errors = [];

    if (!name || name.trim().length === 0) {
      errors.push('Name is required');
    }

    if (!email || email.trim().length === 0) {
      errors.push('Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('Valid email address is required');
    }

    if (!message || message.trim().length === 0) {
      errors.push('Message is required');
    }

    if (errors.length > 0) {
      return res.status(400).json({ 
        ok: false, 
        error: errors.join('; '),
        errors 
      });
    }

    // In production, you would:
    // - Send email via SendGrid, Mailgun, etc.
    // - Store in database
    // - Send to CRM
    // - Trigger notifications
    
    // For now, log and return success
    console.log('Contact form submission:', {
      name,
      email,
      message,
      business: body.business || 'Not provided',
      timestamp: new Date().toISOString()
    });

    return res.status(200).json({ 
      ok: true, 
      message: 'Thank you! Your message has been received.',
      received: {
        name,
        email,
        hasMessage: true
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(400).json({ 
      ok: false, 
      error: 'Invalid request. Please check your input and try again.' 
    });
  }
}
