import React from 'react'


const ArtistComponent= ({artist}) => {

    return(
        <div className= "component">

            <h4>Name:</h4>
            <p>{artist.artist_name}</p>
            {/* <h4>Nationality:</h4>
            <p>{artist.nationality}</p> */}
            <h4>Biggest Hit:</h4>
            <p>{artist.biggest_hit}</p>

        </div>
    )

}

export default ArtistComponent;
