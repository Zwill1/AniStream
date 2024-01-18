import * as mangaUpdateData from "../../data/mangaHistoryUpdates.json";
import MangaUpdatesCard, {MangaUpdateProp} from "./MangaUpdatesCard";


export default function MangaUpdatesList() {

    return mangaUpdateData.map((item: MangaUpdateProp, index: number) => (
        <MangaUpdatesCard key={item.id} manga={item} index={index} />
    ));
};
