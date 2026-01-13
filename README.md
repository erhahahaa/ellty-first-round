# Ellty First Round

A React + TypeScript application demonstrating component building skills for the Ellty coding challenge.

## About This Project

This submission showcases the implementation of an interactive page selection interface with the following key features:

- **Interactive Page Selection**: A checkbox list with support for individual page selection, select all functionality, and indeterminate states
- **Applicant Information**: Clean display of applicant details with working email and GitHub links
- **Modern UI Components**: Custom-built React components including Card, Checkbox, Button, and Separator
- **Responsive Design**: Fully responsive layout built with Tailwind CSS

## Features

### Page Selection Component
- Master checkbox with indeterminate state support
- Individual page checkboxes for "Page 1" through "Page 4"
- Smart state management for bulk selection/deselection
- Clean, accessible checkbox design

### Applicant Details Component
- Professional presentation of applicant information
- Clickable email address
- Direct links to GitHub profile and repository
- Consistent styling with the rest of the application

### UI Component Library
- **Card & CardItem**: Reusable container components
- **Checkbox**: Custom checkbox with indeterminate state support
- **Button**: Styled button component with hover effects
- **Separator**: Visual separator component

## Technology Stack

- **Frontend**: React 19.1.1 with TypeScript
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS v4.1.18
- **Deployment**: Cloudflare Workers via Wrangler
- **Package Manager**: Bun
- **Development Tools**: ESLint with TypeScript support

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/erhahahaa/ellty-first-round.git
cd ellty-first-round
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

The application will be available at `http://localhost:5173`.

## Available Scripts

- `bun run dev` - Start the development server with hot reload
- `bun run build` - Build the application for production
- `bun run lint` - Run ESLint to check code quality
- `bun run preview` - Preview the production build locally
- `bun run deploy` - Build and deploy to Cloudflare Workers
- `bun run cf-typegen` - Generate Cloudflare Worker types

## Project Structure

```
src/
├── components/
│   ├── applicant-details.tsx  # Applicant information component
│   ├── button.tsx             # Button UI component
│   ├── card.tsx              # Card and CardItem components
│   ├── checkbox.tsx          # Checkbox with indeterminate state
│   ├── pages.tsx             # Page selection functionality
│   └── separator.tsx         # Visual separator component
├── App.tsx                   # Main application component
├── main.tsx                  # Application entry point
├── index.css                 # Global styles and Tailwind imports
└── vite-env.d.ts            # Vite environment type definitions
```

## Deployment

This application is configured for deployment on Cloudflare Workers:

1. Set up your Cloudflare account and install Wrangler CLI
2. Authenticate with Cloudflare:
```bash
wrangler auth login
```

3. Deploy the application:
```bash
bun run deploy
```

The deployment script automatically builds the application and deploys it to your Cloudflare Workers account.

## Applicant Information

- **Name**: Rahmat Hidayatullah
- **Email**: [rahmat.zenta@gmail.com](mailto:rahmat.zenta@gmail.com)
- **GitHub**: [View Profile](https://github.com/erhahahaa)
- **Repository**: [Source Code](https://github.com/erhahahaa/ellty-first-round)

## Code Quality

The project follows modern React development practices:
- TypeScript for type safety
- Functional components with hooks
- ESLint configuration for consistent code style
- Component-based architecture
- Proper state management with useState
- Accessibility considerations for interactive elements
