import React, { useEffect, useState } from "react";
import NewAlbumForm from "../components/Form/NewAlbumForm";
import GridWrapper from "../components/Grid/GridWrapper";
import TableWrapper from "../components/Table/TableWrapper";
import { LOCAL_STORAGE_KEY } from "../config";
import Header from "../components/Header/Header";
import useSortHook from "../hooks/useSortHook";
import useAlbumsHook from "../hooks/useAlbumsHook";
import Options from "../components/Options/Options";

const Home = () => {
  const { albums, setAlbums, addAlbum, removeAlbum, toggleIsTheBest } = useAlbumsHook();
  const { handleSort, sortByName, sortById, sortByDate } = useSortHook(albums, setAlbums);
  const [isGrid, setIsGrid] = useState(false);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(albums));
  }, [albums]);

  const handleView = isGrid ? (
    <GridWrapper
      albums={albums}
      removeAlbum={removeAlbum}
      toggleIsTheBest={toggleIsTheBest}
      isGrid={isGrid}
    />
  ) : (
    <TableWrapper
      albums={albums}
      removeAlbum={removeAlbum}
      toggleIsTheBest={toggleIsTheBest}
      isGrid={isGrid}
    />
  )


  return (
    <div className="App">
      <Header />
      <NewAlbumForm addAlbum={addAlbum} />
      <Options
        isGrid={isGrid}
        setIsGrid={setIsGrid}
        sortByName={sortByName}
        sortById={sortById}
        sortByDate={sortByDate}
        handleSort={handleSort}
      />
      {handleView}
    </div>
  );
};

export default Home;
