import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { PageLayout, PageHero, CTASection } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { caseStudies } from '@/content/case-studies';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Case Studies',
  description: 'Real enterprise technology outcomes from Ashvill IT Solutions client partnerships.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  return (
    <PageLayout>
      <PageHero pattern eyebrow="Case Studies" title="Proven Enterprise Outcomes" description="Explore how we've helped organizations transform their technology landscape." />
      <section className="py-12 md:py-11">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Case Studies' }]} />
          <StaggerContainer className="grid gap-8 lg:grid-cols-3 mt-12">
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
                      <p className="mb-6 flex-grow text-sm leading-relaxed text-surface-500 line-clamp-3">
                        {study.challenge}
                      </p>
                      <div className="border-t border-surface-200 pt-4">
                        <span className="text-sm font-semibold text-brand-600 flex items-center gap-2">
                          {study.results[0]}
                          <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <CTASection title="Your Success Story Starts Here" description="Partner with Ashvill to achieve transformative technology outcomes." />
    </PageLayout>
  );
}
