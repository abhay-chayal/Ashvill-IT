'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/Motion';
import { motion, AnimatePresence } from 'framer-motion';

const impacts = [
  {
    quote: "Technology only matters if it empowers the humans using it.",
    p1: "At Ashvill IT, we don't just write code; we build tools that help your people do the best work of their lives. Whether it's streamlining a complex workflow or automating tedious tasks, our goal is to drive meaningful human impact.",
    p2: "Because behind every enterprise digital transformation is a team of real people who need technology to work for them, not against them.",
    initials: "JD",
    name: "Jane Doe",
    role: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2938&auto=format&fit=crop"
  },
  {
    quote: "Great software is built on a foundation of empathy for the user.",
    p1: "We believe that the most powerful enterprise systems are those that feel invisible. When technology perfectly aligns with human intuition, friction disappears, and true productivity begins.",
    p2: "That's why we spend as much time understanding your team's daily challenges as we do architecting your cloud infrastructure.",
    initials: "JS",
    name: "John Smith",
    role: "VP of Engineering",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
  },
  {
    quote: "AI should augment human intelligence, not replace human intuition.",
    p1: "In the rush toward automation, we never lose sight of the human element. Our AI solutions are designed to elevate your workforce, taking over repetitive tasks so your people can focus on high-value, creative problem-solving.",
    p2: "We build systems that learn from your experts, empowering them to make better decisions, faster.",
    initials: "EC",
    name: "Emily Chen",
    role: "Lead Data Scientist",
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2938&auto=format&fit=crop"
  },
  {
    quote: "Our true measure of success is the peace of mind we deliver.",
    p1: "Enterprise technology is often stressful. We've built our entire delivery model around reliability, transparency, and trust, ensuring that you never have to worry about the stability of your core systems.",
    p2: "When you partner with us, you're not just buying a service; you're gaining a team that is deeply invested in your success.",
    initials: "MJ",
    name: "Michael Johnson",
    role: "Client Success Director",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop"
  }
];

export function HumanImpact() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % impacts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % impacts.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + impacts.length) % impacts.length);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-wide relative z-10">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-500">The Human Element</p>
              <h2 className="font-display text-3xl font-light tracking-tight text-surface-950 md:text-4xl">Empowering People First</h2>
            </div>
            <div className="flex gap-3">
              <button onClick={handlePrev} className="h-12 w-12 rounded-full border border-surface-200 flex items-center justify-center text-surface-500 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-all duration-300">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button onClick={handleNext} className="h-12 w-12 rounded-full border border-surface-200 flex items-center justify-center text-surface-500 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-all duration-300">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          <div>
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center"
              >
                
                <div className="relative">
                  <Quote className="h-24 w-24 text-surface-100 absolute -top-8 -left-8 md:-top-10 md:-left-12 -z-10 rotate-180" />
                  <h3 className="font-display text-3xl font-light tracking-tight text-surface-950 md:text-5xl leading-[1.15] mb-8">
                    &quot;{impacts[currentIndex].quote}&quot;
                  </h3>
                  <div className="space-y-5 text-lg text-surface-600 leading-relaxed mb-10">
                    <p>{impacts[currentIndex].p1}</p>
                    <p>{impacts[currentIndex].p2}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-surface-900 flex items-center justify-center text-white font-medium text-xl shadow-lg">
                      {impacts[currentIndex].initials}
                    </div>
                    <div>
                      <div className="font-bold text-surface-950 text-lg">{impacts[currentIndex].name}</div>
                      <div className="text-sm text-surface-500 font-medium uppercase tracking-widest mt-0.5">{impacts[currentIndex].role}</div>
                    </div>
                  </div>
                </div>

                <div className="relative h-full w-full min-h-[400px] lg:min-h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={impacts[currentIndex].image}
                    alt={impacts[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
                </div>
                
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
