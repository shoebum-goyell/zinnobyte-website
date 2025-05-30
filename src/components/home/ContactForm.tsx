import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch('https://formsubmit.co/2cc9df2479e17ad44eaf02d9d2dd5eca', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      form.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('Error sending email:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing bg-navy-700">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="text-blue-accent font-medium mb-2 block">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your Dream Team?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's discuss how we can help you find the perfect talent to meet your company's unique needs and growth goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-navy-600 flex items-center justify-center flex-shrink-0 mr-4">
                  <Send size={20} className="text-blue-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Email Us</h3>
                  <a href="mailto:shweta.goyal@zinnobyte.com" className="text-gray-300 hover:text-blue-accent transition-colors">
                    shweta.goyal@zinnobyte.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-navy-600 flex items-center justify-center flex-shrink-0 mr-4">
                  <Send size={20} className="text-blue-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Call Us</h3>
                  <a href="tel:+919880772126" className="text-gray-300 hover:text-blue-accent transition-colors">
                    +91 9880772126
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mb-4">
                  <Check size={32} className="text-success-500" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} action="https://formsubmit.co/2cc9df2479e17ad44eaf02d9d2dd5eca" method="POST">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Get in Touch</h3>
                
                {error && (
                  <div className="mb-4 p-3 bg-error-100 text-error-700 rounded-md">
                    {error}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="input-field"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="input-field"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="input-field"
                      placeholder="Tell us about your recruitment needs..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary w-full ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;