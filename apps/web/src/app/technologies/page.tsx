import { PageLayout, PageHero, CTASection } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/Motion';
import { technologies, techPartners } from '@/content/technologies';
import { createMetadata } from '@/lib/seo';
import React from 'react';

// Icons
import {
  SiReact, SiNextdotjs, SiVuedotjs, SiTypescript, SiTailwindcss, SiFramer,
  SiNodedotjs, SiNestjs, SiPython, SiDotnet, SiGo, SiGraphql,
  SiGooglecloud, SiDocker, SiKubernetes, SiTerraform,
  SiPostgresql, SiMongodb, SiRedis, SiSnowflake, SiTensorflow, SiPytorch,
  SiFlutter, SiSwift, SiKotlin, SiIos, SiAndroid
} from 'react-icons/si';
import { ShieldCheck, Lock, Activity, Braces, Code, Shield, Key, Network, Cloud, Cpu, Coffee } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Technologies',
  description: 'Explore the modern technology stack Ashvill IT Solutions uses to build enterprise-grade solutions.',
  path: '/technologies',
});

const iconMap: Record<string, React.ElementType> = {
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Vue.js': SiVuedotjs,
  'TypeScript': SiTypescript,
  'Tailwind CSS': SiTailwindcss,
  'Framer Motion': SiFramer,
  'Node.js': SiNodedotjs,
  'NestJS': SiNestjs,
  'Python': SiPython,
  'Java': Coffee,
  '.NET': SiDotnet,
  'Go': SiGo,
  'GraphQL': SiGraphql,
  'REST APIs': Braces,
  'AWS': Cloud,
  'Azure': Cloud,
  'Google Cloud': SiGooglecloud,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'Terraform': SiTerraform,
  'CI/CD': Activity,
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'Redis': SiRedis,
  'Snowflake': SiSnowflake,
  'TensorFlow': SiTensorflow,
  'PyTorch': SiPytorch,
  'OpenAI': Cpu,
  'React Native': SiReact,
  'Flutter': SiFlutter,
  'Swift': SiSwift,
  'Kotlin': SiKotlin,
  'iOS': SiIos,
  'Android': SiAndroid,
  'OWASP': ShieldCheck,
  'SOC 2': Lock,
  'ISO 27001': Shield,
  'Zero Trust': Key,
  'SIEM': Network,
  'Penetration Testing': Code,
  'AWS Partner': Cloud,
  'Microsoft Azure': Cloud,
  'Docker Certified': SiDocker,
};

export default function TechnologiesPage() {
  return (
    <PageLayout>
      <PageHero pattern
        eyebrow="Technologies"
        title="Modern Technology Stack"
        description="We leverage battle-tested, enterprise-grade technologies to build solutions that scale, perform, and endure."
      />

      <section className="py-12 md:py-11">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Technologies' }]} />

          <FadeIn className="mb-12 flex flex-wrap justify-center gap-4 mt-8">
            {techPartners.map((partner) => {
              const Icon = iconMap[partner];
              return (
                <span 
                  key={partner} 
                  className="glass group flex cursor-default items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-surface-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:text-brand-600"
                >
                  {Icon && <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />}
                  {partner}
                </span>
              );
            })}
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.values(technologies).map((category) => (
              <FadeIn key={category.label}>
                <div className="group relative h-full">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-400/20 to-purple-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <Card className="relative h-full border-surface-200/50 bg-white/80 backdrop-blur-xl transition-all duration-500 hover:border-brand-200 hover:shadow-elevated">
                    <h2 className="font-display mb-6 text-xl font-semibold text-surface-900">{category.label}</h2>
                    <div className="flex flex-wrap gap-3">
                      {category.items.map((tech) => {
                        const Icon = iconMap[tech];
                        return (
                          <span 
                            key={tech} 
                            className="group/tech flex cursor-default items-center gap-1.5 rounded-lg bg-surface-100 px-3 py-1.5 text-sm font-medium text-surface-600 transition-all duration-300 hover:bg-brand-50 hover:text-brand-700 hover:shadow-sm"
                          >
                            {Icon && <Icon className="h-4 w-4 transition-transform group-hover/tech:scale-110" />}
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </Card>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Need Technical Expertise?" description="Our engineers are certified across the full modern technology stack." />
    </PageLayout>
  );
}
