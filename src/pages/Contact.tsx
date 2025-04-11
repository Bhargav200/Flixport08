import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="pt-20 px-4 md:px-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Get in Touch</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-gray-900 text-white rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-gray-900 text-white rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full p-3 bg-gray-900 text-white rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>
              {status === 'error' && (
                <div className="text-red-500">{errorMessage}</div>
              )}
              {status === 'success' && (
                <div className="text-green-500">Message sent successfully!</div>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition ${
                  status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Send size={20} />
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <Phone size={24} className="text-blue-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <Mail size={24} className="text-blue-500" />
                  <span>contact@example.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <MapPin size={24} className="text-blue-500" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
