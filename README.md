# 🎬 Movie Search App

A React app to search movies using the OMDB API.

## Features

- 🔍 Search movies by name
- 🎬 Display movie posters, titles, and release years
- ⏳ Loading and error states
- ⚡ Debounced search with AbortController
- 🎨 Responsive card grid

## Tech Stack

- React 19
- Vite
- OMDB API

## Setup

1. Clone the repo:

   \`\`\`bash
   git clone https://github.com/YOUR_USERNAME/movie-search-app.git
   cd movie-search-app
   \`\`\`

2. Install dependencies:

   \`\`\`bash
   npm install
   \`\`\`

3. Get a free API key from [OMDB](https://www.omdbapi.com/apikey.aspx) and activate it via email.

4. Create a `.env` file in the project root:

   \`\`\`
   VITE_OMDB_KEY=your_api_key_here
   \`\`\`

5. Start the dev server:

   \`\`\`bash
   npm run dev
   \`\`\`

6. Open http://localhost:5173/

## Project Structure

\`\`\`
src/
├── components/
│   ├── MovieCard.jsx
│   ├── MovieList.jsx
│   └── SearchBar.jsx
├── App.jsx
├── App.css
└── main.jsx
\`\`\`

## What I Learned

- React hooks: `useState`, `useEffect`
- API integration with fetch
- Debouncing and AbortController
- Component composition and props

## License

MIT