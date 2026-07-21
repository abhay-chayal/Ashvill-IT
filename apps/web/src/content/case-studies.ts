export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  client: string;
  duration: string;
  challenge: string;
  solution: string;
  executiveSummary: string;
  challengeDetails: string;
  solutionDetails: string;
  results: string[];
  technologies: string[];
  image: string;
  testimonial?: Testimonial;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'fintech-platform-modernization',
    title: 'FinTech Platform Modernization',
    industry: 'Financial Services',
    client: 'Global FinTech Enterprise',
    duration: '14 months',
    challenge: 'A legacy monolithic banking platform was causing 40% slower transaction processing, increasing maintenance costs, and blocking new product launches.',
    solution: 'Ashvill executed a strangler fig migration to cloud-native microservices on AWS, implementing event-driven architecture with real-time compliance reporting.',
    executiveSummary: 'When a top-tier global financial institution hit the scalability limits of their legacy monolithic banking core, they faced a critical inflection point: modernize or lose market share to agile neo-banks. Ashvill IT Solutions was engaged to architect a zero-downtime migration to a highly resilient, event-driven microservices ecosystem.',
    challengeDetails: 'The client’s legacy architecture, built over two decades, had become a massive bottleneck. Deployment cycles took weeks, maintenance costs were surging by 25% year-over-year, and most alarmingly, transaction processing times had degraded by 40% during peak market hours. Furthermore, the monolithic structure made it virtually impossible to rapidly deploy new digital banking products, putting them severely behind modern competitors. They needed a complete structural overhaul without disrupting daily operations for millions of active users.',
    solutionDetails: 'We adopted the "strangler fig" pattern to methodically dismantle the monolith. Over 14 months, our engineering team architected a resilient, cloud-native microservices infrastructure on AWS. We implemented Apache Kafka for event-driven, real-time data streaming and utilized Kubernetes for automated scaling and orchestration. A critical component was the integration of automated, real-time compliance reporting mechanisms built directly into the data pipeline, ensuring regulatory adherence without manual overhead.',
    results: [
      '60% faster transaction processing during peak load',
      '45% reduction in annual infrastructure and maintenance costs',
      '99.999% uptime achieved across global regions',
      '3 new digital product lines launched within the first 6 months'
    ],
    technologies: ['AWS', 'Kubernetes', 'Node.js', 'PostgreSQL', 'Kafka', 'Terraform'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    testimonial: {
      quote: "Ashvill didn't just upgrade our technology; they fundamentally transformed how we operate. Their architectural vision allowed us to deploy new features in days instead of months.",
      author: "Marcus Chen",
      role: "Chief Technology Officer"
    }
  },
  {
    slug: 'healthcare-ai-diagnostics',
    title: 'AI-Powered Healthcare Diagnostics',
    industry: 'Healthcare',
    client: 'Regional Healthcare Network',
    duration: '10 months',
    challenge: 'Clinicians faced information overload from disparate data sources, leading to delayed diagnoses and inconsistent treatment recommendations.',
    solution: 'Built an ML-powered diagnostic assistance platform integrated with hospital EMR systems, providing real-time clinical decision support.',
    executiveSummary: 'In the fast-paced environment of modern healthcare, rapid and accurate diagnosis is critical. A leading regional healthcare network partnered with Ashvill to alleviate clinician burnout and improve patient outcomes by leveraging applied Artificial Intelligence to synthesize complex medical data in real-time.',
    challengeDetails: 'Clinicians within the network were struggling under the weight of fragmented patient data scattered across multiple legacy Electronic Medical Record (EMR) systems, lab portals, and imaging databases. This information overload resulted in an average of 45 minutes spent gathering data per complex case, leading to delayed diagnoses and occasionally inconsistent treatment pathways. The network required a unified, intelligent system capable of parsing unstructured clinical notes and structured lab data instantly.',
    solutionDetails: 'Ashvill engineered a secure, HIPAA-compliant Machine Learning platform that integrated directly into the existing EMR ecosystem via FHIR standards. Utilizing advanced Natural Language Processing (NLP) models built on TensorFlow and hosted on AWS SageMaker, the system extracts critical clinical context from historical data and cross-references it with current symptoms. The platform provides a real-time, probability-ranked diagnostic assistance dashboard to clinicians during patient consultations, acting as an intelligent "second opinion" rather than a replacement.',
    results: [
      '92% improvement in diagnostic accuracy for complex cases',
      '35% reduction in time-to-diagnosis',
      'Fully HIPAA-compliant deployment with end-to-end encryption',
      'Successfully adopted by 200+ clinicians across 14 facilities'
    ],
    technologies: ['Python', 'TensorFlow', 'FHIR', 'AWS SageMaker', 'React', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
    testimonial: {
      quote: "The diagnostic platform built by Ashvill is a game-changer. It sifts through years of patient history in seconds, allowing our doctors to focus entirely on patient care rather than data mining.",
      author: "Dr. Sarah Jenkins",
      role: "Chief Medical Informatics Officer"
    }
  },
  {
    slug: 'retail-omnichannel-platform',
    title: 'Retail Omnichannel Platform',
    industry: 'Retail & E-commerce',
    client: 'International Retail Brand',
    duration: '12 months',
    challenge: 'Disconnected online, mobile, and in-store channels created inventory inconsistencies and fragmented customer experiences.',
    solution: 'Developed a unified commerce platform with real-time inventory sync, personalized recommendations, and seamless checkout across all channels.',
    executiveSummary: 'An international retail powerhouse recognized that their siloed sales channels were severely damaging customer loyalty. Ashvill IT Solutions was chosen to orchestrate a massive digital transformation, unifying their physical point-of-sale systems with their digital storefronts into a single, cohesive omnichannel experience.',
    challengeDetails: 'The client was operating on fundamentally disconnected systems: an aging Magento e-commerce site, a separate mobile application, and legacy in-store POS terminals. This fragmentation led to disastrous inventory discrepancies—items showed as "in stock" online when they were sold out in-store, resulting in thousands of cancelled orders and frustrated customers. Furthermore, customer data was siloed, making it impossible to offer personalized loyalty rewards or cross-channel purchasing journeys.',
    solutionDetails: 'We designed a headless, API-first commerce architecture powered by Next.js and Node.js. By decoupling the frontend presentation layer from the backend commerce logic, we enabled lightning-fast web performance and cross-platform consistency. At the core, we implemented a centralized PostgreSQL and Redis data layer that synchronized inventory states in real-time (sub-50ms) across 500+ global locations. We also integrated a unified Stripe payment gateway to allow seamless "buy online, return in-store" functionality.',
    results: [
      '300% increase in digital channel revenue',
      'Absolute real-time inventory unification across 500+ physical locations',
      '40% improvement in customer retention and loyalty program engagement',
      'Achieved a single, holistic 360-degree view of every customer'
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
    testimonial: {
      quote: "Ashvill bridged the gap between our physical stores and digital presence. The new architecture is incredibly fast, and our inventory issues disappeared overnight.",
      author: "David Reynolds",
      role: "VP of Digital Innovation"
    }
  },
  {
    slug: 'saas-analytics-dashboard',
    title: 'SaaS Analytics Dashboard',
    industry: 'SaaS',
    client: 'B2B Analytics Startup',
    duration: '6 months',
    challenge: 'Needed a scalable analytics platform capable of processing millions of data points with sub-second latency for enterprise customers.',
    solution: 'Built a multi-tenant SaaS dashboard with highly optimized real-time data processing pipelines and advanced visualization capabilities.',
    executiveSummary: 'A fast-growing B2B analytics startup had successfully secured seed funding but found their MVP architecture buckling under the weight of enterprise data volumes. Ashvill partnered with them to rebuild their core platform from the ground up, engineering a multi-tenant SaaS application capable of massive scale and sub-second analytics rendering.',
    challengeDetails: 'The original MVP was built quickly to validate product-market fit, but as the company signed their first enterprise clients, the database struggled to handle millions of concurrent data ingestion events. Queries that took 2 seconds with 10 users were taking upwards of 45 seconds with 1,000 users. The UI became sluggish, and the lack of proper multi-tenant data isolation posed a significant security risk for enterprise onboarding.',
    solutionDetails: 'Ashvill engineered a robust, heavily partitioned PostgreSQL database architecture optimized for read-heavy analytical queries, layered with Redis caching to eliminate redundant computations. We rebuilt the frontend application using Next.js and specialized WebGL rendering libraries to ensure complex charts and data grids could render 100,000+ data points smoothly in the browser. Furthermore, we implemented rigorous Row-Level Security (RLS) to guarantee complete data isolation between enterprise tenants within the shared infrastructure.',
    results: [
      'Successfully onboarded 500+ enterprise users without degradation',
      'Achieved consistent sub-second query performance for complex datasets',
      'Reduced cloud infrastructure costs by optimizing query patterns',
      'Secured SOC2 compliance through robust multi-tenant architecture'
    ],
    technologies: ['Next.js', 'PostgreSQL', 'Redis', 'AWS', 'Tailwind CSS', 'Docker'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    testimonial: {
      quote: "Ashvill took our MVP and turned it into a true enterprise-grade platform. Their understanding of high-performance data visualization and scalable architecture is unmatched.",
      author: "Elena Rostova",
      role: "Founder & CEO"
    }
  },
  {
    slug: 'logistics-tracking-system',
    title: 'Real-Time Logistics Tracking',
    industry: 'Logistics',
    client: 'Global Logistics Provider',
    duration: '8 months',
    challenge: 'A severe lack of real-time visibility across multi-modal global shipments was causing massive operational inefficiencies and poor customer satisfaction.',
    solution: 'Engineered an IoT-integrated tracking platform featuring predictive ETA algorithms, automated exception alerts, and a unified command center.',
    executiveSummary: 'Global supply chains are incredibly fragile, and a leading logistics provider realized that their "black box" approach to freight forwarding was no longer acceptable to enterprise clients. Ashvill IT Solutions architected an end-to-end, IoT-powered logistics tracking platform to bring unprecedented transparency to global shipments.',
    challengeDetails: 'The client managed thousands of shipments daily across ocean, air, and ground transport. However, their tracking systems relied on manual status updates from disparate third-party carriers. This resulted in a massive "visibility gap" where containers would effectively vanish for weeks while at sea or in transit. Customer support was overwhelmed with "Where is my shipment?" calls, and the inability to predict delays caused severe downstream manufacturing issues for their clients.',
    solutionDetails: 'Ashvill designed a central "Command Center" application that ingests millions of data points daily from GPS trackers, AIS maritime data, and carrier APIs. We built the backend on Node.js and MongoDB to handle the highly unstructured and high-velocity streaming data. By integrating AWS IoT Core, we enabled secure, bidirectional communication with edge devices. Finally, we deployed machine learning models to analyze historical transit times and weather patterns, generating highly accurate, predictive ETAs that automatically adjust to real-world conditions.',
    results: [
      'Achieved 95% on-time delivery visibility across all transport modes',
      'Drove a massive 30% reduction in inbound customer support calls',
      'Enabled proactive supply chain adjustments through predictive delay alerts',
      'Won two major enterprise contracts due to the new technological capabilities'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS IoT', 'Python', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?auto=format&fit=crop&q=80',
    testimonial: {
      quote: "The visibility this platform provides is incredible. We can now proactively alert our clients to weather delays before they even ask. It's a massive competitive advantage.",
      author: "James Thorne",
      role: "VP of Global Operations"
    }
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
