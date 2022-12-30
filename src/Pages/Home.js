import React, { useEffect, useState } from "react";
import NewAlbumForm from "../components/Form/NewAlbumForm";
import GridWrapper from "../components/Grid/GridWrapper";
import TableWrapper from "../components/Table/TableWrapper";
import { LOCAL_STORAGE_KEY } from "../config";
import Header from "../components/Header/Header";
import Options from "../components/Options/Options";

const Home = () => {
  const [sort, setSort] = useState(true);
  const [albums, setAlbums] = useState(() => {
    const storageAlbums = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return storageAlbums ?? [];
  });
  const [isGrid, setIsGrid] = useState(false);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(albums));
  }, [albums]);

  const addAlbum = (album) => {
    setAlbums([album, ...albums]);
  };

  const toggleIsTheBest = (id) => {
    setAlbums(
      albums.map((album) => {
        if (album.id === id) {
          return {
            ...album,
            bestOfTheBest: !album.bestOfTheBest,
          };
        }
        return album;
      })
    );
  };

  const removeAlbum = (id) => {
    setAlbums(albums.filter((album) => album.id !== id));
  };

  const handleSort = (sortMethod) => {
    const sorted = [...albums].sort(sortMethod);
    setSort(!sort);
    setAlbums(sorted);
  };

  const sortByName = (a, b) => {
    sort === true && ([a, b] = [b, a]);
    return a.name.localeCompare(b.name);
  };

  const sortById = (a, b) => {
    sort === true && ([a, b] = [b, a]);
    return a.id.localeCompare(b.id);
  };

  const sortByDate = (a, b) => {
    sort === true && ([a, b] = [b, a]);
    return a.createdAt.localeCompare(b.createdAt);
  };

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
