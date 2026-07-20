"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2, Globe, Smartphone, Cloud, GitBranch, Shield, Brain, Sparkles,
  Building2, Users, Layers, Palette, TestTube, Cog, BarChart3, PieChart,
  Plug, Lightbulb, UserPlus, UsersRound, RefreshCw, Wrench, ArrowRightLeft,
  ArrowRight, type LucideIcon,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card, CardIcon } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/Motion';
import { services } from '@/content/services';

const iconMap: Record<string, LucideIcon> = {
  Code2, Globe, Smartphone, Cloud, GitBranch, Shield, Brain, Sparkles,
  Building2, Users, Layers, Palette, TestTube, Cog, BarChart3, PieChart,
  Plug, Lightbulb, UserPlus, UsersRound, RefreshCw, Wrench, ArrowRightLeft,
};

const imageMap: Record<string, string> = {
  'custom-software-development': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80',
  'web-development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
  'mobile-apps': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80',
  'cloud': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
  'devops': 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80',
  'cybersecurity': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
  'ai': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80',
  'generative-ai': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
};

export function ServicesPreview() {
  const featured = services.slice(0, 8);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Auto-advance the active index
  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % featured.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(timer);
  }, [featured.length, isHovered]);

  // Scroll to the active card
  useEffect(() => {
    if (!scrollContainerRef.current || !cardRefs.current[activeIndex]) return;
    
    const container = scrollContainerRef.current;
    const card = cardRefs.current[activeIndex];
    
    if (card) {
      const scrollLeft = card.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (card.clientWidth / 2);
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  return (
    <section className="section-padding relative bg-white">
      <div className="container-wide">
        <FadeIn>
          <SectionHeader
            eyebrow="Our Services"
            title="Comprehensive Technology Solutions"
            description="From strategy to execution, we deliver end-to-end technology services that drive measurable business outcomes for enterprise organizations."
          />
        </FadeIn>

        <div className="mt-16 flex flex-col gap-8">
          {/* Top Showcase Image Area */}
          <div 
            className="relative w-full h-[50vh] min-h-[400px] lg:h-[60vh] rounded-3xl overflow-hidden shadow-sm bg-white border border-surface-200"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                {imageMap[featured[activeIndex].slug] && (
                  <Image
                    src={imageMap[featured[activeIndex].slug]}
                    alt={featured[activeIndex].title}
                    fill
                    priority={activeIndex === 0}
                    className="object-cover"
                  />
                )}
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
                
                {/* Embedded Content inside the image */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="max-w-2xl"
                  >
                    <h3 className="text-4xl lg:text-5xl font-display font-light text-surface-950 mb-6">
                      {featured[activeIndex].title}
                    </h3>
                    <p className="text-surface-600 font-light text-lg lg:text-xl leading-relaxed">
                      {featured[activeIndex].shortDescription}
                    </p>
                    <div className="mt-8">
                        <Link
                         href={`/services/${featured[activeIndex].slug}`}
                         className="inline-flex items-center gap-2 bg-surface-900 hover:bg-surface-800 text-white px-6 py-3 rounded-full font-medium transition-colors"
                       >
                         Explore Service <ArrowRight className="h-4 w-4" />
                       </Link>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Horizontal Scrollable Cards */}
          <div 
            className="relative z-10 px-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-12 pt-4 px-4 snap-x snap-mandatory hide-scrollbar"
            >
              {featured.map((service, index) => {
                const Icon = iconMap[service.icon] ?? Code2;
                const isActive = activeIndex === index;

                return (
                  <div
                    key={service.slug}
                    ref={(el) => { cardRefs.current[index] = el; }}
                    onMouseEnter={() => setActiveIndex(index)}
                    className="snap-center shrink-0 w-[280px] lg:w-[320px]"
                  >
                    <Card
                      hover
                      glass={!isActive}
                      className={`h-full cursor-pointer transition-all duration-500 transform ${
                        isActive 
                          ? 'ring-2 ring-brand-500 shadow-2xl bg-white scale-105 -translate-y-2' 
                          : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div className="flex flex-col h-full">
                        <div className={`mb-4 transition-colors duration-300 ${isActive ? 'text-brand-600' : 'text-surface-600'}`}>
                           <Icon className="h-8 w-8" />
                        </div>
                        <h3 className={`mb-2 font-display text-xl font-medium transition-colors duration-300 ${isActive ? 'text-surface-900' : 'text-surface-700'}`}>
                          {service.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-surface-500 line-clamp-2">
                          {service.shortDescription}
                        </p>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <FadeIn className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            View all 24 services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
      
      {/* Hide scrollbar CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
