import { useState } from "react";

const NewSongForm = ({onSongSubmission}) => {

    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [duration, setDuration] = useState("");
    const [artistId, setArtistId] = useState("");
    const [albumId, setAlbumId] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [languages, setLanguages] = useState("");
    const [platform, setPlatform] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    }
    const handleDurationChange = (event) => {
        setDuration(event.target.value);
    }
    const handleArtistIdChange = (event) => {
        setArtistId(event.target.value);
    }
    const handleAlbumIdChange = (event) => {
        setAlbumId(event.target.value);
    }
    const handleReleaseDateChange = (event) => {
        setReleaseDate(event.target.value);
    }
    const handleLanguagesChange = (event) => {
        setLanguages(event.target.value);
    }
    const handlePlatformChange = (event) => {
        setPlatform(event.target.value);
    }
    
    const handleFormSubmission = (event) => {
        event.preventDefault();

        const newSongs = {
            song_name: name,
            genre: genre,
            duration: duration,
            artist_id: artistId,
            album_id: albumId,
            release_date: releaseDate,
            languages: languages,
            platform: platform
        }

        onSongSubmission(newSongs);
   
        setName("");
        setGenre("");
        setDuration("");
        setArtistId("");
        setAlbumId("");
        setReleaseDate("");
        setLanguages("");
        setPlatform("");

    }

    return(
        <>
        <h2>Add a new Song:</h2>
        <form onSubmit={handleFormSubmission}>
            <div className="formElement">
                <label htmlFor="name">Song Name: </label>
                <input type="text" id="name" value={name} onChange={handleNameChange}/>
            </div>
            <div className="formElement">
                <label htmlFor="genre">Genre: </label>
                <input type="text" id="genre" value={genre} onChange={handleGenreChange}/>
            </div>
            <div className="formElement">
                <label htmlFor="duration">Duration: </label>
                <input type="text" id="duration" value={duration} onChange={handleDurationChange}/>
            </div>
            <div className="formElement">
                <label htmlFor="artistId">Artist ID: </label>
                <input type="text" id="artistId" value={artistId} onChange={handleArtistIdChange}/>
            </div>
            <div className="formElement">
                <label htmlFor="albumId">Album ID: </label>
                <input type="text" id="albumId" value={albumId} onChange={handleAlbumIdChange}/>
            </div>
            <div className="formElement">
                <label htmlFor="releaseDate">Release Date: </label>
                <input type="text" id="releaseDate" value={releaseDate} onChange={handleReleaseDateChange}/>
            </div>
            <div className="formElement">
                <label htmlFor="languages">Languages: </label>
                <input type="text" id="languages" value={languages} onChange={handleLanguagesChange}/>
            </div>
            <div className="formElement">
                <label htmlFor="platform">Platform: </label>
                <input type="text" id="platform" value={platform} onChange={handlePlatformChange}/>
            </div>
            <div className="formElement">
                <input type="submit" value="Add Song"/>
            </div>
            {/* <div className="formElement">
                <input type="update" value="Update Album"/>
            </div> */}
        </form>
    </>
    )
}

export default NewSongForm;