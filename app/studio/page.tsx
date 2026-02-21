'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import Image from 'next/image';
import { StudioGrid } from '@/components/StudioGrid';

export default function StudioPage() {
  const services = ['Architecture', 'Interior Design', 'Landscape Design'];
  const projectTypes = ['Residential', 'Commercial', 'Hospitality', 'Corporate interiors'];
  const philosophies = [
    'Legibility',
    'User-friendly design',
    'Sustainable solutions',
    'Environmentally conscious approach',
    'Attention to detail',
    'Contextual responsiveness'
  ];

  return (
    <>
      <Section className="pt-32 pb-8 md:pb-12">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-5xl md:text-6xl font-bold mb-4"
          >
            Studio Creative Ant
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-500 uppercase tracking-widest mb-12"
          >
            The concept for better living
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none text-gray-700 space-y-6 mb-12"
          >
            <p>
              Studio Creative Ant actively engages in creating spaces that incorporate nature 
              while bridging the gap between human experience and built environment.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-white py-0 md:py-0 pb-16 md:pb-20">
        <StudioGrid />
      </Section>

      <Section className="bg-gray-50 pt-0 md:pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl font-bold mb-8 uppercase tracking-tight">Our Expertise</h2>
              <ul className="space-y-4 text-gray-700">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                    {service}
                  </li>
                ))}
              </ul>
              <div className="mt-12">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Sector Focus</h3>
                <ul className="space-y-4 text-gray-700">
                  {projectTypes.map((type) => (
                    <li key={type} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-2"
            >
              <h2 className="font-heading text-3xl font-bold mb-8 uppercase tracking-tight">Our Philosophy</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {philosophies.map((item) => (
                  <div key={item} className="border-l-2 border-black pl-6 py-2">
                    <p className="font-medium text-gray-900">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-gray-700 leading-relaxed">
                <p>
                  Our philosophy is rooted in creating architecture that connects people, space, and nature. 
                  We emphasize honest material expression, simplicity, and spatial harmony, allowing 
                  each element to serve a clear purpose.
                </p>
                <p className="mt-4">
                  Through careful planning and refined execution, we design spaces that are calm, enduring, 
                  and deeply connected to human experience. Every project reflects our commitment to 
                  thoughtful design, craftsmanship, and timeless architecture.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}
