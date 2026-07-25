import { notFound } from 'next/navigation';
import { CheckCircle2, MapPin, Clock, Briefcase, Code2, Sparkles, Building2, Gift } from 'lucide-react';
import { PageLayout, PageHero, CTASection } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/Motion';
import { jobListings, getJobBySlug } from '@/content/careers';
import { contact } from '@/config/company';
import { createMetadata } from '@/lib/seo';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return jobListings.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return createMetadata({ title: job.title, description: job.description, path: `/careers/${slug}` });
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <PageLayout>
      <PageHero
        eyebrow={`${job.category} Track · ${job.department}`}
        title={job.title}
        description={job.description}
      />
      <section className="py-12 md:py-16">
        <div className="container-wide">
          <div className="mb-8">
            <Breadcrumbs items={[{ label: 'Careers', href: '/careers' }, { label: job.title }]} />
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-10">
              {/* Key Responsibilities */}
              {job.responsibilities && job.responsibilities.length > 0 && (
                <FadeIn>
                  <h2 className="font-display mb-5 text-2xl font-bold text-surface-900 flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-brand-500" />
                    Key Responsibilities
                  </h2>
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-surface-200 shadow-xs">
                    <ul className="space-y-4">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3.5 text-surface-700 leading-relaxed">
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-500" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              )}

              {/* Requirements & Qualifications */}
              <FadeIn>
                <h2 className="font-display mb-5 text-2xl font-bold text-surface-900 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-brand-500" />
                  Requirements & Qualifications
                </h2>
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-surface-200 shadow-xs">
                  <ul className="space-y-4">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3.5 text-surface-700 leading-relaxed">
                        <div className="mt-1.5 h-2 w-2 rounded-full bg-brand-500 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Benefits & Perks */}
              {job.benefits && job.benefits.length > 0 && (
                <FadeIn>
                  <h2 className="font-display mb-5 text-2xl font-bold text-surface-900 flex items-center gap-2">
                    <Gift className="h-6 w-6 text-brand-500" />
                    What We Offer
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {job.benefits.map((benefit, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl border border-surface-200/80 flex items-center gap-3 text-sm font-medium text-surface-800 shadow-2xs">
                        <div className="p-2 rounded-lg bg-brand-50 text-brand-600 border border-brand-200/60">
                          <Sparkles className="h-4 w-4" />
                        </div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <FadeIn className="sticky top-24">
                <Card className="border border-surface-200 bg-white p-6 shadow-sm">
                  {/* Category Pill */}
                  <div className="mb-6 pb-4 border-b border-surface-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-800 border border-brand-200">
                      {job.category === 'Management' ? <Briefcase className="h-3.5 w-3.5" /> : <Code2 className="h-3.5 w-3.5" />}
                      {job.category} Track
                    </span>
                    <span className="text-xs text-surface-500 font-medium">{job.type}</span>
                  </div>

                  <h3 className="font-display mb-4 text-lg font-bold text-surface-900">Role Summary</h3>

                  <dl className="space-y-4 text-sm">
                    <div className="flex items-center gap-3 text-surface-700">
                      <MapPin className="h-4 w-4 text-surface-400 shrink-0" />
                      <div>
                        <dt className="text-xs text-surface-400">Location</dt>
                        <dd className="font-medium text-surface-900">{job.location}</dd>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-surface-700">
                      <Clock className="h-4 w-4 text-surface-400 shrink-0" />
                      <div>
                        <dt className="text-xs text-surface-400">Experience</dt>
                        <dd className="font-medium text-surface-900">{job.experience}</dd>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-surface-700">
                      <Building2 className="h-4 w-4 text-surface-400 shrink-0" />
                      <div>
                        <dt className="text-xs text-surface-400">Department</dt>
                        <dd className="font-medium text-surface-900">{job.department}</dd>
                      </div>
                    </div>
                  </dl>

                  <div className="mt-8 space-y-3">
                    <Button href={`mailto:${contact.careersEmail}?subject=Application: ${job.title}`} className="w-full justify-center text-center">
                      Apply for this Position
                    </Button>
                    <p className="text-xs text-center text-surface-400">
                      Or send your CV directly to <span className="text-surface-700 font-medium">{contact.careersEmail}</span>
                    </p>
                  </div>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      <CTASection title="Have Questions?" description="Reach out to our talent acquisition team to learn more about career paths at Ashvill IT." />
    </PageLayout>
  );
}

