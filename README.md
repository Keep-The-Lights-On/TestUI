# Trikal AI

Institutional-grade market intelligence powered by proprietary machine learning models.

## Overview

Trikal AI is a high-performance financial intelligence application that provides real-time market data and insights. Built with a robust full-stack architecture, it integrates live data feeds with a polished, professional user interface.

## Tech Stack

- **Frontend**: [React 19](https://react.dev/) - A modern UI library for building dynamic interfaces.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid and consistent design.
- **Backend**: [Express](https://expressjs.com/) - A minimal and flexible Node.js web application framework.
- **Development Server**: [Vite](https://vitejs.dev/) - Integrated as middleware within Express for an optimized full-stack development experience.
- **Market Data**: [yahoo-finance2](https://github.com/gadicc/yahoo-finance2) - Real-time and historical stock market data provider.
- **Animations**: [Motion](https://motion.dev/) - Production-ready animations for React.
- **Icons**: [Lucide React](https://lucide.dev/) - Beautifully simple, pixel-perfect icons.

## Features

- **Live Market Ticker**: Real-time stock price updates for major Indian indices and stocks.
- **Full-Stack Architecture**: Unified development environment where Express serves both API routes and the frontend application.
- **Responsive Design**: Optimized for everything from mobile devices to ultra-wide desktop monitors.
- **Typescript Powered**: Full type safety across the entire application stack.

## Getting Started Locally

Follow these steps to set up the project on your machine:

### Prerequisites

- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. **Clone or Download the repository.**
2. **Open your terminal** and navigate to the project root directory.
3. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:
```bash
npm run dev
```

The application will be accessible at:
[http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev`: Starts the Express server which hosts both the API and the Vite development server for the frontend.
- `npm run build`: Compiles the React application into static files for production (outputs to `/dist`).
- `npm run lint`: Perfors TypeScript type checking without emitting files.
- `npm run clean`: Deletes the `/dist` folder.

## Project Structure

- `/src`: Frontend React components and logic.
- `/src/components`: Reusable UI elements.
- `server.ts`: The main Express entry point, handling API routes and Vite middleware integration.
- `package.json`: Project dependencies and script definitions.
- `metadata.json`: Application metadata used by the platform.
