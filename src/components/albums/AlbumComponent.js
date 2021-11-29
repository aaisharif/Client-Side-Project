import React from 'react'

const AlbumComponent= ({album}) => {

    return(
        <div className= "albums">

            <h3>Name:</h3>
            <p>{album.album_name}</p>
            <h4>Artist ID:</h4>
            <p>{album.artist_id}</p>
            <h4>Genre:</h4>
            <p>{album.genre}</p>
            <h4>Release date:</h4>
            <p>{album.release_date}</p>
            <h4>Number of Tracks:</h4>
            <p>{album.number_of_tracks}</p>

        </div>
    )

}

export default AlbumComponent;
