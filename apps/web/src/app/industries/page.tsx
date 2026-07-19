import { PageLayout, PageHero, CTASection } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { industries } from '@/content/industries';
import { createMetadata } from '@/lib/seo';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Industries',
  description: 'Ashvill IT Solutions serves finance, healthcare, retail, manufacturing, and more with tailored enterprise technology solutions.',
  path: '/industries',
});

export default function IndustriesPage() {
  return (
    <PageLayout>
      <PageHero pattern
        eyebrow="Industries"
        title="Industry-Specific Technology Expertise"
        description="Deep domain knowledge combined with cutting-edge technology to solve industry-specific challenges at enterprise scale."
      />

      <section className="py-12 md:py-11">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Industries' }]} />
          <StaggerContainer className="grid gap-8 md:grid-cols-2 mt-8">
            {industries.map((industry) => (
              <StaggerItem key={industry.slug}>
                <div className="group glass relative flex h-full flex-col overflow-hidden rounded-3xl border border-surface-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-grow flex-col p-6 md:p-8">
                    <h2 className="font-display mb-2 text-xl font-semibold text-surface-900 group-hover:text-brand-600 transition-colors">{industry.name}</h2>
                    <p className="mb-4 text-sm leading-relaxed text-surface-500">{industry.description}</p>
                    <div className="mb-4 flex-grow">
                      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-surface-400">Key Challenges</h3>
                      <div className="flex flex-wrap gap-2">
                        {industry.challenges.map((c) => (
                          <span key={c} className="rounded-lg bg-surface-100 px-2.5 py-1 text-xs text-surface-600 transition-colors group-hover:bg-brand-50 group-hover:text-brand-700">{c}</span>
                        ))}
                      </div>
                    </div>
                    <Link href={`/contact?industry=${industry.slug}`} className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 mt-2">
                      Discuss your project <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection title="Industry Expertise You Can Trust" description="Partner with a team that understands your industry's unique technology challenges." />
    </PageLayout>
  );
}
