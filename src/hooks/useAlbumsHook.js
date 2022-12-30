import { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "../config";
import { toast } from 'react-toastify';
import { FormattedMessage } from "react-intl";

const useAlbumsHook = () => {
    const [albums, setAlbums] = useState(() => {
        const storageAlbums = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        return storageAlbums ?? [];
    });
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(albums));
    }, [albums]);

    const addAlbum = (album) => {
        setAlbums([album, ...albums]);
        toast.success(<FormattedMessage id="saveSuccess" />, {
            position: toast.POSITION.TOP_RIGHT
        });

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
        toast.success(<FormattedMessage id="saveSuccess" />, {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    return { albums, setAlbums, addAlbum, removeAlbum, toggleIsTheBest }
};

export default useAlbumsHook;
