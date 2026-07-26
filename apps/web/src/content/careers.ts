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
    title: 'Enterprise Delivery & Solutions Lead',
    category: 'Management',
    department: 'Enterprise Consulting',
    location: 'Bengaluru, India (Hybrid)',
    type: 'Full-time',
    experience: '2-3 years',
    featured: true,
    description: 'Lead strategic client delivery, enterprise solution architecture, and technology transformation portfolios for enterprise clients.',
    responsibilities: [
      'Direct delivery operations, portfolio governance, and engagement strategy across enterprise accounts',
      'Partner with client technical stakeholders to define multi-quarter digital transformation roadmaps',
      'Oversee cross-functional delivery pods across custom software, cloud migration, and enterprise AI practices',
      'Spearhead account growth, SOW alignment, and customer success frameworks',
      'Build high-performance consulting and engineering team workflows'
    ],
    requirements: [
      '2-3 years in IT consulting, client delivery management, or technology solution coordination',
      'Proven track record managing client projects and cross-functional teams',
      'Strategic insight into cloud modernizations, enterprise SaaS, and AI integrations',
      'Bachelor’s or Master’s degree in Computer Science, Business Administration, or related discipline',
      'Exceptional stakeholder communication and project organization skills'
    ],
    benefits: ['Performance Incentive Tier', 'Comprehensive Family Health Insurance', 'Leadership Mentorship', 'Flexible Hybrid Work Model']
  },
  {
    slug: 'principal-technical-product-manager',
    title: 'Technical Product Manager (GenAI & Platforms)',
    category: 'Management',
    department: 'Product & AI Strategy',
    location: 'Bengaluru, India (Hybrid)',
    type: 'Full-time',
    experience: '2-3 years',
    featured: true,
    description: 'Drive product vision, AI feature roadmaps, and platform strategy for next-generation client software products.',
    responsibilities: [
      'Own product strategy, release roadmaps, and architecture alignment for enterprise platforms',
      'Translate business challenges into technical product specs, API contracts, and AI workflows',
      'Lead product discovery, client alignment, and feature prioritization for high-throughput SaaS tools',
      'Direct cross-functional pods of AI engineers, cloud developers, and UX designers during sprint execution',
      'Analyze telemetry data and user metrics to steer product roadmap strategy'
    ],
    requirements: [
      '2-3 years in product management for B2B software, cloud platforms, or AI services',
      'Solid technical foundation in computer science, cloud infrastructure, and generative AI frameworks',
      'Proven experience launching software features from concept to production scale',
      'Expertise in product metrics, API design, user journey mapping, and team reporting',
      'Bachelor’s or Master’s degree in Computer Science or related quantitative field'
    ],
    benefits: ['Performance Incentive Bonus', 'Global Tech Conference Budget', 'Flexible Hybrid Work Policy', 'Wellness Allowance']
  },
  {
    slug: 'enterprise-agile-practice-lead',
    title: 'Agile Delivery Lead & Scrum Master',
    category: 'Management',
    department: 'Agile Excellence',
    location: 'Bengaluru, India (Hybrid)',
    type: 'Full-time',
    experience: '1-3 years',
    featured: false,
    description: 'Establish Agile governance, facilitate sprint execution, and coach cross-functional engineering teams across project streams.',
    responsibilities: [
      'Facilitate Agile delivery frameworks (Scrum, Kanban, SAFe) across engineering project teams',
      'Coach developers, product owners, and project leads on delivery velocity and quality metrics',
      'Identify and resolve cross-program delivery bottlenecks, scope creep, and risk dependencies',
      'Establish continuous delivery standards and agile maturity assessment models',
      'Conduct workshops on agile best practices and process optimization'
    ],
    requirements: [
      '1-3 years leading Agile delivery and Scrum practices in software engineering environments',
      'Certified ScrumMaster (CSM) or equivalent agile credential preferred',
      'Hands-on expertise in managing sprint ceremonies across multi-disciplinary teams',
      'Exceptional facilitation and organizational workflow skills',
      'Proficiency with modern enterprise tooling (JIRA, Linear, Confluence)'
    ],
    benefits: ['Certification & Course Support', 'Health & Life Coverage', 'Hybrid Work Flexibility', 'Performance Bonus']
  },

  // ==========================================
  // TECHNICAL & ENGINEERING TRACK
  // ==========================================
  {
    slug: 'principal-cloud-architect-security-lead',
    title: 'Cloud Infrastructure & Security Specialist (AWS / Azure)',
    category: 'Technical',
    department: 'Cloud Architecture',
    location: 'Bengaluru, India (Hybrid / Remote)',
    type: 'Full-time',
    experience: '2-3 years',
    featured: true,
    description: 'Architect resilient, zero-trust cloud infrastructure and enterprise security governance for modern enterprise platforms.',
    responsibilities: [
      'Design fault-tolerant cloud infrastructure across AWS and Azure for global software platforms',
      'Establish network security posture, IAM governance, and regulatory compliance standards',
      'Drive Infrastructure-as-Code (Terraform, Kubernetes, Docker) standardizations across engineering pods',
      'Conduct cloud architecture reviews and cost optimizations',
      'Serve as technical advisor on cloud modernization and disaster recovery strategies'
    ],
    requirements: [
      '2-3 years in enterprise cloud architecture, infrastructure engineering, and security practices',
      'AWS Certified Solutions Architect or Azure Solutions Architect Associate certification preferred',
      'Hands-on expertise with Terraform, Kubernetes, Docker, and CI/CD automation pipelines',
      'Experience designing resilient multi-region or hybrid cloud architectures',
      'Strong understanding of zero-trust security and automated compliance monitoring'
    ],
    benefits: ['Cloud Certification Sponsorship', 'Hardware & Tech Stipend', 'Flexible Remote Model', 'Health Coverage']
  },
  {
    slug: 'lead-ai-ml-solutions-architect',
    title: 'AI / ML & GenAI Solutions Engineer',
    category: 'Technical',
    department: 'Data & AI Practice',
    location: 'Bengaluru, India (Hybrid)',
    type: 'Full-time',
    experience: '1-3 years',
    featured: true,
    description: 'Develop production LLM applications, enterprise RAG systems, and autonomous agent workflows for client solutions.',
    responsibilities: [
      'Design and deploy generative AI pipelines, RAG frameworks, and custom LLM integrations',
      'Establish MLOps practices for model evaluation, vector indexing (Qdrant, Pinecone), and security',
      'Guide engineering teams on integrating autonomous AI capabilities into core web applications',
      'Partner with technical leads to prototype cutting-edge AI features',
      'Benchmark AI inference performance, latency, and cloud compute usage'
    ],
    requirements: [
      '1-3 years in Applied AI, Machine Learning engineering, or Data Science',
      'Proficiency in Python, PyTorch, LangChain, LlamaIndex, vector databases, and MLOps',
      'Experience deploying LLM applications or RAG pipelines in test/production environments',
      'Solid mathematical understanding of transformer models, embeddings, and NLP',
      'Bachelor’s or Master’s degree in Computer Science, Data Science, or AI/ML'
    ],
    benefits: ['Dedicated AI Compute Budget & GPUs', 'AI Learning & Conference Support', 'Health Insurance', 'Hybrid Flexibility']
  },
  {
    slug: 'staff-full-stack-systems-engineer',
    title: 'Full-Stack & Systems Engineer',
    category: 'Technical',
    department: 'Software Engineering',
    location: 'Bengaluru, India (Hybrid)',
    type: 'Full-time',
    experience: '1-3 years',
    featured: false,
    description: 'Engine enterprise-grade web applications, interactive front-ends, and modern microservice APIs powering digital products.',
    responsibilities: [
      'Develop front-end and back-end web applications using React, Next.js, Node.js, and TypeScript',
      'Build low-latency microservices, GraphQL endpoints, and event-driven data pipelines',
      'Participate in technical design reviews, performance optimization, and accessibility standards',
      'Collaborate with UX designers and product managers to deliver seamless digital customer experiences',
      'Write clean, modular code with thorough unit and integration testing coverage'
    ],
    requirements: [
      '1-3 years in full-stack web software development and systems engineering',
      'Proficiency in TypeScript, React, Next.js, Node.js/Express, and PostgreSQL/SQL',
      'Experience building web applications, RESTful APIs, and database schemas',
      'Strong understanding of web security, performance profiling, and git workflows',
      'Bachelor’s degree in Computer Science or Software Engineering'
    ],
    benefits: ['Latest Tech Hardware Setup', 'Learning & Conference Budget', 'Health Insurance', 'Hybrid Work Structure']
  },
  {
    slug: 'associate-fullstack-software-engineer',
    title: 'Associate Full-Stack Software Engineer',
    category: 'Technical',
    department: 'Software Engineering',
    location: 'Bengaluru, India (Hybrid)',
    type: 'Full-time',
    experience: '0-1 year (Freshers)',
    featured: true,
    description: 'Build modern web applications, microservices, and user interfaces alongside senior engineers while mastering core enterprise software principles.',
    responsibilities: [
      'Develop responsive front-end components using React, Next.js, and modern TypeScript frameworks',
      'Assist in building RESTful APIs, serverless functions, and microservice backend endpoints',
      'Write comprehensive unit tests, perform debugging, and participate in code reviews',
      'Collaborate with product managers and UX designers to implement high-quality feature releases'
    ],
    requirements: [
      '0-1 year of experience; open to 2024–2026 Fresh Graduates in Computer Science or IT',
      'Strong foundational skills in HTML, CSS, JavaScript, TypeScript, and React',
      'Basic understanding of Git, REST APIs, and SQL or NoSQL database systems',
      'Enthusiastic problem-solver with strong communication and team collaboration skills'
    ],
    benefits: ['Accelerated Career Growth & Mentorship', 'Competitive Entry Salary & Health Insurance', 'Continuous Certification Sponsorship', 'Hybrid Work Flexibility']
  },
  {
    slug: 'junior-ai-data-engineer',
    title: 'Junior AI & Data Engineer',
    category: 'Technical',
    department: 'Data & AI Practice',
    location: 'Bengaluru, India (Hybrid)',
    type: 'Full-time',
    experience: '0-1 year (Freshers)',
    featured: false,
    description: 'Support enterprise AI initiatives by building automated data pipelines, benchmark datasets, and vector search integrations.',
    responsibilities: [
      'Assist senior data engineers in preparing datasets and building Python data ingestion pipelines',
      'Implement vector index queries, prompt engineering templates, and LLM evaluation benchmarks',
      'Integrate AI capabilities into web application microservices and APIs',
      'Maintain documentation for data schemas, model pipelines, and system benchmarks'
    ],
    requirements: [
      '0-1 year of experience; open to Fresh Graduates in CS, Data Science, AI/ML, or Quantitative fields',
      'Proficiency in Python programming and basic knowledge of libraries like Pandas, NumPy, or PyTorch',
      'Understanding of fundamental machine learning concepts, LLMs, and API integrations',
      'Keen attention to detail and strong analytical problem-solving abilities'
    ],
    benefits: ['AI Compute & GPU Lab Access', 'Dedicated Mentorship from Senior AI Architects', 'Health & Medical Insurance', 'Hybrid Work Setup']
  }
];

export function getJobBySlug(slug: string): JobListing | undefined {
  return jobListings.find((j) => j.slug === slug);
}
