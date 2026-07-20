'use client';

import { useInView, animate } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { company, stats } from '@/config/company';

function AnimatedStat({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const [suffix, setSuffix] = useState('');
  
  useEffect(() => {
    const numMatch = value.match(/\d+/);
    if (!numMatch) {
      if (ref.current) ref.current.textContent = value;
      return;
    }
    const num = parseInt(numMatch[0], 10);
    const textSuffix = value.replace(numMatch[0], '');
    setSuffix(textSuffix);
    
    if (inView && ref.current) {
      const controls = animate(0, num, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (val) => {
          if (ref.current) {
            ref.current.textContent = Math.round(val).toString();
          }
        },
      });
      return controls.stop;
    }
  }, [value, inView]);

  return (
    <span>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 bg-[#F9F8F6] flex flex-col">
      <div className="container-wide">
        
        {/* Top Card Row */}
        <div className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {[
            { title: 'Software Engineering', href: '/services/custom-software-development' },
            { title: 'Cloud Architecture', href: '/services/cloud' },
            { title: 'Data & AI Platform', href: '/services/ai' },
            { title: 'Enterprise Security', href: '/services/cybersecurity' }
          ].map((card) => (
            <a key={card.title} href={card.href} className="bg-white p-6 rounded-xl border border-surface-200 shadow-sm hover:shadow-md transition-shadow group flex items-center justify-center text-center min-h-[120px]">
              <span className="font-display font-medium text-surface-800 group-hover:text-brand-600 transition-colors">{card.title}</span>
            </a>
          ))}
        </div>

        {/* Split Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="font-display text-5xl font-light leading-[1.1] tracking-tight text-surface-950 md:text-6xl lg:text-[4rem] mb-6">
              Engineering Digital Excellence
            </h1>
            <p className="text-lg text-surface-600 font-light leading-relaxed mb-10 max-w-lg">
              {company.name} delivers premium technology services — from custom software and cloud architecture to AI and cybersecurity. We build the physical and digital infrastructure that powers the modern enterprise.
            </p>
            <div className="mb-10">
              <strong className="block text-xs uppercase tracking-wider text-surface-900 mb-3">Trusted by global leaders</strong>
              <p className="text-surface-600 text-sm font-light">Microsoft, Amazon Web Services, Google Cloud, Oracle, Salesforce, SAP</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/request-quote" size="lg" className="bg-surface-900 hover:bg-surface-800 text-white border-none rounded-none px-8">
                Start Your Project
              </Button>
            </div>
          </div>
          
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-elevated">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2938&auto=format&fit=crop" 
              alt="Modern enterprise infrastructure and workspace" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4 border-t border-surface-200 pt-16">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-surface-300 pl-6">
              <div className="font-display text-4xl font-light text-surface-900 tracking-tight">
                <AnimatedStat value={stat.value} />
              </div>
              <div className="mt-2 text-xs font-semibold text-surface-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const partners = [
    { name: 'Microsoft', icon: 'microsoft' },
    { name: 'Amazon Web Services', icon: 'amazonaws' },
    { name: 'Google Cloud', icon: 'googlecloud' },
    { name: 'Oracle', icon: 'oracle' },
    { name: 'Salesforce', icon: 'salesforce' },
    { name: 'SAP', icon: 'sap' },
  ];

  return (
    <section className="border-b border-surface-200 bg-surface-50 py-10" aria-label="Technology Partners">
      <div className="container-wide">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-surface-400 mb-8">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="opacity-40 transition-all duration-300 hover:opacity-80 hover:-translate-y-1"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${partner.icon}.svg`}
                alt={partner.name}
                className="h-8 md:h-10 w-auto brightness-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
