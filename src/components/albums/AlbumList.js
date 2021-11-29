import React from 'react'

const AlbumList = ({albums}) => {

    const albumComponents = albums.map(album => {

        return(
            <AlbumComponent album={album} key={album.id}/>
        )
    })

    
    return(
       <div className="album_list">
           {Albums}
       </div>
    )

    
}

export default AlbumList;