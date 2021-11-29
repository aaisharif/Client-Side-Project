import React from 'react'
import SongComponent from "./SongComponent"

const SongList = ({songs}) => {

    const songComponents = songs.map(song => {

        return(
            <SongComponent song={song} key={song.id}/>
        )
    })

    
    return(
       <div className="song-list">
           {songComponents}
       </div>
    )

    
}

export default SongList;