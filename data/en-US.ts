import type { CvData } from '~/utils/interfaces/CV'

const cvEnUs: CvData = {
  name: 'Johan R. Brazillier',
  title: 'Web Developer',
  contact: {
    email: 'j.brazillier@gmail.com',
    phone: '+33 6 38 02 76 49',
    address: 'Annecy - Hyères, France',
  },
  about:
    'Passionate full-stack developer with a front-end focus. I specialize in pixel-perfect implementation of design mockups and seamless API integration. Proficient in AGILE methodologies and Clean Code principles, ensuring robust and sustainable solutions. Known for delivering high-quality work with meticulous attention to detail, reflecting my passion and rigorous approach.',
  skills: [
    'TypeScript',
    'React',
    'Next.js',
    'Vue',
    'Nuxt',
    'Bun',
    'NodeJS',
    'Express',
    'TailwindCSS',
    'Storybook',
    'Docker',
    'REST API',
  ],
  languages: ['English', 'French'],
  experiences: [
    {
      role: 'Front-end Developer',
      company: 'Winter Energies',
      location: 'Le Bourget du Lac, France',
      period: 'August 2024 - Present',
      tasks: [
        'Designing modern and high-performance user interfaces using Next.js, TailwindCSS, and TypeScript',
        'Analyzing and qualifying user needs and practices to propose tailored solutions',
      ],
    },
    {
      role: 'Front-end Developer',
      company: 'La Boîte Immo',
      location: 'France',
      period: 'January 2022 - August 2024',
      tasks: [
        'Created and maintained user interfaces using React, Next.js, and TypeScript',
        'Transformed Figma designs into pixel-perfect web pages using TailwindCSS',
        'Implemented efficient communications with Symfony-based APIs',
        'Applied AGILE methodologies and Clean Code principles',
        'Established CI/CD processes for automated deployments and testing',
        'Utilized Storybook for UI component documentation and Docker for application containerization',
      ],
    },
    {
      role: 'Freelance Developer',
      company: 'JoCorp',
      location: 'France',
      period: 'January 2022 - Present',
      tasks: [
        'Design and develop custom web solutions tailored to client requirements',
        'Collaborate effectively with project teams to meet deadlines',
        'Provide ongoing maintenance and technical support to ensure website longevity and performance',
      ],
    },
    {
      role: 'Full-stack Developer',
      company: 'Vitassurance',
      location: 'France',
      period: 'January 2021 - January 2022',
      tasks: [
        'Designed and implemented a website enabling users to compare various insurance offers',
        'Integrated third-party APIs to fetch and display real-time insurance data',
        'Applied optimization techniques to ensure fast loading times and smooth user experience',
      ],
    },
    {
      role: 'Web Analyst',
      company: 'poupepoupi.com',
      location: 'France',
      period: 'January 2014 - January 2020',
      tasks: [
        "Improved e-commerce website's organic search rankings using advanced SEO techniques",
        'Monitored and analyzed website performance using analytics tools',
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor's Degree in Web Development and Mobile Integration",
      institution: '3WAcademy, Aix en Provence, France',
      year: '2021',
    },
    {
      degree: 'Web Developer Certification - Level 5',
      institution: 'OpenClassrooms',
      year: '2020',
    },
    {
      degree: "Bachelor's Degree in E-commerce & Digital Marketing",
      institution: 'Toulon, France',
      year: '2017',
    },
    {
      degree: "Associate's Degree in Business Management",
      institution: 'Défi83, Toulon, France',
      year: '2016',
    },
    {
      degree: "Associate's Degree in Business Management",
      institution: 'Défi83, Toulon, France',
      year: '2016',
    },
  ],
}

export default cvEnUs
