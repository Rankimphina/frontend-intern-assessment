````markdown
# Frontend Intern Assessment

A production-ready, responsive static page implementation built from the provided Figma design as part of a Frontend Intern Assessment.

## Live Demo

https://frontend-intern-assessment-git-main-rankimphina-s-projects.vercel.app/

## GitHub Repository

<https://github.com/Rankimphina/frontend-intern-assessment.git>

## Figma Design

https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0

## Overview

This project implements the provided Figma design as a fully responsive Next.js application.

The goal was to translate the design into clean, maintainable, and reusable components while maintaining the layout, spacing, typography, colors, imagery, and overall visual structure of the original design.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Git
- GitHub
- Vercel

## Features

- Responsive layout for mobile, tablet, and desktop
- Sticky navigation bar
- Desktop and mobile navigation
- Dropdown navigation menus
- Responsive hero section
- Management Development section
- Transformation Hub section
- Training and Development section
- Responsive footer
- Call-to-action buttons
- Optimized images using Next.js `Image`
- Semantic HTML structure
- Keyboard-accessible buttons and links

## Responsive Design

The layout was implemented using Tailwind CSS responsive prefixes to support the required screen sizes:

- 425px - Mobile
- 768px - Tablet
- 1280px+ - Desktop

Tailwind's responsive utilities such as `sm:`, `md:`, and `lg:` are used instead of custom media queries.

## Component Structure

The application is divided into logical and reusable components rather than placing the entire page in one file.

Components are organized under the `components` directory where appropriate.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone <https://github.com/Rankimphina/frontend-intern-assessment.git>
````

Navigate into the project directory:

```bash
cd frontend-intern-assessment
```

Install the project dependencies:

```bash
npm install
```

### Run the Development Server

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

## Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## Design Decisions and Technical Assumptions

* Tailwind CSS utility classes were used for styling in accordance with the assessment requirements.
* The layout was built with a mobile-first responsive approach.
* Tailwind responsive prefixes were used to adapt the design across mobile, tablet, and desktop screen sizes.
* Next.js `Image` was used for image optimization.
* The navigation was implemented as a reusable component with dropdown interactions for applicable navigation items.
* The page was structured using semantic HTML elements such as `nav`, `main`, `section`, and `footer`.
* Where the Figma design did not provide functional page destinations, placeholder links were used until actual routes or content are available.
* The implementation prioritizes visual fidelity to the provided Figma design while keeping the code maintainable and reusable.
* The Figma design did not provide all the required images, so one Unsplash image was used as a substitute.
* The exact icons and colors from the Figma design could not be identified, so similar ones were used to closely match the original design.



## Known Issues

* Some navigation dropdown items use placeholder links where no corresponding page or route was provided in the assessment.
* Interactive functionality outside the scope of the static page design has not been implemented.
* The project is primarily focused on the provided static Figma implementation.

## Accessibility

Accessibility considerations included:

* Semantic HTML elements
* Meaningful image `alt` text
* Keyboard-focusable buttons and links
* Visible focus states
* Appropriate button elements for interactive controls
* Responsive navigation for mobile users

## AI Disclosure

AI tools were used to help with debugging, component implementation, and problem-solving. The final implementation was reviewed, adapted, and integrated by the developer to match the provided Figma design and project requirements.

## Deployment

The project is deployed on Vercel.

Live URL:

[https://frontend-intern-assessment-git-main-rankimphina-s-projects.vercel.app/]

## Author

Nendelmwa Sunday Rankim

Frontend Intern Assessment

```
```
