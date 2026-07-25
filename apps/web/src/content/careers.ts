export interface JobListing {
  slug: string;
  title: string;
  category: 'Management' | 'Technical';
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits?: string[];
  featured?: boolean;
}

export interface JobListing {
  slug: string;
  title: string;
  category: 'Management' | 'Technical';
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits?: string[];
  featured?: boolean;
}

export const jobListings: JobListing[] = [
  // ==========================================
  // MANAGEMENT & ENTERPRISE STRATEGY TRACK
  // ==========================================
  {
    slug: 'director-enterprise-delivery-solutions',
    title: 'Director of Enterprise Delivery & Solutions',
    category: 'Management',
    department: 'Enterprise Consulting',
    location: 'Bengaluru, India (Hybrid)',
    type: 'Full-time',
    experience: '10+ years',
    featured: true,
    description: 'Lead strategic client delivery, enterprise solution architecture, and multi-million dollar technology transformation portfolios for Fortune 500 clients.',
    responsibilities: [
      'Direct delivery operations, portfolio governance, and engagement strategy across high-stakes enterprise accounts',
      'Partner with C-suite client executives (CIOs, CTOs) to define multi-year digital transformation roadmaps',
      'Oversee cross-functional delivery pods across custom software, cloud migration, and enterprise AI practices',
      'Spearhead strategic account growth, SOW negotiations, and customer success frameworks',
      'Drive executive recruitment and build high-performance consulting and engineering organizations'
    ],
    requirements: [
      '10+ years in IT consulting, enterprise software delivery, or technology executive management',
      'Proven track record managing $10M+ client portfolios and multi-region consulting teams',
      'Deep strategic insight into cloud modernizations, enterprise SaaS, and AI integrations',
      'Master’s degree in Computer Science, Business Administration (MBA), or equivalent executive experience',
      'Exceptional stakeholder negotiation, C-level communication, and strategic vision'
    ],
    benefits: ['Executive Equity & Performance Tier', 'Comprehensive Family Health Insurance', 'Global Leadership Retreats', 'Flexible Hybrid Leadership Model']
  },
  {
    slug: 'principal-technical-product-manager',
    title: 'Principal Technical Product Manager (GenAI & Platforms)',
    category: 'Management',
    department: 'Product & AI Strategy',
    location: 'Bengaluru, India (Hybrid)',
    type: 'Full-time',
    experience: '7+ years',
    featured: true,
    description: 'Drive product vision, AI architecture roadmaps, and enterprise platform strategy for next-generation client software products.',
    responsibilities: [
      'Own end-to-end product strategy, release roadmaps, and architecture alignment for enterprise platforms',
      'Translate complex enterprise business challenges into technical product specs, API contracts, and AI workflows',
      'Lead product discovery, client executive alignment, and feature prioritization for high-throughput SaaS tools',
      'Direct cross-functional pods of AI engineers, cloud leads, and UX designers during sprint execution',
      'Analyze telemetry data, ROI benchmarks, and market trends to steer product roadmap strategy'
    ],
    requirements: [
      '7+ years in product management for B2B enterprise software, cloud platforms, or AI services',
      'Solid technical foundation in computer science, cloud infrastructure, and generative AI frameworks',
      'Proven experience launching enterprise SaaS products from concept to global scale',
      'Expertise in product metrics, API design, user journey mapping, and executive reporting',
      'Master’s or Bachelor’s degree in Computer Science or related quantitative field'
    ],
    benefits: ['Performance Incentive Bonus', 'Global Tech Conference Budget', 'Flexible Hybrid Work Policy', 'Executive Wellness Allowance']
  },
  {
    slug: 'enterprise-agile-practice-lead',
    title: 'Enterprise Agile Practice Lead & Scrum Director',
    category: 'Management',
    department: 'Agile Excellence',
    location: 'Bengaluru, India (Hybrid)',
    type: 'Full-time',
    experience: '8+ years',
    featured: false,
    description: 'Establish Agile governance, scale delivery frameworks (SAFe), and coach cross-functional engineering teams across international business units.',
    responsibilities: [
      'Architect and enforce scaled Agile delivery frameworks (SAFe, LeSS, Kanban) across enterprise programs',
      'Coach engineering directors, product managers, and Scrum Masters on delivery velocity and quality metrics',
      'Identify and resolve cross-program delivery bottlenecks, scope creep, and risk dependencies',
      'Establish continuous delivery standards, DevOps alignment, and agile maturity assessment models',
      'Conduct executive workshops on agile transformation and organizational change'
    ],
    requirements: [
      '8+ years leading Agile transformation and program delivery in enterprise IT environments',
      'SAFe Program Consultant (SPC), CSP, or equivalent enterprise agile credentials',
      'Deep expertise in scaling agile delivery across multi-team, multi-location engineering orgs',
      'Exceptional leadership, facilitation, and organizational change management capabilities',
      'Hands-on experience with modern enterprise tooling (JIRA Align, Linear, Confluence)'
    ],
    benefits: ['Executive Coaching & Certification Support', 'Health & Life Coverage', 'Hybrid Work Flexibility', 'Performance Bonus']
  },

  // ==========================================
  // TECHNICAL & ENGINEERING LEADERSHIP TRACK
  // ==========================================
  {
    slug: 'principal-cloud-architect-security-lead',
    title: 'Principal Cloud Architect & Security Lead (AWS / Azure)',
    category: 'Technical',
    department: 'Cloud Architecture',
    location: 'Bengaluru, India (Hybrid / Remote)',
    type: 'Full-time',
    experience: '8+ years',
    featured: true,
    description: 'Architect multi-region, zero-trust cloud infrastructure and enterprise security governance for global financial and healthcare platforms.',
    responsibilities: [
      'Design fault-tolerant, multi-region cloud architectures across AWS and Azure for global enterprise platforms',
      'Establish zero-trust network security posture, IAM governance, and regulatory compliance (SOC 2, ISO 27001, HIPAA)',
      'Drive Infrastructure-as-Code (Terraform, Kubernetes, Service Meshes) standardizations across engineering teams',
      'Conduct enterprise cloud architecture reviews (AWS Well-Architected Framework) and FinOps cost optimizations',
      'Serve as principal advisor to client CTOs on cloud modernization and disaster recovery strategies'
    ],
    requirements: [
      '8+ years in enterprise cloud architecture, infrastructure engineering, and security governance',
      'AWS Solutions Architect Professional or Azure Solutions Architect Expert certification',
      'Expertise with Terraform, Kubernetes (EKS/AKS), Docker, Istio, and SIEM security orchestration',
      'Deep experience designing resilient multi-region architectures for high-availability systems',
      'Strong track record in zero-trust architecture and automated compliance auditing'
    ],
    benefits: ['Cloud Certification Sponsorship', 'Hardware & Tech Stipend', 'Flexible Remote Model', 'Executive Health Coverage']
  },
  {
    slug: 'lead-ai-ml-solutions-architect',
    title: 'Lead AI / ML & GenAI Solutions Architect',
    category: 'Technical',
    department: 'Data & AI Practice',
    location: 'Bengaluru, India (Hybrid)',
    type: 'Full-time',
    experience: '6+ years',
    featured: true,
    description: 'Architect production LLM applications, enterprise RAG systems, and autonomous agent workflows for global enterprise clients.',
    responsibilities: [
      'Design and deploy enterprise generative AI architectures, RAG pipelines, and custom LLM applications',
      'Establish MLOps frameworks for model governance, vector indexing (Qdrant, Pinecone), evaluation, and security',
      'Guide client engineering teams on integrating autonomous AI agents into core business workflows',
      'Partner with solution architects to design cutting-edge AI capabilities for enterprise RFPs and proposals',
      'Benchmark AI inference performance, latency, and cloud compute optimization'
    ],
    requirements: [
      '6+ years in Applied AI, Machine Learning engineering, or Data Science architecture',
      'Deep proficiency in PyTorch, Python, LangChain, LlamaIndex, vector databases, and MLOps',
      'Proven experience deploying production LLM models and RAG systems at scale',
      'Solid mathematical and algorithmic understanding of transformer models and embeddings',
      'Master’s degree in Computer Science, Data Science, or AI/ML preferred'
    ],
    benefits: ['Dedicated AI Compute Budget & GPUs', 'AI Conference Travel Sponsorship', 'Health & Life Coverage', 'Hybrid Flexibility']
  },
  {
    slug: 'staff-full-stack-systems-engineer',
    title: 'Staff Full-Stack & Systems Engineer',
    category: 'Technical',
    department: 'Software Engineering',
    location: 'Bengaluru, India (Hybrid)',
    type: 'Full-time',
    experience: '6+ years',
    featured: false,
    description: 'Engine enterprise-grade, high-concurrency web systems and modern microservice APIs powering global digital products.',
    responsibilities: [
      'Architect scalable front-end and back-end web systems using React 19, Next.js, Node.js, and TypeScript',
      'Design low-latency microservices, GraphQL endpoints, and event-driven data pipelines (Kafka, Redis)',
      'Lead technical design reviews, performance optimization, accessibility standards, and core platform libraries',
      'Mentor senior software engineers and champion engineering excellence across project pods',
      'Collaborate with UX designers and product managers to deliver seamless digital customer experiences'
    ],
    requirements: [
      '6+ years in full-stack web software development and systems engineering',
      'Mastery of TypeScript, React, Next.js, Node.js/NestJS, PostgreSQL, and caching strategies',
      'Proven experience building high-concurrency enterprise web applications and distributed systems',
      'Strong understanding of web security, performance profiling, and clean architecture principles',
      'Bachelor’s or Master’s degree in Computer Science or Software Engineering'
    ],
    benefits: ['Latest Tech Hardware Setup', 'Learning & Conference Budget', 'Health Insurance', 'Hybrid Work Structure']
  }
];

export function getJobBySlug(slug: string): JobListing | undefined {
  return jobListings.find((j) => j.slug === slug);
}


