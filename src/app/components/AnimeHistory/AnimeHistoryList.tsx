import * as animeListDataObj from "../../data/animeHistoryUpdatesList.json";
import AnimeHistoryListCard, { AnimeHistoryListProp } from "./AnimeHistoryListCard";

export default function AnimeHistoryList() {

return animeListDataObj.map((item: AnimeHistoryListProp, index: number) => (
    <AnimeHistoryListCard key={item.id} anime={item} index={index} />
));
};

