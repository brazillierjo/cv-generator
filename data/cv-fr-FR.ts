import type { CvData } from '~/utils/interfaces/CV'

const cvFrFr: CvData = {
  titles: {
    contact: 'Coordonnées',
    skills: 'Compétences',
    languages: 'Langues',
    experiences: 'Expériences',
    education: 'Études',
  },
  name: 'Johan R. Brazillier',
  title: 'Développeur web',
  contact: {
    address: 'Annecy 🇫🇷',
    email: 'j.brazillier@gmail.com',
    phone: '+33 6 38 02 76 49',
  },
  smallAbout:
      "Full-stack developer with 5 years of experience, skilled in Next.js, Nuxt.js, Tailwind, and TypeScript.",
  about:
      "Front-end focused full-stack developer, specializing in precise UI integration and API communication. Proficient in AGILE methodologies and Clean Code for robust, long-lasting solutions, with a keen attention to detail.",
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
      location: 'Le Bourget du Lac',
      period: '08/2024 - Present',
      tasks: [
        "Developing modern UIs with Next.js, TailwindCSS, and TypeScript",
        "Analyzing user needs to propose tailored solutions",
      ],
    },
    {
      role: 'Front-end Developer',
      company: 'La Boîte Immo',
      location: 'Hyères',
      period: '01/2022 - 08/2024',
      tasks: [
        "Developing UIs with React, Next.js, TypeScript, and TailwindCSS",
        "Turning Figma designs into pixel-perfect web pages",
        "Integrating and optimizing API communications with Symfony",
        "Automating CI/CD processes, documenting UI with Storybook, and containerizing with Docker",
      ],
    },
    {
      role: 'Freelance Developer',
      company: 'JoCorp',
      location: '',
      period: '01/2022 - Present',
      tasks: [
        "Designing and developing custom web solutions for clients",
        "Collaborating closely with teams to meet deadlines",
        "Providing maintenance and technical support to ensure site performance and longevity",
      ],
    },
    {
      role: 'Full-stack Developer',
      company: 'Vitassurance',
      location: 'Nice',
      period: '01/2021 - 01/2022',
      tasks: [
        "Designing and implementing a website for users to compare insurance offers",
        "Integrating third-party APIs to fetch and display real-time insurance data",
        "Applying optimization techniques for fast load times and a smooth user experience",
      ],
    },
    {
      role: 'Web Analyst',
      company: 'poupepoupi.com',
      location: 'La Londe les Maures',
      period: '01/2014 - 01/2020',
      tasks: [
        "Improving e-commerce site SEO using advanced techniques",
        "Tracking and analyzing site performance with analytics tools",
      ],
    },
  ],
  educations: [
    {
      degree: 'Licence Intégrateur/Développeur Web et mobile',
      institution: '3WAcademy, Aix en Provence',
      year: '2021',
    },
    {
      degree: 'Développeur Web - Niveau 5',
      institution: 'OpenClassrooms',
      year: '2020',
    },
    {
      degree: 'Licence E-commerce & Marketing Numérique',
      institution: 'Toulon',
      year: '2017',
    },
    {
      degree: 'BTS Management des Unités Commerciales',
      institution: 'Défi83, Toulon',
      year: '2016',
    },
    {
      degree: 'High School Diploma with focus in Business and Management',
      institution: 'Jean Aicard High School - Hyères, France',
      year: '2012',
    },
  ],
}

export default cvFrFr
