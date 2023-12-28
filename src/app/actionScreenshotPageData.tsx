"use server";

import Screenshots, {ScreenshotCard} from "./components/Screenshots";

export const fetchScreenshotsById = async (id : number) => {

    const response = await fetch(`https://shikimori.one/api/animes/${id}`);

    const screenshotData = await response.json();

    // console.log("from screenshot page");
    // console.log(screenshotData);

    return screenshotData.screenshots.map((item: ScreenshotCard, index: number) => (
        <Screenshots key={index} anime={item} index={index} />
      ));

};