# CV Generator

Generate customizable CVs from JSON data using Nuxt, Tailwind, and Puppeteer.

## Features

- JSON-based CV data input
- Customizable color schemes
- PDF export

## Tech Stack

- Nuxt 3
- Tailwind CSS
- Puppeteer
- TypeScript

## Setup

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage

1. Create your CV data in JSON format, add it to `data/cvData.ts`
2. Customize colors through the theme panel (tailwind.config.ts)
3. Export to PDF

## Project Structure

```
├── components/
├── pages/
├── public/
├── server/
│   └── api/
└── types/
```