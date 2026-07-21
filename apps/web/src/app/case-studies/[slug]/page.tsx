import { notFound } from 'next/navigation';
import { CheckCircle2, Quote } from 'lucide-react';
import { PageLayout, PageHero, CTASection } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/Motion';
import { caseStudies, getCaseStudyBySlug } from '@/content/case-studies';
import { createMetadata } from '@/lib/seo';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return createMetadata({ title: study.title, description: study.challenge, path: `/case-studies/${slug}` });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <PageLayout>
      <PageHero eyebrow="Case Study" title={study.title} description={study.client} />
      <section className="py-12 md:py-16">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Case Studies', href: '/case-studies' }, { label: study.title }]} />
          
          <div className="mt-8 grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-12">
              <FadeIn>
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full aspect-[2/1] object-cover rounded-2xl shadow-sm mb-12"
                />
                
                <h2 className="font-display mb-6 text-3xl font-bold text-surface-900">Executive Summary</h2>
                <p className="text-lg leading-relaxed text-surface-600 mb-12">{study.executiveSummary}</p>
              </FadeIn>
              
              <FadeIn>
                <h2 className="font-display mb-6 text-3xl font-bold text-surface-900">The Challenge</h2>
                <p className="text-lg leading-relaxed text-surface-600">{study.challengeDetails}</p>
              </FadeIn>

              <FadeIn>
                <h2 className="font-display mb-6 text-3xl font-bold text-surface-900">Our Solution</h2>
                <p className="text-lg leading-relaxed text-surface-600">{study.solutionDetails}</p>
              </FadeIn>

              <FadeIn>
                <h2 className="font-display mb-6 text-3xl font-bold text-surface-900">Business Results</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {study.results.map((r) => (
                    <div key={r} className="flex items-start gap-3 bg-surface-50 p-4 rounded-xl border border-surface-200">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                      <span className="text-surface-700 font-medium">{r}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {study.testimonial && (
                <FadeIn>
                  <blockquote className="relative bg-brand-50 border border-brand-100 p-8 rounded-2xl mt-16">
                    <Quote className="absolute top-8 left-8 h-12 w-12 text-brand-200/50 -translate-x-4 -translate-y-4" />
                    <div className="relative z-10">
                      <p className="text-xl font-medium leading-relaxed text-surface-900 mb-6">
                        &quot;{study.testimonial.quote}&quot;
                      </p>
                      <footer>
                        <div className="font-semibold text-surface-900">{study.testimonial.author}</div>
                        <div className="text-brand-600 text-sm font-medium">{study.testimonial.role}</div>
                        <div className="text-surface-500 text-sm">{study.client}</div>
                      </footer>
                    </div>
                  </blockquote>
                </FadeIn>
              )}
            </div>
            
            <FadeIn>
              <Card className="sticky top-24">
                <h3 className="font-display mb-4 text-lg font-semibold">Project Details</h3>
                <dl className="space-y-4 text-sm">
                  <div><dt className="text-surface-400 mb-1">Client</dt><dd className="font-semibold text-surface-900 text-base">{study.client}</dd></div>
                  <div className="h-px w-full bg-surface-100 my-2" />
                  <div><dt className="text-surface-400 mb-1">Industry</dt><dd className="font-semibold text-surface-900 text-base">{study.industry}</dd></div>
                  <div className="h-px w-full bg-surface-100 my-2" />
                  <div><dt className="text-surface-400 mb-1">Duration</dt><dd className="font-semibold text-surface-900 text-base">{study.duration}</dd></div>
                </dl>
                
                <h3 className="font-display mb-4 mt-8 text-lg font-semibold">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((t) => (
                    <span key={t} className="rounded-lg bg-surface-100 px-3 py-1.5 text-xs font-semibold text-surface-700 border border-surface-200">{t}</span>
                  ))}
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
      <CTASection title="Ready for Similar Results?" description="Let's architect a solution tailored to your business challenges." />
    </PageLayout>
  );
}
