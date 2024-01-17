import * as animeUpdateData from "../../data/animeHistoryUpdates.json";
import AnimeUpdatesCard, {AnimeUpdateProp} from "./AnimeUpdatesCard";


export default function AnimeUpdatesList() {

    return animeUpdateData.map((item: AnimeUpdateProp, index: number) => (
        <AnimeUpdatesCard key={item.id} anime={item} index={index} />
    ));
};
