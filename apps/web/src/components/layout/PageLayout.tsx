import { type ReactNode } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main id="main-content" className={className}>
        {children}
      </main>
      <Footer />
    </>
  );
}

import Image from 'next/image';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  pattern?: boolean;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, image, pattern, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-32">
      {image ? (
        <>
          <div className="absolute inset-0">
            <Image src={image} alt={title} fill priority className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-surface-900/80 bg-gradient-to-t from-surface-900 via-surface-900/60 to-surface-900/30 backdrop-blur-[2px]" aria-hidden />
        </>
      ) : (
        <div className="gradient-mesh absolute inset-0" aria-hidden />
      )}

      {pattern && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-[40%] -left-[10%] h-[100%] w-[60%] rounded-full bg-brand-300/15 blur-[120px]" />
          <div className="absolute top-[20%] -right-[10%] h-[80%] w-[50%] rounded-full bg-purple-400/10 blur-[100px]" />
          <div className="absolute -bottom-[20%] left-[20%] h-[60%] w-[60%] rounded-full bg-blue-300/10 blur-[120px]" />
        </div>
      )}
      
      <div className="container-wide relative z-10">
        {eyebrow && (
          <span className={`mb-6 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${image ? 'bg-brand-500/20 text-brand-100 border border-brand-500/30' : 'bg-brand-50 text-brand-600'}`}>
            {eyebrow}
          </span>
        )}
        <h1 className={`font-display max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl ${image ? 'text-white drop-shadow-sm' : 'text-surface-900'}`}>
          {title}
        </h1>
        {description && (
          <p className={`mt-6 max-w-2xl text-lg leading-relaxed md:text-xl ${image ? 'text-surface-200' : 'text-surface-500'}`}>
            {description}
          </p>
        )}
        {children && (
          <div className="mt-8">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title,
  description,
  primaryLabel = 'Request a Quote',
  primaryHref = '/request-quote',
  secondaryLabel = 'Contact Us',
  secondaryHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl bg-surface-900 px-8 py-16 text-center md:px-16 md:py-20">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                'radial-gradient(circle at 30% 50%, rgba(12,140,233,0.4) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(139,92,246,0.3) 0%, transparent 60%)',
            }}
            aria-hidden
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-surface-400">{description}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={primaryHref}
                className="inline-flex h-12 items-center justify-center rounded-xl gradient-brand px-8 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5"
              >
                {primaryLabel}
              </a>
              <a
                href={secondaryHref}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-surface-600 px-8 text-sm font-semibold text-white transition-all hover:bg-surface-800"
              >
                {secondaryLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
