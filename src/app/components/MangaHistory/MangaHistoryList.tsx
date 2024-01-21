import * as mangaUpdateData from "../../data/mangaHistoryUpdates.json";
import MangaHistoryListCard, { MangaUpdateProp } from "./MangaHistoryListCard";


export default function MangaHistoryList() {

    return mangaUpdateData.map((item: MangaUpdateProp, index: number) => (
        <MangaHistoryListCard key={item.id} manga={item} index={index} />
    ));
};
