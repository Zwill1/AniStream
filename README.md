# AniStream

## Project Description

AniStream is a streaming application built on NextJS that showcases popular animated shows by popularity, alphabetical order, random, type and ongoing. The profile cards of the shows can be clicked and show the description of the show, the title, show rating, show score, episode count, when the show aired and the status of it. 

The anime profile includes screenshots of the show, promotion videos embeded on the page and a link to MyAnimeList anime profile for further information. The home page showcases a endless page scroll on popular shows in order. AniStream allows a user to sign in with credentials or a GitHub account including the ability to sign out using server sessions. 

The account profile shows stats of anime and manga watched with an API call. The profile section comes with anime and manga history tabs which display lists of recent activity or updated shows/series watched on the right side as well as buttons under the profile image for access to those pages. All data for anime shows, profile stats are called from either an external API and Local Json files.

## AniStream was configured to show the ID/slug in the URL

Example: "/anime/5114/fullmetal-alchemist:-brotherhood"

Uses the anime page layout, gets the ID from the API, adds it to the URL. 

We then extra the title from the API, replace all income "_" with "-" for SEO friendly URL's and add that after the ID.

## How does the application load more anime shows to the page?

WIP

## How to run this application

```bash
npx next dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Packages

* NextJS - The React Framework for the Web https://nextjs.org/
* React - The library for web and native user interfaces https://react.dev/
* NextAuth.js - Authentication for Next.js https://next-auth.js.org/
* React Intersection Observer - Element enters or leaves the viewport https://www.npmjs.com/package/react-intersection-observer
TypeScript icon, indicating that this package has built-in type declarations
* Tailwind CSS
* Typescript
* Eslint
* Framer Motion - A production-ready motion library for React https://www.framer.com/motion/
* clsx - Conditional classnames https://www.npmjs.com/package/clsx
* Material Icons - https://mui.com/material-ui/material-icons/