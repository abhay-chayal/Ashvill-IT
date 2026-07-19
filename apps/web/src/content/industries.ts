export const industries = [
  {
    slug: 'finance',
    name: 'Financial Services',
    description: 'Secure, compliant technology solutions for banks, fintech, and insurance companies.',
    challenges: ['Regulatory compliance', 'Legacy system modernization', 'Real-time transaction processing', 'Fraud detection'],
    solutions: ['Core banking platforms', 'Payment gateways', 'Risk analytics', 'RegTech solutions'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    description: 'HIPAA-aligned digital health solutions that improve patient outcomes and operational efficiency.',
    challenges: ['Data interoperability', 'Patient privacy', 'Clinical workflow optimization', 'Telehealth scaling'],
    solutions: ['EMR integration', 'Telehealth platforms', 'AI diagnostics', 'Patient portals'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
  },
  {
    slug: 'retail',
    name: 'Retail & E-commerce',
    description: 'Omnichannel commerce platforms that unify online, mobile, and in-store experiences.',
    challenges: ['Inventory synchronization', 'Personalization at scale', 'Supply chain visibility', 'Customer retention'],
    solutions: ['E-commerce platforms', 'POS integration', 'Recommendation engines', 'Loyalty programs'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    description: 'Industry 4.0 solutions connecting shop floors, supply chains, and enterprise systems.',
    challenges: ['Production optimization', 'Predictive maintenance', 'Supply chain disruption', 'Quality control'],
    solutions: ['IoT platforms', 'MES integration', 'Predictive analytics', 'Digital twins'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
  },
  {
    slug: 'education',
    name: 'Education',
    description: 'Learning management systems and EdTech platforms that scale globally.',
    challenges: ['Remote learning delivery', 'Student engagement', 'Assessment automation', 'Content management'],
    solutions: ['LMS platforms', 'Virtual classrooms', 'Adaptive learning', 'Administration systems'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80',
  },
  {
    slug: 'logistics',
    name: 'Logistics & Supply Chain',
    description: 'End-to-end visibility and optimization for complex supply chain networks.',
    challenges: ['Route optimization', 'Real-time tracking', 'Warehouse automation', 'Last-mile delivery'],
    solutions: ['TMS platforms', 'Fleet management', 'Warehouse systems', 'Tracking portals'],
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80',
  },
  {
    slug: 'government',
    name: 'Government & Public Sector',
    description: 'Secure, accessible digital services for citizens and government operations.',
    challenges: ['Citizen service delivery', 'Data sovereignty', 'Legacy modernization', 'Accessibility compliance'],
    solutions: ['Citizen portals', 'Document management', 'Workflow automation', 'Open data platforms'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
  },
  {
    slug: 'energy',
    name: 'Energy & Utilities',
    description: 'Smart grid, renewable energy, and utility management technology solutions.',
    challenges: ['Grid modernization', 'Renewable integration', 'Asset management', 'Regulatory reporting'],
    solutions: ['SCADA systems', 'Energy analytics', 'Smart metering', 'Asset monitoring'],
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80',
  },
] as const;

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
