import type { CvData } from '~/utils/interfaces/CV'

const cvFrCh: CvData = {
  name: 'Johan R. Brazillier',
  title: 'Développeur web',
  contact: {
    email: 'j.brazillier@gmail.com',
    phone: '+33 6 38 02 76 49',
    address: 'Annecy - Hyères',
  },
  about:
    "Développeur full-stack passionné, orienté Front-end. Ma spécialité : intégrer des maquettes\u0000\navec précision et assurer une communication fluide avec les API. Je maîtrise également les\u0000\nméthodologies AGILE et le Clean Code, garantissant ainsi des solutions robustes et\u0000\npérennes. Mon travail est reconnu pour sa qualité faisant preuve d'une attention méticuleuse\u0000\naux détails, reflet de ma passion et de ma rigueur.\u0000",
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
        "Conception d'interfaces utilisateur modernes et performantes avec Next.js, TailwindCSS et TypeScript",
        'Analyse et qualification des attentes et des pratiques des utilisateurs pour proposer des solutions adaptées',
      ],
    },
    {
      role: 'Développeur front-end',
      company: 'La Boîte Immo',
      location: '',
      period: '01/2022 - 08/2024',
      tasks: [
        "Création et maintenance d'interfaces utilisateur en utilisant React, Next.js et TypeScript",
        'Transformation de maquettes Figma en pages web pixel perfect avec TailwindCSS',
        'Mise en place de communications efficaces avec des API développées en Symfony',
        'Application des méthodologies AGILE et des principes de Clean Code',
        'Mise en place de processus CI/CD pour automatiser les déploiements et tests',
        'Exploitation de Storybook pour documenter les composants UI et Docker pour containeriser les applications',
      ],
    },
    {
      role: 'Développeur Freelance',
      company: 'JoCorp',
      location: '',
      period: '01/2022 - présent',
      tasks: [
        'Concevoir et développer des solutions web adaptées aux besoins spécifiques des clients',
        'Collaboration efficace avec les équipes de projet pour respecter les délais',
        'Maintenance continue et support technique pour garantir la pérennité et la performance des sites web créés',
      ],
    },
    {
      role: 'Développeur full-stack',
      company: 'Vitassurance',
      location: '',
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
      location: '',
      period: '01/2014 - 01/2020',
      tasks: [
        'Amélioration du référencement naturel du site e-commerce en utilisant des techniques avancées de SEO',
        "Suivi et analyse des performances du site web à l'aide d'outils d'analytics",
      ],
    },
  ],
  education: [
    {
      degree:
        "Diplôme Fédéral d'Intégrateur/Développeur Web et Mobile (Bachelor)",
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
