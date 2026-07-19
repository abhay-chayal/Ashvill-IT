import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';

const caseStudies = [
  {
    slug: 'fintech-platform-modernization',
    title: 'FinTech Platform Modernization',
    industry: 'Financial Services',
    result: '60% faster transaction processing',
    description:
      'Migrated a legacy banking platform to cloud-native microservices, reducing processing time and improving compliance reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
  },
  {
    slug: 'healthcare-ai-diagnostics',
    title: 'AI-Powered Healthcare Diagnostics',
    industry: 'Healthcare',
    result: '92% diagnostic accuracy improvement',
    description:
      'Built an ML-powered diagnostic assistance system integrated with hospital EMR workflows, improving clinician decision-making.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
  },
  {
    slug: 'retail-omnichannel-platform',
    title: 'Retail Omnichannel Platform',
    industry: 'Retail & E-commerce',
    result: '3x increase in online revenue',
    description:
      'Developed a unified commerce platform connecting online, mobile, and in-store experiences for a global retail brand.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <FadeIn>
          <SectionHeader
            eyebrow="Case Studies"
            title="Proven Results for Global Enterprises"
            description="Real outcomes from real partnerships. Explore how we've helped organizations transform their technology landscape."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-8 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <StaggerItem key={study.slug}>
              <Link href={`/case-studies/${study.slug}`} className="group block h-full">
                <div className="glass relative flex h-full flex-col overflow-hidden rounded-3xl border border-surface-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      {study.industry}
                    </span>
                  </div>
                  <div className="flex flex-grow flex-col p-6 md:p-8">
                    <h3 className="mb-3 font-display text-xl font-semibold text-surface-900 group-hover:text-brand-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="mb-6 flex-grow text-sm leading-relaxed text-surface-500">
                      {study.description}
                    </p>
                    <div className="border-t border-surface-200 pt-4">
                      <span className="text-sm font-semibold text-brand-600 flex items-center gap-2">
                        {study.result}
                        <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            View all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
