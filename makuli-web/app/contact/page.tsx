'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus('');

    const form = event.currentTarget;

    try {
      const result = await emailjs.sendForm(
        'service_8qegkek',
        'template_66l8z3o',
        form,
        'xbBEEjxYg3lRTjViK'
      );

      console.log('Email sent successfully:', result.text);
      setStatus('Message sent successfully');
      form.reset();

      setTimeout(() => setStatus(''), 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Failed to send message');

      setTimeout(() => setStatus(''), 5000);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contactanos</h1>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              disabled={loading}
            />
          </div>

          {status == 'Message sent successfully' && (
            <div className="p-4 bg-green-100 text-green-700 rounded-lg border border-green-200">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          )}

          {status === 'error' && (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg border border-red-200">
              ✗ Oops! There was an error sending your message. Please try again.
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
