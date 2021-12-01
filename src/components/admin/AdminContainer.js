import React from 'react'
import './Admin.css'
import NewSongForm from './NewSongForm'
import NewAlbumForm from './NewAlbumForm';
import NewArtistForm from './NewArtistForm';
import { useState, useEffect } from "react";
import Navbar from '../navbar/Navbar';
import chickenGroup from './chickenGroup.png';

const AdminContainer = () => {

    const [songs, setSongs] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [artists, setArtists] = useState([])

    const getArtistData = () => {
        fetch("http://localhost:8080/api/v1/artists")
            .then(resp => resp.json())
            .then(data => setArtists(data))
    }


    useEffect(getArtistData, []);

    const addNewArtist = (newArtist) => {

        fetch("http://localhost:8080/api/v1/artists/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newArtist)
        })
            .then(getArtistData);
    }

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
            <Navbar className="navbar-admin-container" />


            <div class="muzieknootjes2">
                <div class="noot-1_2">
                    &#9835; &#9833;
                </div>
                <div class="noot-2_2">
                    &#9833;
                </div>
                <div class="noot-3_2">
                    &#9839; &#9834;
                </div>
                <div class="noot-4_2">
                    &#9834;
                </div>
            </div>
            
       
            <div>
                <img src={chickenGroup} alt="" className="chicken-background" />
            </div>
            <div className="admin-forms-container">

                <div className="new-artist-form form-items">
                    <NewArtistForm onArtistSubmission={addNewArtist} />
                </div>
                <div className="new-album-form form-items">
                    <NewAlbumForm onAlbumSubmission={addNewAlbum} />
                </div>
                <div className="new-song-form form-items">
                    <NewSongForm onSongSubmission={addNewSong} />
                </div>
            </div>
            <div class="muzieknootjes3">
                <div class="noot-1_2">
                    &#9835; &#9833;
                </div>
                <div class="noot-2_2">
                    &#9833;
                </div>
                <div class="noot-3_2">
                    &#9839; &#9834;
                </div>
                <div class="noot-4_2">
                    &#9834;
                </div>
            </div>
        </div>
    )
}

export default AdminContainer
