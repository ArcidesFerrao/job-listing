# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Installation](#installation)
  - [Scripts](#scripts)
  - [Tech Stack](#tech-stack)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![](./public/job-listing.png)

### Links

- Solution URL: [Github Repo](https://github.com/ArcidesFerrao/job-listing)
- Live Site URL: [Vercel Deployment](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ArcidesFerrao/job-listing.git
   cd job-listing
   ```
2. Install dependencies:

   ```bash
   Copy code
   npm install
   ```

3. Start the development server:

   ```bash
   Copy code
   npm run dev
   ```

### Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Preview the production build locally.

### Tech Stack

- **Frontend**: React (via Vite)
- **Styling**: CSS/SCSS (or Tailwind CSS, specify if applicable)
- **State Management**: React Hooks
- **Build Tools**: Vite, Webpack
- **API**: Fetches job data from a placeholder or mock API (replace with actual API if applicable)

### Folder Structure

```csharp
  Copy code
  job-listing/
  ├── public/         # Static assets (e.g., images, icons)
  ├── src/            # Source files
  │   ├── components/ # Reusable UI components (e.g., JobCard, SearchBar)
  │   ├── pages/      # Page components (e.g., JobListingsPage)
  │   ├── App.jsx     # Main app component
  │   ├── index.js    # Entry point
  ├── package.json    # Dependencies and scripts
  └── README.md       # Project documentation
```

### Continued development

As I worked through the challenge of implementing search and filter functionality for the job listings, I needed to learn how to effectively manipulate data structures such as arrays of objects to filter the data based on user input.

The challenge helped me become more comfortable with JavaScript array methods like `.filter()`, `.map()`, and `.includes()`. I had to dynamically filter through job titles, locations, and other attributes, which required thinking critically about how to structure the data for efficient searching.

Moreover, it was an opportunity to explore best practices for handling complex UI updates in React when data changes, which helped improve my understanding of state management and re-rendering in React.

Moving forward, I plan to further improve the efficiency of the filtering system, such as by implementing debouncing for search inputs to reduce the number of operations performed when users type. Additionally, I want to explore integrating a more sophisticated back-end API for dynamic job listings and potentially adding advanced features like multi-level filtering or sorting.

## Author

- Website - [Arcides Ferrao](https://portfolio-arcidesferraos-projects.vercel.app/)
- Frontend Mentor - [@ArcidesFerrao](https://www.frontendmentor.io/profile/ArcidesFerrao)
- Twitter - [@Arcides\_](https://www.twitter.com/Arcides_)
