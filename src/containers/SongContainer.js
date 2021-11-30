import { useState, useEffect } from "react";
import NewSongForm from "../components/admin/NewSongForm"
import SongList from "../components/songs/SongList";
import Navbar from "../components/navbar/Navbar";

const SongContainer = () => {

    const [songs, setSongs] = useState ([]);
    const [filter, setFilter] = useState('');


    const handleType = (e) => {
        setFilter(e.target.value);
    }

    console.log(songs)

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

    const updateSongById = (id) => {
        console.log("updating song" + id);
        const songToUpdate = songs.find(song => song.id === id)
        //albumToUpdate.completed = true;

        fetch(`http://localhost:8080/api/v1/songs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(songToUpdate)
        })
            .then(getSongData);
    }

    const deleteSongById = (id) => {
        console.log("deleting song" + id);
        const songToDelete = songs.find(song => song.id === id)
        //albumToDEleted.completed = true;

        fetch(`http://localhost:8080/api/v1/songs/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(songToDelete)
        })
            .then(getSongData);
    }

    const searchSong = (songs) => {
        return songs.filter(song => song.song_name.toLowerCase().indexOf(filter.toLowerCase().trim()) > -1); 
    }

    return(
        songs.length > 0 ?

        <div>  

            <Navbar handleType={handleType} filter={filter}/>
            <SongList songs={searchSong(songs)} onUpdateSongById={updateSongById} onDeleteSongById={deleteSongById}/>
            {/* <NewSongForm onSongSubmission={addNewSong}/>    */}
            <SongList songs={songs} onUpdateSongById={updateSongById} onDeleteSongById={deleteSongById}/>

        
        </div>
        :
        <p>Loading....</p>
    )
}

export default SongContainer;