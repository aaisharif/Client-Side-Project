import React from 'react'

const AlbumComponent= ({album}) => {

    return(
        <div className= "albums">

            <h3>Name:</h3>
            <p>{artist.album_name}</p>
            <h4>Artist ID:</h4>
            <p>{artist.artist_id}</p>
            <h4>Genre:</h4>
            <p>{artist.genre}</p>
            <h4>Release date:</h4>
            <p>{artist.release_date}</p>
            <h4>Number of Tracks:</h4>
            <p>{artist.number_of_tracks}</p>

        </div>
    )

}

export default AlbumComponent;
