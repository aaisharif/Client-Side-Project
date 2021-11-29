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



    return(
        albums.length > 0 ?

        <div>  
            <NewAlbumForm onAlbumSubmission={addNewAlbum}/>   
            <hr/>  
            <AlbumList albums={albums}/>
        
        </div>
        :
        <p>Loading....</p>
    )
}

export default AlbumContainer;