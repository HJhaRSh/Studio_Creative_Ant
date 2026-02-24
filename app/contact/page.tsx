'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Section className="!pt-20 !pb-12">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-5xl md:text-6xl font-bold mb-4"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg mb-0"
          >
            Get in touch with us to discuss your next project or learn more about our services.
          </motion.p>
        </div>
      </Section>

      <Section className="bg-gray-50 !pt-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 uppercase text-sm tracking-wide">Address</h3>
                    <p className="text-gray-600">
                      22, M.R Trade Centre,
                      <br />
                      Maliwada, Ahmednagar,
                      <br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 uppercase text-sm tracking-wide">Phone</h3>
                    <a href="tel:+919767455511" className="text-gray-600 hover:text-black transition-colors">
                      +91 9767455511
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 uppercase text-sm tracking-wide">Email</h3>
                    <a
                      href="mailto:studiocreativeant@gmail.com"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      studiocreativeant@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Instagram className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 uppercase text-sm tracking-wide">Instagram</h3>
                    <a
                      href="https://www.instagram.com/studio_creative_ant?igsh=MXh5dWcxaHR6b2M1bg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      @studio_creative_ant
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl font-bold mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-black text-white font-medium uppercase tracking-wide hover:bg-gray-800 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section className="bg-white !pt-0">
        <Container>
          <div className="relative aspect-[16/9] bg-gray-100 shadow-lg border border-gray-100">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Studio+Creative+Ant,M.R.+Trade+Centre,Ahmednagar,Maharashtra&output=embed"
              title="Studio Creative Ant Location"
            ></iframe>
          </div>
        </Container>
      </Section>
    </>
  );
}
