import React from 'react'
import SongComponent from "./SongComponent"

const SongList = ({songs, favourited, addFavouriteSong, modeHeart}) => {

    const songComponents = songs.map(song => {

        return(
            <SongComponent song={song} favourited={favourited} addFavouriteSong={addFavouriteSong} modeHear={modeHeart} key={song.id}/>
        )
    })

    
    return(
       <div className="list">
           {songComponents}
       </div>
    )

    
}

export default SongList;