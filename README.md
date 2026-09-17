# 🎬 Movie Hub

### Live Link: [Movie Hub](https://movie-hub-2.vercel.app/)

**Movie Hub** is a responsive movie discovery web application built with React. It allows users to browse movies, search for titles, and view detailed information through a clean and modern interface.

> **YOUR ULTIMATE CINEMATIC DESTINATION**

## ✨ Features

* 🏠 **Home Page**

  * Movie-themed hero section
  * Project introduction
  * Call-to-action to explore movies

* 🎬 **Movie Listing**

  * Browse available movies
  * Responsive movie card grid
  * Movie poster, title, release year, and rating

* 🔍 **Movie Search**

  * Search movies by title
  * Search API is triggered only when the Search button is clicked
  * Clear search with the X button
  * Validation for empty searches
  * No-results state

* 📋 **Movie Details**

  * View detailed movie information in a modal
  * Rating
  * Release date
  * Genres
  * Overview
  * Network information

* 📱 **Responsive Design**

  * Mobile-friendly layout
  * Tablet and desktop layouts
  * Responsive navigation menu

* ❌ **404 Page**

  * Custom not-found page
  * Navigation back to Home or Movies

* 🔗 **GitHub Link**

  * Project repository link included in the footer

## 🛠️ Technologies

* **React 19**
* **JavaScript**
* **Vite**
* **Tailwind CSS 4**
* **React Router 8**
* **Context API**
* **Lucide React**
* **TVMaze API**

## 📡 API

Movie data is provided by the [TVMaze API](https://www.tvmaze.com/api).

### Get all shows

```text
GET https://api.tvmaze.com/shows
```

### Search shows

```text
GET https://api.tvmaze.com/search/shows?q={query}
```

> **Note:** TVMaze provides television show data rather than traditional movie data. The project uses the term "Movie" throughout the UI to match the project requirements.

## 📂 Project Structure

```text
movie-hub/
├── public/
│   ├── logo.png
│   └── favicon.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Footer.jsx
│   │   ├── SearchBar.jsx
│   │   ├── MovieCard.jsx
│   │   └── MovieDetailsModal.jsx
│   ├── context/
│   │   └── MovieContext.jsx
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Movies.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm

You can verify your installation with:

```bash
node -v
npm -v
```

### 1. Clone the repository

```bash
git clone https://github.com/AbirDas1048/movie-hub
```

### 2. Navigate to the project

```bash
cd movie-hub
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## 📦 Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Preview Production Build

```bash
npm run preview
```

Runs the production build locally.

### Lint

```bash
npm run lint
```

Checks the project for ESLint issues.

### Format

```bash
npx prettier --write .
```

Formats the entire project using Prettier.

## 🎨 Design

Movie Hub uses a dark cinematic interface with:

* Dark zinc background
* Red accent colors
* Responsive layouts
* Movie posters and cinematic imagery
* Clean card-based UI
* Lucide icons
* Smooth hover and transition effects

## 🧭 Routes

| Route     | Page          |
| --------- | ------------- |
| `/`       | Home          |
| `/movies` | Movie Listing |
| `*`       | 404 Not Found |

## 🔎 Search Flow

The search functionality intentionally does **not** call the API on every keystroke.

The flow is:

```text
User types
    ↓
Search input state
    ↓
User clicks Search
    ↓
TVMaze Search API
    ↓
Search results
    ↓
Movie cards
```

This keeps unnecessary API requests from being made while the user is typing.

## 🧠 State Management

The project uses **React Context API** for shared movie and search state.

The `MovieContext` manages:

* Movie list
* Search results
* Search input
* Search term
* Loading state
* Error state
* Search actions
* Clear search action

Components access this state through the custom `useMovies()` hook.

## 📱 Responsive Behavior

The application is designed for:

* 📱 Mobile
* 📱 Tablet
* 💻 Desktop

The navigation changes to a mobile menu on smaller screens, while movie cards automatically adjust their grid layout based on screen size.

## 📄 License

This project is created for learning and portfolio purposes.

Movie and show data are provided by the TVMaze API.

---

**Movie Hub — YOUR ULTIMATE CINEMATIC DESTINATION 🎬**
