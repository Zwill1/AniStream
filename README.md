# AniStream

## Project Description

AniStream is a streaming application built on NextJS that showcases popular animated shows by popularity, alphabetical order, random, type and ongoing. The profile cards of the shows can be clicked and show the description of the show, the title, show rating, show score, episode count, when the show aired and the status of it. The anime profile includes screenshots of the show, promotion videos embeded on the page and a link to MyAnimeList anime profile for further information. The home page showcases a endless page scroll on popular shows in order. AniStream allows a user to sign in with credentials or a GitHub account including the ability to sign out using server sessions. The account profile shows stats of anime and manga watched with an API call. The profile section comes with anime and manga history tabs which display lists of recent activity or updated shows/series watched on the right side as well as buttons under the profile image for access to those pages. All data for anime shows, profile stats are called from either an external API and Local Json files.

#### AniStream was configured to show the ID/slug in the URL

Example: "/anime/5114/fullmetal-alchemist:-brotherhood"

Uses the anime page layout, gets the ID from the API, adds it to the URL. 

We then extra the title from the API, replace all income "_" with "-" for SEO friendly URL's and add that after the ID.




First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Packages

* clsx - Conditional classnames https://www.npmjs.com/package/clsx