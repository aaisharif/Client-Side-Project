import React from 'react'

const SongComponent= ({song}) => {

    return(
        <div className= "component">

            <h4>Name:</h4>
            <p>{song.song_name}</p>
            <h4>Genre:</h4>
            <p>{song.genre}</p>
            {/* <h4>Duration:</h4>
            <p>{song.duration}</p>
            <h4>Artist ID:</h4>
            <p>{song.artist_id}</p>
            <h4>Album ID:</h4>
            <p>{song.album_id}</p>
            <h4>Release date:</h4>
            <p>{song.release_date}</p>
            <h4>Languages:</h4>
            <p>{song.languages}</p>
            <h4>Platform:</h4>
            <p>{song.platform}</p> */}

        </div>
    )

}

export default SongComponent;
