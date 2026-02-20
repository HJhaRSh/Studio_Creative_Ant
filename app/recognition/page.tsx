'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';

export default function RecognitionPage() {
  const recognition = [
    {
      title: 'BMR Magazine',
      type: 'Publication',
      description: 'Featured architectural work and studio profile.'
    },
    {
      title: '35 Women in Design Magazine',
      type: 'Publication',
      description: 'Highlighting Ar. Khushboo Tathed as a creative force in design.'
    }
  ];

  return (
    <main className="bg-white">
      <Section className="pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-5xl md:text-6xl font-bold mb-8"
          >
            Recognition
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl"
          >
            Our work and contributions to architecture have been featured in various publications and recognized across the industry.
          </motion.p>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {recognition.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-12 border border-gray-100"
              >
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">
                  {item.type}
                </h3>
                <h2 className="font-heading text-3xl font-bold mb-6 text-black">
                  {item.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
