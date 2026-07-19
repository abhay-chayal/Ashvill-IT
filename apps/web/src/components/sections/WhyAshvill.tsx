import Image from 'next/image';
import { Target, Zap, Shield, TrendingUp } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card, CardIcon } from '@/components/ui/Card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';

const values = [
  {
    icon: Target,
    title: 'Outcome-Driven',
    description:
      'Every engagement is measured against your business KPIs — not just technical deliverables.',
  },
  {
    icon: Zap,
    title: 'Velocity & Quality',
    description:
      'Agile delivery with enterprise-grade quality gates, ensuring speed without compromise.',
  },
  {
    icon: Shield,
    title: 'Security-First',
    description:
      'Security and compliance are embedded in our DNA, not bolted on as an afterthought.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Partnership',
    description:
      'We invest in understanding your business deeply, becoming a trusted technology partner.',
  },
];

export function WhyAshvill() {
  return (
    <section className="section-padding bg-surface-100/50">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn>
              <SectionHeader
                eyebrow="Why Ashvill"
                title="Built for Enterprise Excellence"
                description="Over a decade of delivering transformative technology solutions to organizations that demand the highest standards."
                align="left"
              />
            </FadeIn>

            <StaggerContainer className="mt-10 grid gap-6 sm:grid-cols-2">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <Card hover className="h-full">
                    <CardIcon icon={<value.icon className="h-5 w-5" />} />
                    <h3 className="mb-2 font-display text-lg font-semibold text-surface-900">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-surface-500">{value.description}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <FadeIn className="group relative hidden lg:block h-full w-full min-h-[500px] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Enterprise technology collaboration"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/80 via-brand-600/40 to-transparent mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
            <div className="absolute inset-0 bg-brand-500/10 transition-opacity duration-500 group-hover:opacity-0" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
