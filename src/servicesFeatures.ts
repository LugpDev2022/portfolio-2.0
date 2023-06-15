interface Service {
  features: string[];
  includes: string[];
}

export const designService: Service = {
  includes: [
    'Desktop design',
    'Mobile design',
    'Prototype',
    'Assets',
    'Design file',
  ],
  features: [
    'User friendly',
    'Accessibility',
    'Visual appeal',
    'Usability',
    'Interactive',
  ],
};

export const developmentService: Service = {
  includes: [
    'Deployment',
    'Domain',
    'Functional website',
    '2 month support',
    'Source code access',
  ],
  features: [
    'Responsive design',
    'Cross-browser compatibility',
    'SEO optimization',
    'Performance tuning',
    'Tested code',
  ],
};

export const maintenanceService: Service = {
  includes: ['Upgraded code'],
  features: [
    'Security updates',
    'Performance optimization',
    'Content updates',
    'Bug fixes',
    'Creation of tests',
  ],
};
