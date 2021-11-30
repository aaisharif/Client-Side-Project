import React from 'react'
import AlbumComponent from "./AlbumComponent"

const AlbumList = ({albums}) => {

    const albumComponents = albums.map(album => {

        return(
            <AlbumComponent album={album} key={album.id}/>
        )
    })

    
    return(
       <div className="list">
           {albumComponents}
       </div>
    )

    
}

export default AlbumList;