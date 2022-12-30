import { useState } from "react";
import { sortByName, sortById, sortByDate } from "../utils/helpers/sortHelper";

const useSortHook = (albums, setAlbums) => {
    const [sortDirection, setSortDirection] = useState(true);

    const handleSort = (sortMethod) => {
        const sorted = [...albums].sort(sortMethod(sortDirection));
        setSortDirection(!sortDirection);
        setAlbums(sorted);
    };

    return { handleSort, sortByName, sortById, sortByDate }
};

export default useSortHook;
