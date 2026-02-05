# Flash Card

**Version:** 1.1.0

A modern, interactive flash card application for learning Finnish vocabulary, specifically designed to help learners master Finnish verbs and their conjugations.

## Description

Flash Card is a web-based learning tool that uses spaced repetition and active recall techniques to help users memorize Finnish words effectively. The app focuses on Finnish verbs, displaying their conjugations including imperfekti (past tense) and passiivi (passive voice) forms in both positive and negative variations.

The application provides an intuitive interface where users can practice vocabulary by guessing word meanings before revealing the answers, making it perfect for learning on-the-go - whether you're on the bus or waiting for lunch.

## Features

- **Interactive Flash Cards**: Practice Finnish vocabulary with an engaging card-based interface
- **Verb Conjugations**: Learn Finnish verb forms including:
  - Vartalo (stem)
  - Imperfekti (past tense) - positive and negative forms
  - Passiivi (passive voice) - positive and negative forms
- **Multi-language Support**: Available in English, Finnish (Suomi), and Vietnamese (Tiếng Việt)
- **Theme Support**: Light and dark mode for comfortable learning in any environment
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Random Word Sets**: Generate new sets of words for varied practice sessions
- **Navigation Controls**: Easy navigation through words with Previous/Next buttons

## Tech Stack

- **Frontend Framework**: React 18.2.0
- **Language**: TypeScript 5.7.0
- **Routing**: React Router DOM 7.13.0
- **Internationalization**: i18next with react-i18next
- **Form Handling**: React Hook Form
- **Build Tool**: React Scripts 5.0.1
- **Containerization**: Docker with Nginx
- **Deployment**: GitHub Pages

## Getting Started

For detailed installation instructions, see [INSTALLATION.md](docs/INSTALLATION.md).

### Quick Start

1. Clone the repository
2. Install dependencies: `yarn install` or `npm install`
3. Start the development server: `yarn start` or `npm start`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `yarn start` - Start the development server
- `yarn build` - Build the app for production
- `yarn test` - Run tests with coverage
- `yarn deploy` - Deploy to GitHub Pages

## Project Structure

```
flash-card/
├── src/
│   ├── app/              # Main application components
│   │   ├── pages/        # Home and Practice pages
│   │   └── Layouts/      # Header and navigation
│   ├── components/       # Reusable UI components
│   ├── contexts/         # React contexts (Theme, Locale, etc.)
│   ├── data/            # Finnish vocabulary data
│   ├── libs/            # Utilities and i18n configuration
│   └── styles/          # Global styles
├── public/              # Static assets
├── docker/              # Docker configuration
└── docs/               # Documentation
```

## How to Use

1. Navigate to the Practice page
2. A random Finnish word is displayed
3. Take a few seconds to guess the meaning
4. Click "Show" to reveal the answer and verb conjugations
5. Use "Previous" and "Next" to navigate through words
6. Click "New Set" to start a new set of words
7. Repeat daily for best results

## Feedback

For feedback, suggestions, or feature requests, please contact: **flashcard2026@gmail.com**

## Live Demo

Access the live application at: [https://quanmuito.github.io/flash-card/](https://quanmuito.github.io/flash-card/)

## License

This project is private.