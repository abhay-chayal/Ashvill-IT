import { PageLayout, PageHero, CTASection } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CareersFilter } from '@/components/sections/CareersFilter';
import { jobListings } from '@/content/careers';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Careers',
  description: 'Join Ashvill IT Solutions — build enterprise technology, lead strategic initiatives, and innovate with a world-class team of engineers, product managers, and leaders.',
  path: '/careers',
});

export default function CareersPage() {
  return (
    <PageLayout>
      <PageHero
        pattern
        eyebrow="Careers & Leadership"
        title="Shape the Future of Enterprise Technology"
        description="We are hiring top-tier talent across both Technical Engineering and Management & Leadership. Explore our open positions and build high-impact solutions with global reach."
      />
      <section className="py-12 md:py-16">
        <div className="container-wide">
          <div className="mb-8">
            <Breadcrumbs items={[{ label: 'Careers' }]} />
          </div>
          <CareersFilter jobs={jobListings} />
        </div>
      </section>
      <CTASection
        title="Don't See Your Specific Role?"
        description="We are always seeking visionaries, engineering leads, and technical innovators. Send us your profile and let's explore opportunities together."
        primaryLabel="Contact Talent Team"
        primaryHref="/contact"
      />
    </PageLayout>
  );
}

