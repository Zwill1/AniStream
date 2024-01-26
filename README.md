# AniStream

## Project Description

AniStream is a streaming application built on NextJS that showcases popular animated shows by popularity, alphabetical order, random, type and ongoing. 

The profile cards of the shows can be clicked and show the description of the show, the title, show rating, show score, episode count, when the show aired and the status of it. The anime profile includes screenshots of the show, promotion videos embeded on the page and a link to MyAnimeList anime profile for further information. 

Home page showcases a endless page scroll on popular shows in order. AniStream allows a user to sign in with credentials or a GitHub account including the ability to sign out using server sessions. 

The account profile shows stats of anime and manga watched. The profile section comes with anime and manga history tabs which display lists of recent activity or updated shows/series watched on the right side as well as buttons under the profile image for access to those pages. 

All data for anime shows, profile stats are called from either an external API and local JSON files.

## AniStream URL configurations

The intent for SEO friendly URL was to provide an ID for the anime with an SEO frieldly slug in the URL consisting of the name of the show

Example: "/anime/5114/fullmetal-alchemist:-brotherhood"

#### ID Config

* Gets the ID from the API
* Adds it to the URL. 

### Slug Config

* Gets the title from the API
* Replace all incoming url names that have "_" with "-" for SEO friendly URL's
* Add that after the ID.

Find out more about dynamic routing: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes


## How does the application load more anime shows to the page?

The green "Load More" button loops over the action of loading the next row of shows depending on the category selected. The loop increments and keeps track of the count with a limit of 6 loading per click.

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