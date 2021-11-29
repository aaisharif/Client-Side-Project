import React from 'react'
import NewSongForm from './NewSongForm'
import NewAlbumForm from './NewAlbumForm';
import { useState, useEffect } from "react";

const AdminContainer = () => {

    const [songs, setSongs] = useState ([]);
    const [albums, setAlbums] = useState ([]);

    const getSongData = () => {
        fetch("http://localhost:8080/api/v1/songs")
        .then(response => response.json())
        .then(data => setSongs(data));
    }

    useEffect(getSongData, []);

    const addNewSong = (newSong) => {
        fetch("http://localhost:8080/api/v1/songs/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSong)
        })
        .then(getSongData)
    }

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

    return (

        <div>
            <NewSongForm onSongSubmission={addNewSong}/> 
            <NewAlbumForm onAlbumSubmission={addNewAlbum}/> 
        </div>
    )
}

export default AdminContainer
