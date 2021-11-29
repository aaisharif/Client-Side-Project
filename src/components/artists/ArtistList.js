import ArtistComponent from "./ArtistComponent";

import React from 'react'

function ArtistList({artists}) {
    
    const artistComponents = artists.map(artist => {
        return(
            <ArtistComponent artist={artist} key={artist.id} /> 
        )
    })

    return (
        <div className="artist-list">
            {artistComponents}
        </div>
    )
}

export default ArtistList;
