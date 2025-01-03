interface Titles {
  [key: string]: string
}

interface Contact {
  email: string
  phone: string
  address: string
}

interface Experience {
  role: string
  company: string
  location: string
  period: string
  tasks: string[]
}

interface Education {
  degree: string
  institution: string
  year: string
}

export interface CvData {
  titles: Titles
  name: string
  title: string
  contact: Contact
  smallAbout: string
  about: string
  skills: string[]
  languages: string[]
  experiences: Experience[]
  educations: Education[]
}
