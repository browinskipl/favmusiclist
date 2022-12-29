import React, { useEffect, useState } from "react";
import NewAlbumForm from "../components/Form/NewAlbumForm";
import GridWrapper from "../components/Grid/GridWrapper";
import TableWrapper from "../components/Table/TableWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import { LOCAL_STORAGE_KEY } from "../config";
import { Button } from "reactstrap";

const App = () => {
  const [sort, setSort] = useState(true);
  const [albums, setAlbums] = useState([
    {
        "id": "d11e3bfd-0901-424a-863a-a1fd5c84231a",
        "name": "4",
        "bestOfTheBest": false,
        "createdAt": "Thu Dec 28 2022"
    },
    {
        "id": "b36ea375-d1e6-4b20-904b-94d48d8c805c",
        "name": "2",
        "bestOfTheBest": false,
        "createdAt": "Thu Dec 29 2022"
    },
    {
        "id": "a9e25902-08e2-473f-a67b-7755b8ee8f2f",
        "name": "1",
        "bestOfTheBest": false,
        "createdAt": "Thu Dec 27 2022"
    },
    {
        "id": "9dfc03dc-a313-498b-9d66-6d139344b048",
        "name": "5",
        "bestOfTheBest": false,
        "createdAt": "Thu Dec 26 2022"
    },
    {
        "id": "69152649-a4e5-451c-a259-c475915371f9",
        "name": "3",
        "bestOfTheBest": false,
        "createdAt": "Thu Dec 25 2022"
    }
]);
  const [isGrid, setIsGrid] = useState(false);

  useEffect(() => {
    const storageAlbums = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(storageAlbums);
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

  const sortStuff = (sortMethod) => {
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

  return (
    <div className="App">
      <h1 className="text-center">FavMusicList</h1>
      <NewAlbumForm addAlbum={addAlbum} />
      <Button type="button" onClick={() => setIsGrid(!isGrid)}>
        Grid / List
      </Button>
      <Button type="button" onClick={() => sortStuff(sortById)}>
        Sort by ID
      </Button>
      <Button type="button" onClick={() => sortStuff(sortByName)}>
        Sort by name
      </Button>
      <Button type="button" onClick={() => sortStuff(sortByDate)}>
        Sort by date
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
