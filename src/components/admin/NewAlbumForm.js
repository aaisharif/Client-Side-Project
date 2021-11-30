import { useState } from "react";

const NewAlbumForm = ({onAlbumSubmission}) => {

    const [name, setName] = useState("");
    const [artistId, setArtistId] = useState("");
    const [genre, setGenre] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [noOfTracks, setNoOfTracks] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleArtistIdChange = (event) => {
        setArtistId(event.target.value);
    }

    const handlGenreChange = (event) => {
        setGenre(event.target.value);
    }

    const handleReleaseDateChange = (event) => {
        setReleaseDate(event.target.value);
    }

    const handleNoOfTracksChange = (event) => {
        setNoOfTracks(event.target.value);
    }
    
    const handleFormSubmission = (event) => {
        event.preventDefault();

        const newAlbums = {
            album_name: name,
            artist_id: artistId,
            genre: genre,
            release_date: releaseDate,
            number_of_tracks: noOfTracks
        }

        onAlbumSubmission(newAlbums);

        
        setName("");
        setArtistId("");
        setGenre("");
        setReleaseDate("");
        setNoOfTracks("");

    }


    return(
        <>
        <h2>Add a new Album:</h2>
        <form onSubmit={handleFormSubmission}>
            <div className="formElement">
                <label htmlFor="name">Album Name: </label>
                <input type="text" id="name" value={name} onChange={handleNameChange}/>
            </div>
            <div className="formElement">
                <label htmlFor="artistId">Artist ID: </label>
                <input type="text" id="artistId" value={artistId} onChange={handleArtistIdChange}/>
            </div>
            <div className="formElement">
                <label htmlFor="genre">Genre: </label>
                <input type="text" id="genre" value={genre} onChange={handlGenreChange}/>
            </div>
            <div className="formElement">
                <label htmlFor="releaseDate">Release Date: </label>
                <input type="text" id="releaseDate" value={releaseDate} onChange={handleReleaseDateChange}/>
            </div>
            <div className="formElement">
                <label htmlFor="noOfTracks">No. of Tracks: </label>
                <input type="text" id="noOfTracks" value={noOfTracks} onChange={handleNoOfTracksChange}/>
            </div>
            <div className="formElement">
                <input type="submit" value="Add Album"/>
            </div>
            {/* <div className="formElement">
                <input type="update" value="Update Album"/>
            </div> */}
        </form>
    </>
    )
}

export default NewAlbumForm;