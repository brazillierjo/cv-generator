import type { CvData } from '~/utils/interfaces/CV'

const cvFrCh: CvData = {
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
    'Développeur full-stack avec 5 ans d’expérience, expert en Next.js, Nuxt.js, Tailwind et TypeScript.',
  about:
    'Développeur full-stack orienté Front-end, expert en intégration précise de maquettes et en communication avec les API. Maîtrise des méthodologies AGILE et du Clean Code pour des solutions robustes et durables, avec une attention minutieuse aux détails.',
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
  languages: ['Anglais', 'Français'],
  experiences: [
    {
      role: 'Développeur front-end',
      company: 'Winter Energies',
      location: 'Le Bourget du Lac',
      period: '08/2024 - présent',
      tasks: [
        "Développement d'UI modernes avec Next.js, TailwindCSS et TypeScript",
        'Analyse des besoins utilisateurs pour des solutions adaptées',
      ],
    },
    {
      role: 'Développeur front-end',
      company: 'La Boîte Immo',
      location: 'Hyères',
      period: '01/2022 - 08/2024',
      tasks: [
        "Développement d'UI avec React, Next.js, TypeScript et TailwindCSS",
        'Transformation de maquettes Figma en pages web pixel perfect',
        'Intégration et optimisation des communications API Symfony',
        'Automatisation des processus CI/CD, documentation UI avec Storybook et containerisation avec Docker',
      ],
    },
    {
      role: 'Développeur Freelance',
      company: 'JoCorp',
      location: '',
      period: '01/2022 - présent',
      tasks: [
        'Conception et développement de solutions web sur mesure pour les clients',
        'Collaboration étroite avec les équipes pour respecter les délais',
        'Maintenance et support technique pour assurer la performance et pérennité des sites',
      ],
    },
    {
      role: 'Développeur full-stack',
      company: 'Vitassurance',
      location: 'Nice',
      period: '01/2021 - 01/2022',
      tasks: [
        "Concevoir et implémenter un site web permettant aux utilisateurs de comparer différentes offres d'assurances",
        'Mise en place de connexions avec des API tierces pour récupérer et afficher les données des assurances en temps réel',
        "Application de techniques d'optimisation pour assurer des temps de chargement rapides et une expérience utilisateur fluide",
      ],
    },
    {
      role: 'Web Analyste',
      company: 'poupepoupi.com',
      location: 'La Londe les Maures',
      period: '01/2014 - 01/2020',
      tasks: [
        'Amélioration du référencement naturel du site e-commerce en utilisant des techniques avancées de SEO',
        "Suivi et analyse des performances du site web à l'aide d'outils d'analytics",
      ],
    },
  ],
  educations: [
    {
      degree:
        "Diplôme Fédéral de Développeur Web et Mobile (Bachelor)",
      institution: '3WAcademy, Aix en Provence',
      year: '2021',
    },
    {
      degree: 'Développeur Web - Certificat de Compétences',
      institution: 'OpenClassrooms',
      year: '2020',
    },
    {
      degree: 'Bachelor en E-commerce & Marketing Numérique',
      institution: 'Toulon',
      year: '2017',
    },
    {
      degree: 'Diplôme d’Études Supérieures en Gestion Commerciale (DégC)',
      institution: 'Défi83, Toulon',
      year: '2016',
    },
    {
      degree: 'Maturité Professionnelle Commerciale',
      institution: 'Jean Aicard - Hyères',
      year: '2012',
    },
  ],
}

export default cvFrCh
