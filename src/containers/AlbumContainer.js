import AlbumList from "../components/albums/AlbumList";
import { useState, useEffect } from "react";
import NewAlbumForm from "../components/admin/NewAlbumForm"


const AlbumContainer = () => {

    const [albums, setAlbums] = useState ([]);

    const getAlbumData = () => {
        fetch("http://localhost:8080/api/v1/albums")
        .then(response => response.json())
        .then(data => setAlbums(data));
    }

    useEffect(getAlbumData, []);

    const addNewAlbum = (newAlbum) => {
        fetch("http://localhost:8080/api/v1/albums/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAlbum)
        })
        .then(getAlbumData)
    }

    const updateAlbumById = (id) => {
        console.log("updating album" + id);
        const albumToUpdate = albums.find(album => album.id === id)
        //albumToUpdate.completed = true;

        fetch(`http://localhost:8080/api/v1/albums/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(albumToUpdate)
        })
            .then(getAlbumData);
    }

    const deleteAlbumById = (id) => {
        console.log("deleting album" + id);
        const albumToDelete = albums.find(album => album.id === id)
        //albumToDEleted.completed = true;

        fetch(`http://localhost:8080/api/v1/albums/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(albumToDelete)
        })
            .then(getAlbumData);
    }


    return(
        albums.length > 0 ?

        <div>  
            <NewAlbumForm onAlbumSubmission={addNewAlbum}/>   
            <AlbumList albums={albums} onUpdateAlbumById={updateAlbumById} onDeleteAlbumById={deleteAlbumById}/>
        
        </div>
        :
        <p>Loading....</p>
    )
}

export default AlbumContainer;