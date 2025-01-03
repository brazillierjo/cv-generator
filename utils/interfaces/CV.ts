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
  name: string
  title: string
  contact: Contact
  about: string
  skills: string[]
  languages: string[]
  experiences: Experience[]
  education: Education[]
}
