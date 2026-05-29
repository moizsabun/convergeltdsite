export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  features: string[];
  icon: string; // key used by the icon component
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'software',
    title: 'Software Development',
    summary:
      'Custom web and mobile applications engineered around your workflows, from MVP to enterprise scale.',
    features: ['Web & mobile apps', 'API & integrations', 'Maintenance & support'],
    icon: 'code',
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    summary:
      'Resilient cloud architecture, automated pipelines and infrastructure that scales on demand.',
    features: ['Cloud migration', 'CI/CD automation', 'Monitoring & uptime'],
    icon: 'cloud',
  },
  {
    id: 'voip',
    title: 'VoIP & Dialers',
    summary:
      'Carrier-grade VoIP termination, wholesale routes and hosted predictive dialers for call centers.',
    features: ['VoIP termination', 'Wholesale & reseller', 'Hosted dialers'],
    icon: 'phone',
  },
  {
    id: 'web',
    title: 'Web & SEO',
    summary:
      'Fast, accessible websites with on-page SEO that turn visitors into customers.',
    features: ['Web design & dev', 'SEO & performance', 'Domains & hosting'],
    icon: 'globe',
  },
  {
    id: 'support',
    title: 'IT Support',
    summary:
      'Proactive software, network and hardware maintenance that keeps your operations running.',
    features: ['Network support', 'Hardware & software', 'On-call assistance'],
    icon: 'shield',
  },
  {
    id: 'consulting',
    title: 'Tech Consulting',
    summary:
      'Strategy, architecture reviews and roadmaps that align technology with business goals.',
    features: ['Architecture review', 'Digital strategy', 'Team augmentation'],
    icon: 'spark',
  },
];
