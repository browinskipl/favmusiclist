import React, { useEffect, useState } from "react";
import NewAlbumForm from "../components/Form/NewAlbumForm";
import GridWrapper from "../components/Grid/GridWrapper";
import TableWrapper from "../components/Table/TableWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [isGrid, setIsGrid] = useState(false);

  useEffect(() => {
    const storageAlbums = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(storageAlbums)
    if (storageAlbums) {
      setAlbums(storageAlbums);
    }
  }, []);

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

  const sortAlbums = () => {
    const sortedAlbums = albums.sort((a, b) => a.name - b.name)
    console.log(sortedAlbums)
    setAlbums(sortedAlbums)    
  }

  return (
    <div className="App">
      <h1 className="text-center">FavMusicList</h1>
      <NewAlbumForm addAlbum={addAlbum} />
      <Button type="button" onClick={() => setIsGrid(!isGrid)}>
        Grid / List
      </Button>
      <Button type="button" onClick={sortAlbums}>
        sort
      </Button>
      {isGrid ? (
        <GridWrapper
          albums={albums}
          removeAlbum={removeAlbum}
          toggleIsTheBest={toggleIsTheBest}
        />
      ) : (
        <TableWrapper
          albums={albums}
          removeAlbum={removeAlbum}
          toggleIsTheBest={toggleIsTheBest}
        />
      )}
    </div>
  );
};

export default App;
