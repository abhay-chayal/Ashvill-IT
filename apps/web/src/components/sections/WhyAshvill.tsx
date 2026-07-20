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
    <section className="section-padding bg-white text-surface-900 border-t border-surface-200">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <FadeIn>
              <div className="text-left mb-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-surface-500">Why Ashvill</p>
                <h2 className="mb-4 font-display text-4xl font-light tracking-tight text-surface-950 md:text-5xl">Built for Enterprise Excellence</h2>
                <p className="max-w-2xl text-lg leading-relaxed text-surface-600 font-light">Over a decade of delivering transformative technology solutions to organizations that demand the highest standards.</p>
              </div>
            </FadeIn>

            <StaggerContainer className="mt-10 grid gap-6 sm:grid-cols-2">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <Card hover className="h-full bg-[#F9F8F6] border-none shadow-none">
                    <CardIcon icon={<value.icon className="h-5 w-5" />} className="bg-white text-surface-900 shadow-sm border border-surface-200" />
                    <h3 className="mb-2 font-display text-lg font-medium text-surface-900">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-surface-600 font-light">{value.description}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <FadeIn className="group relative hidden lg:block h-full w-full min-h-[600px] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop"
              alt="Enterprise technology collaboration"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
