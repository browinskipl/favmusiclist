import React, { useEffect, useState } from "react";
import NewAlbumForm from "../components/Form/NewAlbumForm";
import GridWrapper from "../components/Grid/GridWrapper";
import TableWrapper from "../components/Table/TableWrapper";
import { LOCAL_STORAGE_KEY } from "../config";
import Header from "../components/Header/Header";
import useSortHook from "../hooks/useSortHook";
import useAlbumsHook from "../hooks/useAlbumsHook";
import Options from "../components/Options/Options";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Home = () => {
  const { albums, setAlbums, addAlbum, removeAlbum, toggleIsTheBest } = useAlbumsHook();
  const { handleSort } = useSortHook(albums, setAlbums);
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
        handleSort={handleSort}
      />
      {handleView}
      <ToastContainer />
    </div>
  );
};

export default Home;
